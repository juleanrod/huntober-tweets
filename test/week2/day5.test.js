import { describe, it, expect } from 'vitest';
import { oneDShuffle, twoDShuffle} from '../../src/week2/day5';

const twoD = [['a', 'b', 'c'], ['d', 'h', 'f'], ['g', 'e', 'i']];
const oneD = ['a', 'b', 'c'];

describe("#oneDShuffle", () => {

    it("returns shuffled 1D array", () => {
        expect(oneDShuffle(oneD)).toStrictEqual(oneD);
    });
});

describe("#twoDShuffle", () => {

    it("returns shuffled 2D array", () => {
        expect(twoDShuffle(twoD)).toStrictEqual(twoD);
    });
});