import { describe, it, expect } from 'vitest';
import checkEquality from '../../src/week2/day1';

const arr1 = [['a','b','c'],['d','e','f'],['g','h','i']];
const arr2 = [['a','b','c'],['d','e','f'],['g','h','i']];
const arr3 = [['a','B','c'],['d','E','f'],['g','H','i']];
const arr4 = [['a','b','c'],['g','h','i'],['d','e','f']];

describe("#checkEquality", () => {

    it(`All the nested primitives within each array must strictly match to 
        return a true result. Any mismatches will return false`, () => {
        expect(checkEquality(arr1, arr2)).toStrictEqual(true);
    });
});

describe("#checkEquality", () => {

    it(`All the nested primitives within each array must strictly match to 
        return a true result. Any mismatches will return false`, () => {
        expect(checkEquality(arr1, arr3)).toStrictEqual(false);
    });
});

describe("#checkEquality", () => {

    it(`All the nested primitives within each array must strictly match to 
        return a true result. Any mismatches will return false`, () => {
        expect(checkEquality(arr1, arr4)).toStrictEqual(false);
    });
});