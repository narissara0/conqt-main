const subtract = require('./subtract');

test("Must subtract properly", () => {
    expect(subtract(1,2)).toBe(-1);
})