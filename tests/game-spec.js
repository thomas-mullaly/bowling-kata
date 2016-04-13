"use strict";

let should = require("should");
let Game = require("../src/game");

describe("Game", function() {
    const maxRolls = 20;
    let game = null;

    beforeEach(function () {
        game = new Game();
    });

    let rollMany = (rolls, pins) => {
        for (let i = 0; i < rolls; ++i) {
            game.roll(pins);
        }
    };

    let rollSpare = () => {
        game.roll(4);
        game.roll(6);
    };

    it("should return 0 for gutter game", function() {
        rollMany(maxRolls, 0);
        game.score().should.equal(0);
    });

    it("should return 20 for all ones", function () {
        rollMany(maxRolls, 1);
        game.score().should.equal(20);
    });

    it("should correctly handle 1 spare", function () {
        rollSpare();
        game.roll(6); // score: 22
        rollMany(17, 0);

        game.score().should.equal(22);
    });
});
