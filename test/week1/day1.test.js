import fix from "../../src/week1/day1";
import { describe, expect, it } from "vitest";

describe("#fix", () => {
    let s = "PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770.";
    it("returns the corrected string based on the default mappings provided to us", () => {
        expect(fix(s)).toBe("PRO-TIP #498: IT'S NICE TO SAY HELLO.");
    });
})