import RestaurantFactory from "../../../src/data/factory/RestaurantFactory";

test("RestaurantFactory should create 4 data", () => {
    expect(new RestaurantFactory(4).build()).toHaveLength(4);
});
