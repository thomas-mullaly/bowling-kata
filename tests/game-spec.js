"use strict";

let should = require("should");
let Game = require("../src/game");

describe("Game", function() {
    describe("roll", function() {
        it("should return 0 for gutter game", function() {
            let game = new Game();

            for (let i = 0; i < 20; ++i) {
                game.roll(0);
            }

            game.score().should.equal(0);
        });
    });
});
