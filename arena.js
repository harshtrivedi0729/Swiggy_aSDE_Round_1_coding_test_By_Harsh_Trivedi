const Player = require('./player');

class Arena {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }

    rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }

    fight() {
        while (this.player1.isAlive() && this.player2.isAlive()) {
            const [attacker, defender] = this.player1.health <= this.player2.health 
                ? [this.player1, this.player2] 
                : [this.player2, this.player1];

            const attackRoll = this.rollDice();
            const defendRoll = this.rollDice();

            let damage = attacker.attack * attackRoll - defender.strength * defendRoll;
            damage     = damage > 0 ? damage : 0;

            defender.reduceHealth(damage);
            console.log(`${attacker === this.player1 ? "Player A" : "Player B"} attacks with damage: ${damage}`);
            console.log(`Player A health: ${this.player1.health} | Player B health: ${this.player2.health}`);
        }
        console.log(this.player1.isAlive() ? "Player A wins!!!" : "Player B wins!!!");
    }
}

module.exports = Arena;
