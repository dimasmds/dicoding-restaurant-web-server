import BaseFactory from "../../utils/BaseFactory";
import ConsumerReviewFactory from "./ConsumerReviewFactory";
import CategoriesFactory from "./CategoriesFactory";
import randomize from "../../utils/randomize";
import {arrayMaker, arrayReducer} from "../../utils/array-generator";
import {address, cities, descriptions, names, pictures} from "../source";
import generateId from "../../utils/id-generator";

export default class RestaurantFactory extends BaseFactory {
    constructor(count) {
        super(count);
        this._names = arrayReducer(names, count);
        this._description = arrayMaker(descriptions, count);
        this._cities = arrayMaker(cities, count);
        this._address = arrayMaker(address, count);
        this._pictures = arrayReducer(pictures, count);

        // i wanna keep functional style so i avoid to use traditional for loop.
        this._categories = this._names.map(() => {
            return new CategoriesFactory(randomize(2)).build();
        });
        this._consumerReviews = this._names.map(() => {
            return new ConsumerReviewFactory(randomize(3)).build();
        });
    }

    build() {
       return this._names.map((name, index) => {
           return {
               id: generateId(),
               name,
               description: this._description[index],
               city: this._cities[index],
               address: this._address[index],
               picture: this._pictures[index],
               categories: this._categories[index],
               consumerReviews: this._consumerReviews[index]
           };
       });
    }
}
