import {ActionType, addReviewAction, receiveDataAction} from "../../src/redux/actions";

describe("action", () => {
    it("should create an action to add review", () => {
        const review = {
            name: "Dimas",
            review: "Lorem ipsum dolor sit amet",
            date: "a dummy date"
        };

        const expectedAction = {
            type: ActionType.ADD_REVIEW,
            review
        };
        expect(addReviewAction(review)).toEqual(expectedAction);
    });

    it("should create an action to receive data", () => {
        const restaurants = {
            id: "Dummy Id",
            name: "Dummy Name",
            description: "Dummy Description"
        };
        const expectedAction = {
            type: ActionType.RECEIVE_DATA,
            restaurants
        };

        expect(receiveDataAction(restaurants)).toEqual(expectedAction);
    });
});
