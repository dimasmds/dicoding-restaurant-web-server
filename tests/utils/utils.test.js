import "../custom-matchers";
import {arrayMaker, arrayReducer} from "../../src/utils/array-generator";
import generateId from "../../src/utils/id-generator";
import randomize from "../../src/utils/randomize";

test("arrayMaker should be return 2 array", () => {
    const names = ["Dimas", "Maulana", "Dwi", "Saputra"];
    expect(arrayMaker(names, 2)).toHaveLength(2);
});

test("arrayReducer should be return 2 array", () => {
    const names = ["Dimas", "Maulana", "Dwi", "Saputra"];
    expect(arrayReducer(names, 2)).toHaveLength(2);
});

test("arrayReducer should be distinct", () => {
   const names = ["Dimas", "Ahmad", "Dimas", "Widdy", "Widdy"];
   expect(arrayReducer(names, 3)).toBeDistinct();
});

test("id should not null", () => {
    expect(generateId()).not.toBeNull();
});

test("random number should be between 10 and 32 ranges", () => {
   expect(randomize(32, 10)).toBeWithinRange(10, 32);
});
