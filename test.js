const { sum } = require("./app.js");



// test("14 + 9 should be equal to 23", () => {
//     let total = sum(14, 9);

//     expect(total).toBe(23);
// });

test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require("./app.js");

    const dollars = fromEuroToDollar(3.5);

    const expected = 3.5 * 1.07;

    expect(fromEuroToDollar(3.5)).toBe(3.745);
})

test("One dollar should be should be 167.455 yen", function() {
    const { fromDollarToYen } = require("./app.js");

    const yen = fromDollarToYen(3.745);

    const expected = 3.745 * 1.07 * 156.5;

    expect(fromDollarToYen(3.745)).toBe(627.118975);
})

test("One hundred yen should be should be 93.09 pound", function() {
    const { fromYenToPound } = require("./app.js");

    const pound = fromYenToPound(627.118975);

    const expected = 627.118975 * 1.07 * 0.87;

    expect(fromYenToPound(627.118975)).toBe(583.7850538275001);
})

93.09