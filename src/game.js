"use strict";

class Game {
    constructor() {
        this._score = 0;
    }

    roll(pins) {
        this._score += pins;
    }

    score() {
        return this._score;
    }
}

module.exports = Game;
