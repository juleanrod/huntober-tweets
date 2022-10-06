import reverseIt from "../../src/week1/day4";
import { describe, expect, it } from "vitest";

describe("#reverseIt", () => {
    let s = " !!1gv)t llt8 vbd DHEdVw!00t1#A .2MDuLWY P^VVjD h1 Oiv#yl4gmQfs";
        
    it("returns a the given string reversed", () => {
        expect(reverseIt(s))
            .toBe("sfQmg4ly#viO 1h DjVV^P YWLuDM2. A#1t00!wVdEHD dbv 8tll t)vg1!! ");
    });
})