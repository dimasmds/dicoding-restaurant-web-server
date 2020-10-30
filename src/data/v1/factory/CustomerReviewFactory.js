import BaseFactory from '../../../utils/BaseFactory';
import { arrayMaker, arrayReducer } from '../../../utils/array-generator';
import { customerDate, customerNames, customerReview } from '../source';

export default class CustomerReviewFactory extends BaseFactory {
  constructor(count) {
    super(count);
    this._customerNames = arrayReducer(customerNames, count);
    this._customerReviews = arrayReducer(customerReview, count);
    this._customerDate = arrayMaker(customerDate, count);
  }

  build() {
    return this._customerNames.map((name, index) => ({
      name,
      review: this._customerReviews[index],
      date: this._customerDate[index],
    }));
  }
}
