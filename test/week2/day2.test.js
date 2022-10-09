import { describe, it, expect } from 'vitest';
import {moveLeft, moveRight} from '../../src/week2/day2';

const testArray = ['abc', 'xyz', 1, 2, 'Hey!'];

describe("#moveLeft", () => {

    it(`Swap given primitive data type to the left of original position
     in given array`, () => {
        expect(moveLeft('xyz',testArray)).toStrictEqual(['xyz', 'abc', 1, 2, 'Hey!']);
    });
});

describe("#moveLeft", () => {

    it(`Swap given primitive data type to the left of original position
    in given array`, () => {
        expect(moveLeft('xyz', testArray)).toStrictEqual(['xyz', 'abc', 1, 2, 'Hey!']);
    });
});
describe("#moveRight", () => {

    it(`Swap given primitive data type to the right of original position
    in given array`, () => {
        expect(moveRight(2, testArray)).toStrictEqual(['xyz', 'abc', 1, 'Hey!', 2]);
    });
});

describe("#moveRight", () => {

    it(`Swap given primitive data type to the right of original position
    in given array`, () => {
        expect(moveRight(2, testArray)).toStrictEqual(['xyz', 'abc', 1, 'Hey!', 2]);
    });
});