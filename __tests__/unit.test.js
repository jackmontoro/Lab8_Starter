// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// Part 2
// isPhoneNumber()
test("851-353-4678 is an accepted number", () => {
    expect(functions.isPhoneNumber("851-353-4678")).toBe(true);
});

test("(707)-252-1414 is an accepted number", () => {
    expect(functions.isPhoneNumber("(707)-252-1414")).toBe(true);
});

test("$$$ is not an accepted number", () => {
    expect(functions.isPhoneNumber("$$$")).toBe(false);
});

test("452 367 8967 is not an accepted number", () => {
    expect(functions.isPhoneNumber("452 367 8967")).toBe(false);
});

// isEmail
test("bigpapa@gmail.com is an accepted address", () => {
    expect(functions.isEmail("bigpapa@gmail.com")).toBe(true);
});

test("bigpapa@hotmail.net is an accepted address", () => {
    expect(functions.isEmail("bigpapa@hotmail.net")).toBe(true);
});

test("potato is not an accepted address", () => {
    expect(functions.isEmail("potato")).toBe(false);
});

test("luvas@@hottub.com is not an accepted address", () => {
    expect(functions.isEmail("bigpapa@hotmail.net")).toBe(false);
});

// isStrongPassword
test("asdfjkl is an accepted strong password", () => {
    expect(functions.isStrongPassword("asdfjkl")).toBe(true);
});

test("JackPassword is an accepted strong password", () => {
    expect(functions.isStrongPassword("JackPassword")).toBe(true);
});

test("asd is not an accepted strong password", () => {
    expect(functions.isStrongPassword("asd")).toBe(false);
});

test("1asdfjkl3 is not an accepted strong password", () => {
    expect(functions.isStrongPassword("1asdfjkl3")).toBe(false);
});

//isDate
test("3/5/2125 is an accepted date", () => {
    expect(functions.isDate("3/5/2125")).toBe(true);
});

test("5/28/2023 is an accepted date", () => {
    expect(functions.isDate("5/28/2023")).toBe(true);
});

test("5/28/23 is not an accepted date", () => {
    expect(functions.isDate("5/28/23")).toBe(false);
});

test("5/28 is not an accepted date", () => {
    expect(functions.isDate("5/28")).toBe(false);
});

//isHexColor
test("#0000FF is an accepted hex color", () => {
    expect(functions.isHexColor("#0000FF")).toBe(true);
});

test("#FF0000 is an accepted hex color", () => {
    expect(functions.isHexColor("#FF0000")).toBe(true);
});

test("FF0000 is not an accepted hex color", () => {
    expect(functions.isHexColor("FF0000")).toBe(false);
});

test("#ab is not an accepted hex color", () => {
    expect(functions.isHexColor("#ab")).toBe(false);
});

