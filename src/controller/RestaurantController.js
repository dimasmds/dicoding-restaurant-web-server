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
    
    const dataReview = review.review;
    const reviewerName = review.name;

    // check for the reviewer name, is the valid name ? or its include any scripts on this property ?
    if(reviewerName.trim().length === 0) {
      return {
        error: true,
        message: 'failed to add review because you use blank or empty string for property \'name\'',
        customerReviews: [],
      };
    } else if(this._containScripts(dataReview)){
      return {
        error: true,
        message: 'matches any scripts or tags included in property \'name\', please use a valid name!',
        customerReviews: [],
      };
    }

    // check content review, any script ? or maybe just empty string? 
    if(dataReview.trim().length === 0){
      return {
        error: true,
        message: 'failed to add review because no more strings added',
        customerReviews: [],
      };
    } else if(this._containScripts(dataReview)){
      return {
        error: true,
        message: 'matches any scripts or tags included in data review, please use plain strings to review!',
        customerReviews: [],
      };
    }

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

  searchRestaurants(query) {
    const restaurants = this._restaurantRepository.searchRestaurants(query);
    return {
      error: false,
      founded: restaurants.length,
      restaurants,
    };
  }

  // return true if any script or tag on the data or false otherwise
  _containScripts(reviewContentData) {
    const regex = /(\<.*\>|javascript:.*)/g
    return !!reviewContentData.match(regex)
  }
}
