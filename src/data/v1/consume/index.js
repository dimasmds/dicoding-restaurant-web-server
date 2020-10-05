import RestaurantFactory from '../factory/RestaurantFactory';
import { TOTAL_RESTAURANT_DATA } from '../../../config';

const restaurants = new RestaurantFactory(TOTAL_RESTAURANT_DATA).build();

export default restaurants;
