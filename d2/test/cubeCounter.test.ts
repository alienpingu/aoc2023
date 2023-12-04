import cubeCounter from '../src/model/cubeCounter';
import games from '../src/data/games';

describe("cubeCounter", () => {
    const counter = new cubeCounter(games.mockup, 10,13,14);
    describe("getGameID", () => {
        it("Should return id from one game record", 
            () => expect(counter.getGameID('Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue')).toBe(2))
        it("Should return id from one game record", 
            () => expect(counter.getGameID('Game 70: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue')).toBe(70))
        it("Should return id from one game record", 
            () => expect(counter.getGameID('Game 45: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue')).toBe(45))
        it("Should return id from one game record", 
            () => expect(counter.getGameID('Game 1000: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue')).toBe(1000))
        it("Should return id from one game record", 
            () => expect(counter.getGameID(' 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue')).toBe(0))

    });
    describe("getCubesQuantity", () => {
        it("Should return red, green and blue cube used in game from game record", 
        () => expect(counter.getCubesQuantity('Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue')).toStrictEqual({
            red: 1,
            green: 3,
            blue: 4
        }))
        it("Should return red, green and blue cube used in game from game record", 
        () => expect(counter.getCubesQuantity('Game 2: 100 blue, 2222 green; 3 green, 4 blue, 1 red; 1 green, 1 blue')).toStrictEqual({
            red: 1,
            green: 2222,
            blue: 100
        }))
    it("Should return red, green and blue cube used in game from game record", 
        () => expect(counter.getCubesQuantity('Game 70: 10 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue')).toStrictEqual({
            red: 1,
            green: 3,
            blue: 10
        }))
    it("Should return red, green and blue cube used in game from game record", 
        () => expect(counter.getCubesQuantity('Game 45: 1 blue, 2 green; 3 green, 4 blue, 1 red; 100 green, 1 blue')).toStrictEqual({
            red: 1,
            green: 100,
            blue: 4
        }))
    });
    describe("possibleGame", () => {
        it("Should return if game is possible from compare the cube quantity", 
            () => expect(counter.possibleGame({
                red: 10,
                green: 13,
                blue: 14
            })).toBe(true))
        it("Should return if game is possible from compare the cube quantity", 
            () => expect(counter.possibleGame({
                red: 11,
                green: 10,
                blue: 10
            })).toBe(false))
        it("Should return if game is possible from compare the cube quantity", 
            () => expect(counter.possibleGame({
                red: 0,
                green: 0,
                blue: 0
            })).toBe(true))
        it("Should return if game is possible from compare the cube quantity", 
            () => expect(counter.possibleGame({
                red: 1,
                green: 1,
                blue: 1
            })).toBe(true))
        it("Should return if game is possible from compare the cube quantity", 
            () => expect(counter.possibleGame({
                red: 100,
                green: 100,
                blue: 100
            })).toBe(false))
        });
    describe("computeIdSum", () => {
        it("Should return sums of all possible game ids", 
            () => expect(counter.computeIdSum()).toBe(8))
    });
})