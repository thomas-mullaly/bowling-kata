"use strict";

class Game {
    constructor() {
        this._rolls = [];
    }

    roll(pins) {
        this._rolls.push(pins);
    }

    score() {
        let score = 0;

        for (let i = 0; i < this._rolls.length; ++i) {
            score += this._rolls[i];
        }

        return score;
    }
}

module.exports = Game;
