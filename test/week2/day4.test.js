import { describe, it, expect } from 'vitest';
import { moveUp, moveDown } from '../../src/week2/day4';

const test = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']];

describe("#moveUp", () => {

    it('move given value vertically upward from original position', () => {
        expect(moveUp('h', test)).toStrictEqual([['a', 'b', 'c'], ['d', 'h', 'f'], ['g', 'e', 'i']]);
    });
});

describe("#moveUp", () => {

    it('move given value vertically upward from original position', () => {
        expect(moveUp('h', test)).toStrictEqual([['a', 'h', 'c'], ['d', 'b', 'f'], ['g', 'e', 'i']]);
    });
});

describe("#moveUp", () => {

    // edge case where value is already at the top of matrix 
    it('move given value vertically upward from original position', () => {
        expect(moveUp('h', test)).toStrictEqual([['a', 'h', 'c'], ['d', 'b', 'f'], ['g', 'e', 'i']]);
    });
});

describe("#moveDown", () => {
 
    it('move given value vertically downward from original position', () => {
        expect(moveDown('f', test)).toStrictEqual([['a', 'h', 'c'], ['d', 'b', 'i'], ['g', 'e', 'f']]);
    });
});

describe("#moveDown", () => {

    it('move given value vertically downward from original position', () => {
        expect(moveDown('f', test)).toStrictEqual([['a', 'h', 'c'], ['d', 'b', 'i'], ['g', 'e', 'f']]);
    });
});
