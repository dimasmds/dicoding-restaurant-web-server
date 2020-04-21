import {createStore} from "redux";
import {restaurantReducer} from "./reducer";

const store = createStore(restaurantReducer);

export default store;
