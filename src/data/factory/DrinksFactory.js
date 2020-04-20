import BaseFactory from "../../utils/BaseFactory";
import {arrayReducer} from "../../utils/array-generator";
import {drinks} from "../source";

export default class DrinksFactory extends BaseFactory {

    constructor(count) {
        super(count);
        this._drinks = arrayReducer(drinks, count);
    }

    build() {
        return this._drinks.map(drink => {
            return {
                name: drink
            };
        });
    }
}
