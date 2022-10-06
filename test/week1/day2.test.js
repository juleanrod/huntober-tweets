import aBitOfAMess from "../../src/week1/day2";
import { getDataFromFile } from "../../src/week1/day3";
import { describe, expect, it } from "vitest";

describe("#aBitOfAMess", () => {
    let mess = getDataFromFile('theMess.txt');
    
    it("returns an array of key characters for the next challenge", () => {
        expect(aBitOfAMess(mess)).toStrictEqual(['S','p','a','c','e']);
    });

});