const Player = require('../src/player');
const assert = require('assert');

describe('Player', function() {
    it('should initialize with correct values', function() {
        const player = new Player(50, 5, 10);
        assert.strictEqual(player.health, 50);
        assert.strictEqual(player.strength, 5);
        assert.strictEqual(player.attack, 10);
    });

    it('should reduce health correctly', function() {
        const player = new Player(50, 5, 10);
        player.reduceHealth(20);
        assert.strictEqual(player.health, 30);
        player.reduceHealth(40);
        assert.strictEqual(player.health, 0);
    });
});
