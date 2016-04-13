"use strict";

let should = require("should");
let Game = require("../src/game");

describe("Game", function() {
    describe("roll", function() {
        const maxRolls = 20;
        let game = null;

        beforeEach(function () {
            game = new Game();
        });

        it("should return 0 for gutter game", function() {
            for (let i = 0; i < maxRolls; ++i) {
                game.roll(0);
            }

            game.score().should.equal(0);
        });

        it("should return 20 for all ones", function () {
            for (let i = 0; i < maxRolls; ++i) {
                game.roll(1);
            }

            game.score().should.equal(20);
        });
    });
});
