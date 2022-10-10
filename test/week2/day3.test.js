import { describe, it, expect } from 'vitest';
import moveThingsAround from '../../src/week2/day3';

const test = ['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy'];

describe("#moveThingsAround", () => {

    it(``, () => {
        expect(moveThingsAround(test)).toStrictEqual(['hola', 'hallo', 'hi', 'hej', 'howdy', 'hello', 'heyyy']);
    });
});