import { addReviewAction, receiveDataAction } from '../redux/actions';
import restaurantsV1 from '../data/v1/consume';
import restaurantsV2 from '../data/v2/restaurants';

class RestaurantRepository {
  constructor(store, version) {
    this._store = store;

    if (version === 1) {
      this._store.dispatch(receiveDataAction(restaurantsV1));
    } else {
      this._store.dispatch(receiveDataAction(restaurantsV2));
    }
    this._restaurants = this._store.getState();
  }

  getList() {
    return this._restaurants.map((restaurant) => ({
      id: restaurant.id,
      name: restaurant.name,
      description: restaurant.description,
      pictureId: restaurant.pictureId,
      city: restaurant.city,
      rating: restaurant.rating,
    }));
  }

  getListWithDetail() {
    return this._restaurants;
  }

  getRestaurantById(id) {
    return this._restaurants.filter((restaurant) => restaurant.id === id)[0] || null;
  }

  addReview(review) {
    console.log(review.id);
    this._store.dispatch(addReviewAction(review));
    this._restaurants = this._store.getState();
    const restaurant = this._restaurants.filter((res) => res.id === review.id);
    return restaurant.length ? restaurant[0].consumerReviews : null;
  }
}

export default RestaurantRepository;
