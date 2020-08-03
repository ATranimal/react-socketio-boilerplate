const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

const PORT_NUMBER = 3001;
const MAX_PLAYERS = 2;
const MAX_ROOM_COUNT = 1;

/* Room struct:
  players: []
    (name)
*/

/* GameState struct
  numberPlayers
  started
*/

let rooms = {};

io.on("connection", function (socket) {
  console.log("A user has connected.");

  socket.on("disconnect", function () {
    console.log("A user has disconnected.");
  });

  socket.on("join", (roomName, userName) => {
    console.log(`${userName} is joining ${roomName}`);

    // Create a new room
    if (!rooms.hasOwnProperty(roomName)) {
      if (Object.keys(rooms).length >= MAX_ROOM_COUNT) {
        // TODO: Emit to user
        console.log("Too many rooms, cannot create a new one");
      } else {
        rooms[roomName] = {
          players: [userName],
        };
        socket.join(roomName);
        io.to(roomName).emit("updateGameState", {
          numberOfPlayers: 1,
          started: false,
        });
      }
    }
    // Add player to existing room
    else {
      if (rooms[roomName].players.length >= MAX_PLAYERS) {
        console.log("Room is full, cannot add player to room");
      } else {
        rooms[roomName].players.push(userName);
        socket.join(roomName);
        io.to(roomName).emit("updateGameState", {
          numberOfPlayers: rooms[roomName].players.length,
          started: false,
        });
      }
    }
  });
});

http.listen(PORT_NUMBER, function () {
  console.log(`listening on ${PORT_NUMBER}`);
});
