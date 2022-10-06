import fix from "../../src/week1/day1";
import { describe, expect, it } from "vitest";

describe("#fix", () => {
    let s = "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs";
    it("returns the corrected string based on the default mappings provided to us", () => {
        expect(fix(s)).toBe("e!!1gv)tSllt8cvbdeDHEdVw!00t1#Aa.2MDuLWYpP^VVjDch1SOiv#yl4gmQfs");
    });
})