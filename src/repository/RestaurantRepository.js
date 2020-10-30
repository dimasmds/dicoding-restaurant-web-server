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
    this._store.dispatch(addReviewAction(review));
    this._restaurants = this._store.getState();
    const restaurant = this._restaurants.filter((res) => res.id === review.id);
    return restaurant.length ? restaurant[0].customerReviews : null;
  }

  searchRestaurants(query) {
    return this._restaurants.filter((restaurant) => {
      const { categories, menus, name } = restaurant;
      const { drinks, foods } = menus;

      let decisions = false;

      if (name.toLowerCase().includes(query.toLowerCase())) {
        decisions = true;
      }

      categories.forEach((category) => {
        if (category.name.toLowerCase().includes(query.toLowerCase())) {
          decisions = true;
        }
      });

      drinks.forEach((drink) => {
        if (drink.name.toLowerCase().includes(query.toLowerCase())) {
          decisions = true;
        }
      });

      foods.forEach((food) => {
        if (food.name.toLowerCase().includes(query.toLowerCase())) {
          decisions = true;
        }
      });

      return decisions;
    }).map((restaurant) => {
      const {
        id, name, description, pictureId, city, rating,
      } = restaurant;
      return {
        id, name, description, pictureId, city, rating,
      };
    });
  }
}

export default RestaurantRepository;
