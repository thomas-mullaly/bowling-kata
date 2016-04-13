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
            let frameTotal = this._rolls[frameIndex] + this._rolls[frameIndex+1];

            if (frameTotal === 10) {
                frameTotal += this._rolls[frameIndex+1];
            }

            score += frameTotal;
            frameIndex += 2;
        }

        return score;
    }
}

module.exports = Game;
