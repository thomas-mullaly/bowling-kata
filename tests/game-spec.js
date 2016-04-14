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

    let rollStrike = () => {
        game.roll(10);
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
        game.roll(7); // score: 24
        rollMany(17, 0);

        game.score().should.equal(24);
    });

    it("should correctly handle 1 strike", function () {
        rollStrike(); // Score: 10
        game.roll(7);
        game.roll(2); // Score 10 + 9 + 9 (bonus)

        rollMany(16, 0);
        game.score().should.equal(28);
    });

    it("should correctly handle perfect game", function () {
        rollMany(12, 10);

        game.score().should.equal(300);
    });

    it("should correctly handle spare then strike in last frame", function () {
        rollMany(18, 0);
        rollSpare();
        rollStrike();

        game.score().should.equal(20); // 10 + 10
    });

    it("should correctly handle 3 strikes in last frame", function () {
        rollMany(18, 0);
        rollMany(3, 10);

        game.score().should.equal(30);
    });

    it("should correctly handle 2 strikes a spare and a 7 not in last frame", function () {
        rollMany(2, 10);
        rollSpare();
        game.roll(7);
        game.roll(2);
        rollMany(14, 0);

        game.score().should.equal(70);
    });

    it("should correctly handle game of all spares and a 6", function () {
        for (let i = 0; i < 10; ++i) {
            rollSpare();
        }

        game.roll(6);

        game.score().should.equal(142);
    });
});
