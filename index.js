const Player = require('./player');
const Arena = require('./arena');

const playerA = new Player(50, 5, 10);
const playerB = new Player(100, 10, 5);

const arena = new Arena(playerA, playerB);
arena.fight();
