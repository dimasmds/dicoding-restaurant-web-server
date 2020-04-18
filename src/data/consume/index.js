import RestaurantFactory from "../factory/RestaurantFactory";
import {TOTAL_RESTAURANT_DATA} from "../../config";

let restaurants = new RestaurantFactory(TOTAL_RESTAURANT_DATA).build();

module.exports = restaurants;
