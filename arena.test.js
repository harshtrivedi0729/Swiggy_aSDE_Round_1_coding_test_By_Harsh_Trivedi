const Player = require('../src/player');
const Arena = require('../src/arena');
const assert = require('assert');

describe('Arena', function() {
    it('should have a fight and one player should lose all health', function() {
        const playerA = new Player(50, 5, 10);
        const playerB = new Player(100, 10, 5);
        const arena = new Arena(playerA, playerB);
        arena.fight();
        assert.ok(playerA.health === 0 || playerB.health === 0);
    });
});
