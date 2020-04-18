let restaurants = require("../data/consume");

class RestaurantRepository {
    static getList() {
        return restaurants.map(restaurant => {
            return {
                id: restaurant.id,
                name: restaurant.name,
                picture: restaurant.picture,
                city: restaurant.city
            };
        });
    }

    static getRestaurantById(id) {
        return restaurants.filter(restaurant => restaurant.id === id)[0] || null;
    }

    /**
     * @deprecated i will found another ways later! I must learn REDUX so well!
     */
    static addReview(review) {
        // it's little bit hard :(
        restaurants = restaurants.map(restaurant => {
            return restaurant.id === review.id ?
                {
                    ...restaurant,
                    consumerReviews: restaurant.consumerReviews.concat([{
                        name: review.name,
                        review: review.review,
                        date: review.date
                    }])
                } : restaurant;
        });

        const filteredRestaurant = restaurants.filter(restaurant => restaurant.id === review.id);

        return filteredRestaurant.length ? filteredRestaurant[0].consumerReviews : null;

    }
}

export default RestaurantRepository;
