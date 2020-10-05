import { addReviewAction, receiveDataAction } from '../../redux/v1/actions';
import restaurants from '../../data/v1/consume';

class RestaurantRepository {
  constructor(store) {
    this._store = store;
    this._store.dispatch(receiveDataAction(restaurants));
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
