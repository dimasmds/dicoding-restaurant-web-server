import BaseFactory from '../../../utils/BaseFactory';
import { arrayMaker, arrayReducer } from '../../../utils/array-generator';
import { consumerDate, consumerNames, consumerReview } from '../source';

export default class CustomerReviewFactory extends BaseFactory {
  constructor(count) {
    super(count);
    this._consumerNames = arrayReducer(consumerNames, count);
    this._consumerReviews = arrayReducer(consumerReview, count);
    this._consumerDate = arrayMaker(consumerDate, count);
  }

  build() {
    return this._consumerNames.map((name, index) => ({
      name,
      review: this._consumerReviews[index],
      date: this._consumerDate[index],
    }));
  }
}
