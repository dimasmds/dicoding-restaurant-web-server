import RestaurantRepository from '../repository/RestaurantRepository';
import { APP_VERSION } from '../config';

export default class RestaurantController {
  constructor(store) {
    this._restaurantRepository = new RestaurantRepository(store, APP_VERSION);
  }

  getList() {
    const restaurants = this._restaurantRepository.getList();
    if (restaurants.length) {
      return {
        error: false,
        message: 'success',
        count: restaurants.length,
        restaurants,
      };
    }

    return {
      error: true,
      message: 'not found',
      count: 0,
      restaurants,
    };
  }

  getListWithDetail() {
    const restaurants = this._restaurantRepository.getListWithDetail();
    if (restaurants.length) {
      return {
        error: false,
        message: 'success',
        count: restaurants.length,
        restaurants,
      };
    }

    return {
      error: true,
      message: 'not found',
      count: 0,
      restaurants,
    };
  }

  getRestaurantById(id) {
    const restaurant = this._restaurantRepository.getRestaurantById(id);
    if (restaurant) {
      return {
        error: false,
        message: 'success',
        restaurant,
      };
    }

    return {
      error: true,
      message: 'not found',
      restaurant,
    };
  }

  addReview(review) {
    const customerReviews = this._restaurantRepository.addReview(review);
    if (customerReviews) {
      return {
        error: false,
        message: 'success',
        customerReviews,
      };
    }

    return {
      error: true,
      message: 'failed to add review',
      customerReviews,
    };
  }
}
