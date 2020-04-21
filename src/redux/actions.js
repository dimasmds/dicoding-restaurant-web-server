const ActionType = {
    GET_DETAIL_RESTAURANT: "GET_DETAIL_RESTAURANT",
    ADD_REVIEW: "ADD_REVIEW",
    RECEIVE_DATA: "RECEIVE_DATA"
};

const addReviewAction = (review) => {
    return {
        type: ActionType.ADD_REVIEW,
        review
    };
};

const receiveDataAction = (restaurants) => {
    return {
        type: ActionType.RECEIVE_DATA,
        restaurants
    };
};

export {ActionType, addReviewAction, receiveDataAction};
