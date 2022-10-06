import { giveItSomeSpace } from "../../src/week1/day3";
import { describe, expect, it } from "vitest";

describe("#giveItSomeSpace", () => {
    let s = "e!!1gv)tSllt8cvbdeDHEdVw!00t1#Aa.2MDuLWYpP^VVjDch1SOiv#yl4gmQfs";
    let characters = ['S', 'p', 'a', 'c', 'e'];
    it("returns string with a new string replacing key characters found on the previous challenge with spaces", 
        () => {
            expect(giveItSomeSpace(s, characters))
            .toBe(" !!1gv)t llt8 vbd DHEdVw!00t1#A .2MDuLWY P^VVjD h1 Oiv#yl4gmQfs");
        }
    );
})