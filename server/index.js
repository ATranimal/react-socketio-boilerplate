const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

const PORT_NUMBER = 4001;
const MAX_PLAYERS = 6;
const MAX_ROOM_COUNT = 50;
const ROOM_TIMEOUT = 3600000;

const THEME_RANGE = [0, 7];
const EVENT_RANGE = [8, 22];
const THING_RANGE = [23, 37];
const INHABITANT_RANGE = [38, 52];

/* PlayerMap struct:
  id {
    name: string
  }
*/

/* GameState struct
  roomName {
    started boolean
    playerTurn number
    cards number[]
    players string[]
  }
*/

let rooms = {};
let playerMap = {};

io.on("connection", function (socket) {
  console.log("A user has connected.");
  playerMap[socket.id] = "";

  socket.on("disconnect", function () {
    const playerName = playerMap[socket.id];
    console.log(`${playerName} has disconnected`);

    // Remove player from room if it is not started, else keep in room so they can reconnect
    for (var room in rooms) {
      if (rooms[room].players.includes(playerName) && !rooms[room].started) {
        rooms[room].players = rooms[room].players.filter(
          (name) => name !== playerName
        );

        io.to(room).emit("updateGameState", rooms[room]);
      }

      // Delete room if not started and has no players
      if (rooms[room].players.length === 0) {
        delete rooms[room];
      }
    }

    console.log(rooms);
    delete playerMap[socket.id];
  });

  socket.on("join", (roomName, userName) => {
    console.log(`${userName} is joining ${roomName}`);
    playerMap[socket.id] = userName;

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
      if (rooms[roomName].started) {
        // If player is existing in the room in a started game
        if (rooms[roomName].players.includes(userName)) {
          socket.join(roomName);
          io.to(roomName).emit("updateGameState", rooms[roomName]);
        } else {
          // If player is trying to join a started game but is not a player
          console.log(
            `Game in room ${roomName} started, and ${userName} is not an existing player`
          );
        }
      } else if (rooms[roomName].players.length >= MAX_PLAYERS) {
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

    setTimeout(() => {
      console.log(`Room ${roomName} timed out.`);
      delete rooms[roomName];
    }, ROOM_TIMEOUT);
  });
  ``;
  socket.on("nextTurn", (roomName, cardType) => {
    if (Object.keys(rooms).includes(roomName)) {
      let newCardID = 0;

      if (cardType === 1) {
        maxEventRange = EVENT_RANGE[1] - EVENT_RANGE[0];
        let eventCardCount = 0;
        rooms[roomName].cards.forEach((card) => {
          if (getCardTypeFromID(card) === 1) {
            eventCardCount++;
          }
        });

        if (eventCardCount < maxEventRange) {
          let cardAlreadyExists = true;
          while (cardAlreadyExists) {
            newCardID = getRandomInt(EVENT_RANGE[0], EVENT_RANGE[1]);

            if (!rooms[roomName].cards.includes(newCardID)) {
              cardAlreadyExists = false;
            }
          }
        }
      }
      if (cardType === 2) {
        maxThingRange = THING_RANGE[1] - THING_RANGE[0];
        let thingCardCount = 0;
        rooms[roomName].cards.forEach((card) => {
          if (getCardTypeFromID(card) === 2) {
            thingCardCount++;
          }
        });

        if (thingCardCount < maxThingRange) {
          let cardAlreadyExists = true;
          while (cardAlreadyExists) {
            newCardID = getRandomInt(THING_RANGE[0], THING_RANGE[1]);

            if (!rooms[roomName].cards.includes(newCardID)) {
              cardAlreadyExists = false;
            }
          }
        }
      }
      if (cardType == 3) {
        maxInhabitantRange = INHABITANT_RANGE[1] - INHABITANT_RANGE[0];
        let inhabitantCardCount = 0;
        rooms[roomName].cards.forEach((card) => {
          if (getCardTypeFromID(card) === 3) {
            inhabitantCardCount++;
          }
        });

        if (inhabitantCardCount < maxInhabitantRange) {
          let cardAlreadyExists = true;
          while (cardAlreadyExists) {
            newCardID = getRandomInt(INHABITANT_RANGE[0], INHABITANT_RANGE[1]);

            if (!rooms[roomName].cards.includes(newCardID)) {
              cardAlreadyExists = false;
            }
          }
        }
      }

      if (newCardID !== 0) {
        // Set new card in room cards
        rooms[roomName].cards.push(newCardID);
        rooms[roomName].playerTurn =
          (rooms[roomName].playerTurn + 1) % rooms[roomName].players.length;

        console.log(
          `Next turn in ${roomName} with type ${cardType}, cardID ${newCardID}`
        );

        io.to(roomName).emit("updateGameState", rooms[roomName]);
      } else {
        console.log(`Max cards of type ${cardType} reached`);
      }
    } else {
      console.log(
        `User tried to nextTurn in room ${roomName} that doesn't exist`
      );
    }
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

function getCardTypeFromID(id) {
  if (id >= 0 && id <= 7) {
    return 0;
  } else if (id >= 8 && id <= 22) {
    return 1;
  } else if (id >= 23 && id <= 37) {
    return 2;
  } else if (id >= 38 && id <= 52) {
    return 3;
  }

  return 0;
}
