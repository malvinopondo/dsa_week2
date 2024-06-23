function recommendRestaurants(restaurants, targetRating) {
    // Sort restaurants in descending order based on their rating values
    restaurants.sort((a, b) => b.rating - a.rating);

    // If targetRating is provided, filter restaurants with rating >= targetRating
    if (targetRating !== undefined) {
        return restaurants.filter(restaurant => restaurant.rating >= targetRating);
    }

    return restaurants;
}

// Example usage
const restaurants = [
    { name: "Restaurant A", rating: 4.5 },
    { name: "Restaurant B", rating: 4.7 },
    { name: "Restaurant C", rating: 4.0 },
    { name: "Restaurant D", rating: 3.8 },
    { name: "Restaurant E", rating: 4.2 }
];

console.log(recommendRestaurants(restaurants)); 
// Output: sorted list of all restaurants by rating

console.log(recommendRestaurants(restaurants, 4.2)); 
// Output: list of restaurants with rating >= 4.2
