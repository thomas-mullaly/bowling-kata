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
            let hadSpare = false;

            if (this._isStrike(frameIndex)) {
                score += 10 + this._strikeBonus(frameIndex);
                frameIndex += 1;
            } else if (this._isSpare(frameIndex)) {
                score += 10 + this._spareBonus(frameIndex);
                hadSpare = true;
                frameIndex += 2;
            } else {
                score += this._frameTotal(frameIndex);
                frameIndex += 2;
            }

            if (frame === 9 && hadSpare) {
                score += this._rolls[frameIndex];
            }
        }

        return score;
    }

    _isSpare(frameIndex) {
        return this._rolls[frameIndex] + this._rolls[frameIndex+1] === 10;
    }

    _isStrike(frameIndex) {
        return this._rolls[frameIndex] === 10;
    }

    _spareBonus(frameIndex) {
        return this._rolls[frameIndex+1];
    }

    _strikeBonus(frameIndex) {
        return this._rolls[frameIndex+1] + this._rolls[frameIndex+2];
    }

    _frameTotal(frameIndex) {
        return this._rolls[frameIndex] + this._rolls[frameIndex+1];
    }
}

module.exports = Game;
