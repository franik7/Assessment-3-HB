const restaurants = ["Tatiana", "Oceanview Cafe", "Kashkar Cafe"]

const restaurantButton = document.querySelector(".fav-restaurant-button")

restaurantButton.addEventListener("click", randomRestaurant)

function randomRestaurant() {
    const choice = Math.floor(Math.random() * restaurants.length)

    alert(`Today you will eat at ${restaurants[choice]}`)

}