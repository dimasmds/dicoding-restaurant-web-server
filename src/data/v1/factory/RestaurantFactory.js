import BaseFactory from '../../../utils/BaseFactory';
import CustomerReviewFactory from './CustomerReviewFactory';
import CategoriesFactory from './CategoriesFactory';
import randomize from '../../../utils/randomize';
import { arrayMaker, arrayReducer } from '../../../utils/array-generator';
import {
  address, cities, descriptions, names, pictures, ratings,
} from '../source';
import generateId from '../../../utils/id-generator';
import FoodsFactory from './FoodsFactory';
import DrinksFactory from './DrinksFactory';

export default class RestaurantFactory extends BaseFactory {
  constructor(count) {
    super(count);
    this._names = arrayReducer(names, count);
    this._description = arrayMaker(descriptions, count);
    this._cities = arrayMaker(cities, count);
    this._address = arrayMaker(address, count);
    this._pictures = arrayReducer(pictures, count);
    this._rating = arrayMaker(ratings, count);

    // i wanna keep functional style so i avoid to use traditional for loop.
    this._categories = this._names.map(() => new CategoriesFactory(randomize(2)).build());
    this._customerReviews = this._names.map(() => new CustomerReviewFactory(randomize(3)).build());
    this._foods = this._names.map(() => new FoodsFactory(randomize(10, 4)).build());
    this._drinks = this._names.map(() => new DrinksFactory(randomize(10, 4)).build());
  }

  build() {
    return this._names.map((name, index) => ({
      id: generateId(),
      name,
      description: this._description[index],
      city: this._cities[index],
      address: this._address[index],
      pictureId: this._pictures[index],
      categories: this._categories[index],
      menus: {
        foods: this._foods[index],
        drinks: this._drinks[index],
      },
      rating: this._rating[index],
      customerReviews: this._customerReviews[index],
    }));
  }
}
