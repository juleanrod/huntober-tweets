import swapToInverse from "../../src/week1/day7"
import { describe, expect, it } from "vitest";

describe("#swapToInverse", () => {

    let s = "vCZNKOV";
    // ex: given 'A', its inverse is -> 'z' 
    it("Swaps each letter of the alphabet to its inverse", () => {
        expect(swapToInverse(s)).toBe("Example");
    });
});

describe("#swapToInverse", () => {

    let s = "0 MFNYVI LI KFMXGFZGRLM XSZMTVH";

    it("Swaps each letter of the alphabet to its inverse", () => {
        expect(swapToInverse(s)).toBe("0 number or punctuation changes");
    });
});