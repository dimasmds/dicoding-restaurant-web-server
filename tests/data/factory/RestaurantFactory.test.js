import RestaurantFactory from '../../../src/data/v1/factory/RestaurantFactory';

test('RestaurantFactory should create 4 data', () => {
  expect(new RestaurantFactory(4).build()).toHaveLength(4);
});
