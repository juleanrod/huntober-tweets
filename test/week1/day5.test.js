import catThemedPunFilter from "../../src/week1/day5";
import { getDataFromFile } from "../../src/week1/day3";
import { describe, expect, it } from "vitest";

describe("#catThemedPunFilter", () => {
    let titles = getDataFromFile('bestTitlesEver.txt').split(',');
    
    it("returns an array of key characters for the next challenge", () => {
        expect(titles.filter(title => catThemedPunFilter(title) === true))
        .toStrictEqual( ['Teenage Mewtant Ninja Turtles','Rick & Meowty', "Mewster Rogers' Neighborhood"]);
    });

});