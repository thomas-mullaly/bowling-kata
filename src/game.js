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
        let frameIndex = 0;

        for (let frame = 0; frame < 10; ++frame) {
            let frameTotal = 0;

            if (this._rolls[frameIndex] === 10) {
                frameTotal += 10 + this._rolls[frameIndex+1] + this._rolls[frameIndex+2];
                frameIndex += 1;
            } else if (this._rolls[frameIndex] + this._rolls[frameIndex+1] === 10) {
                frameTotal += 10 + this._rolls[frameIndex+1];
                frameIndex += 2;
            } else {
                frameTotal += this._rolls[frameIndex] + this._rolls[frameIndex+1];
                frameIndex += 2;
            }

            score += frameTotal;
        }

        return score;
    }
}

module.exports = Game;
