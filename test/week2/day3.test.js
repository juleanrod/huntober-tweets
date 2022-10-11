import { describe, it, expect } from 'vitest';
import moveThingsAround from '../../src/week2/day3';

const test = ['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy'];

describe("#moveThingsAround", () => {

    it(`moves any entries containing the letter 'a' to the front, and then move any entries that have over 3 characters to the back`, () => {
        expect(moveThingsAround(test)).toStrictEqual(['hola', 'hallo', 'hi', 'hej', 'hello', 'howdy', 'heyyy']);
    });
});