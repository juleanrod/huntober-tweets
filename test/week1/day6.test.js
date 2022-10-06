
import removeDecoy from "../../src/week1/day6"
import { describe, expect, it } from "vitest";

// describe("#removeDecoy", () => {

//     let string = "Thies its H alltowe!en!? Thies its H alltowe!en!? ";
//     let int = 4;

//     it("given a string=S,int=X returns a string where every Xth term has been removed", () => {
//         expect(removeDecoy(string, int)).toBe("This is Halloween! This is Halloween!");
//     });
// });

describe("#removeDecoy", () => {

    let string = "The LBachyelor^ is ma tehrrib le tpelev!isioOn sh8ow.";
    let int = 5;

    it("given a string=S,int=X returns a string where every Xth term has been removed", () => {
        expect(removeDecoy(string, int)).toBe("The Bachelor is a terrible television show.");
    });
});