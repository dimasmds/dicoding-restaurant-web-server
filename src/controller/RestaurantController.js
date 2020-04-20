import RestaurantRepository from "../repository/RestaurantRepository";

export default class RestaurantController {
    static getList() {
        const restaurants = RestaurantRepository.getList();
        if (restaurants.length) {
            return {
                error: false,
                message: "success",
                count: restaurants.length,
                restaurants
            };
        }

        return {
            error: true,
            message: "not found",
            count: 0,
            restaurants
        };
    }

    static getRestaurantById(id) {
        const restaurant = RestaurantRepository.getRestaurantById(id);
        if (restaurant) {
            return {
                error: false,
                message: "success",
                restaurant
            };
        }

        return {
            error: true,
            message: "not found",
            restaurant
        };
    }

    static addReview(review) {
        const customerReviews = RestaurantRepository.addReview(review);
        if(customerReviews) {
            return {
                error: false,
                message: "success",
                customerReviews
            };
        }

        return {
            error: true,
            message: "failed to add review",
            customerReviews
        };
    }
}
