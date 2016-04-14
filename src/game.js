"use strict";

const FINAL_FRAME = 9;
const TOTAL_FRAMES_PER_GAME = 10;

class Game {
    constructor() {
        this._rolls = [];
    }

    roll(pins) {
        this._rolls.push(pins);
    }

    score() {
        let score = 0;
        let rollIndex = 0;

        for (let frame = 0; frame < TOTAL_FRAMES_PER_GAME; ++frame) {
            if (this._isFinalFrame(frame)) {
                score += this._finalFrameTotal(rollIndex);
            } else if (this._isStrike(rollIndex)) {
                score += 10 + this._strikeBonus(rollIndex);
                rollIndex += 1;
            } else if (this._isSpare(rollIndex)) {
                score += 10 + this._spareBonus(rollIndex);
                rollIndex += 2;
            } else {
                score += this._frameTotal(rollIndex);
                rollIndex += 2;
            }
        }

        return score;
    }

    _isFinalFrame(frame) {
        return frame === FINAL_FRAME;
    }

    _finalFrameTotal(rollIndex) {
        let frameTotal = this._frameTotal(rollIndex);

        if (frameTotal >= 10) {
            frameTotal += this._rolls[rollIndex+2];
        }

        return frameTotal;
    }

    _isSpare(rollIndex) {
        return this._rolls[rollIndex] + this._rolls[rollIndex+1] === 10;
    }

    _isStrike(rollIndex) {
        return this._rolls[rollIndex] === 10;
    }

    _spareBonus(rollIndex) {
        return this._rolls[rollIndex+2];
    }

    _strikeBonus(rollIndex) {
        return this._rolls[rollIndex+1] + this._rolls[rollIndex+2];
    }

    _frameTotal(rollIndex) {
        return this._rolls[rollIndex] + this._rolls[rollIndex+1];
    }
}

module.exports = Game;
