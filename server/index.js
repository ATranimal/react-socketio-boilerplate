const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

const PORT_NUMBER = 3001;
const MAX_PLAYERS = 2;
const MAX_ROOM_COUNT = 1;

const THEME_RANGE = [0, 7];
const EVENT_RANGE = [8, 22];
const THING_RANGE = [23, 37];
const INHABITANT_RANGE = [38, 52];

/* Room struct:
  players: []
    (name)
*/

/* GameState struct
  numberPlayers
  started
  cards []
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
          started: false,
          playerTurn: 0,
          cards: [],
          players: [userName],
        };
        socket.join(roomName);
        io.to(roomName).emit("updateGameState", rooms[roomName]);
      }
    }
    // Add player to existing room
    else {
      if (rooms[roomName].players.length >= MAX_PLAYERS) {
        console.log("Room is full, cannot add player to room");
      } else {
        rooms[roomName].players.push(userName);
        socket.join(roomName);
        io.to(roomName).emit("updateGameState", rooms[roomName]);
      }
    }
  });

  socket.on("startGame", (roomName) => {
    console.log(`Game started in room ${roomName}`);

    const firstCardID = getRandomInt(THEME_RANGE[0], THEME_RANGE[1]);

    rooms[roomName].cards.push(firstCardID);
    rooms[roomName].started = true;

    io.to(roomName).emit("updateGameState", rooms[roomName]);
  });

  socket.on("nextTurn", (roomName, cardType) => {
    console.log(`Next turn in ${roomName} with type ${cardType}`);
    let newCardID = 0;
    if (cardType === 1) {
      // Event
      newCardID = getRandomInt(EVENT_RANGE[0], EVENT_RANGE[1]);
    }
    if (cardType === 2) {
      // Thing
      newCardID = getRandomInt(THING_RANGE[0], THING_RANGE[1]);
    }
    if (cardType === 3) {
      // Inhabitant
      newCardID = getRandomInt(INHABITANT_RANGE[0], INHABITANT_RANGE[1]);
    }

    rooms[roomName].cards.push(newCardID);
    rooms[roomName].playerTurn =
      (rooms[roomName].playerTurn + 1) % rooms[roomName].players.length;

    io.to(roomName).emit("updateGameState", rooms[roomName]);
  });
});

http.listen(PORT_NUMBER, function () {
  console.log(`listening on ${PORT_NUMBER}`);
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
