import restaurants from "../../../src/data/consume";
import {TOTAL_RESTAURANT_DATA} from "../../../src/config";

test("restaurants should return configured count", () => {
    expect(restaurants).toHaveLength(TOTAL_RESTAURANT_DATA);
});
