import BaseFactory from "../../utils/BaseFactory";
import {arrayReducer} from "../../utils/array-generator";
import {foods} from "../source";

export default class FoodsFactory extends BaseFactory {
    constructor(count) {
        super(count);
        this._foods = arrayReducer(foods, count);
    }

    build() {
        return this._foods.map(food => {
            return {
                name: food
            };
        });
    }
}
