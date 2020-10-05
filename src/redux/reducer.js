import { ActionType } from './actions';

const restaurantReducer = (state = [], action) => {
  switch (action.type) {
    case ActionType.GET_DETAIL_RESTAURANT:
      return state.filter((s) => s.id === action.id);
    case ActionType.ADD_REVIEW:
      return state.map((s) => (s.id === action.review.id ? {
        ...s,
        consumerReviews: [...s.consumerReviews, {
          name: action.review.name,
          review: action.review.review,
          date: action.review.date,
        }],
      } : s));
    case ActionType.RECEIVE_DATA:
      return action.restaurants;
    default:
      return state;
  }
};

export { restaurantReducer };
