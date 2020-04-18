import BaseFactory from "../../utils/BaseFactory";
import {arrayReducer} from "../../utils/array-generator";
import {categories} from "../source";

export default class CategoriesFactory extends BaseFactory {
    constructor(count) {
        super(count);
        this._categories = arrayReducer(categories, count);
    }

    build() {
        return this._categories.map(category => {
            return {name: category};
        });
    }
}
