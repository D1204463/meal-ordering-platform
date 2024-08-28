<template>
  <div class="home-page">
    <!-- Navigation Buttons -->
    <div class="nav-buttons">
      <button @click="selectedPage = 'home'">Home</button>
      <button @click="selectedPage = 'RestaurantPage'">Restaurant</button>
      <button @click="selectedPage = 'cart'">Cart</button>
      <button @click="selectedPage = 'settings'">Settings</button>
      <button @click="selectedPage = 'login'">Login</button>
      <button @click="selectedPage = 'register'">Register</button>
      <button @click="selectedPage = 'Delivery'">Delivery</button>
    </div>

    <!-- Featured Restaurants Section -->
    <section v-if="selectedPage === 'home'" class="featured-restaurants">
      <h2>Featured Restaurants</h2>
      <div class="restaurant-cards">
        <div class="card" v-for="restaurant in featuredRestaurants" :key="restaurant.id">
          <img :src="`https://picsum.photos/200/150?random=${restaurant.id}`" :alt="restaurant.name">
          <h3>{{ restaurant.name }}</h3>
          <p>{{ restaurant.description }}</p>
        </div>
      </div>
    </section>

    <!-- Popular Dishes Section -->
    <section v-if="selectedPage === 'home'" class="popular-dishes">
      <h2>Popular Dishes</h2>
      <div class="dish-cards">
        <div class="card" v-for="dish in popularDishes" :key="dish.id">
          <img :src="`https://picsum.photos/200/150?random=${dish.id + 10}`" :alt="dish.name">
          <h3>{{ dish.name }}</h3>
          <p>{{ dish.description }}</p>
        </div>
      </div>
    </section>

    <!-- Customer Testimonials Section -->
    <section v-if="selectedPage === 'home'" class="testimonials">
      <h2>What Our Customers Say</h2>
      <div class="testimonial-cards">
        <div class="card" v-for="testimonial in testimonials" :key="testimonial.id">
          <p>"{{ testimonial.message }}"</p>
          <h4>- {{ testimonial.name }}</h4>
        </div>
      </div>
    </section>

    <!-- Newsletter Signup Section -->
    <section v-if="selectedPage === 'home'" class="newsletter-signup">
      <h2>Stay Updated!</h2>
      <p>Sign up for our newsletter to get the latest news and offers.</p>
      <input type="email" placeholder="Enter your email">
      <button>Sign Up</button>
    </section>

    <!-- Dynamic Page Sections -->
    <RestaurantPage v-if="selectedPage === 'RestaurantPage'" />
    <CartPage v-if="selectedPage === 'cart'" />
    <SettingsPage v-if="selectedPage === 'settings'" />
    <LoginPage v-if="selectedPage === 'login'" />
    <UserRegisterPage v-if="selectedPage === 'register'" />
    <DeliveryStatus v-if="selectedPage === 'Delivery'" />

    <!-- Footer Banner -->
    <Footer :isFixed="true" />
  </div>
</template>

<script>
import CartPage from "@/views/Cart.vue";
import SettingsPage from "@/views/Settings.vue";
import LoginPage from "@/components/UserLogin.vue";
import RestaurantPage from "@/views/RestaurantPage.vue";
import UserRegisterPage from "@/components/Register.vue";
import DeliveryStatus from "@/views/DeliveryStatus.vue";

export default {
  name: 'HomePage',
  components: {
    UserRegisterPage,
    LoginPage,
    RestaurantPage,
    CartPage,
    SettingsPage,
    DeliveryStatus,
  },
  data() {
    return {
      selectedPage: 'home',
      featuredRestaurants: [
        { id: 1, name: "The Food Place", description: "Best dishes in town" },
        { id: 2, name: "Gourmet Delight", description: "Exquisite dining experience" },
        // Add more restaurants
      ],
      popularDishes: [
        { id: 1, name: "Spaghetti Carbonara", description: "Rich and creamy" },
        { id: 2, name: "Grilled Chicken", description: "Juicy and tender" },
        // Add more dishes
      ],
      testimonials: [
        { id: 1, message: "Amazing food!", name: "John Doe" },
        { id: 2, message: "Great service!", name: "Jane Smith" },
        // Add more testimonials
      ]
    };
  },
};
</script>

<style scoped>
.home-page {
  text-align: center;
  margin-top: 50px;
  padding: 0 20px;
}

.nav-buttons {
  margin-bottom: 20px;
}

.nav-buttons button {
  margin: 5px;
  padding: 10px 20px;
  background-color: #8B4513;
  color: #FFFFFF;
  border: 1px solid #6A3D1B;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  background-image: linear-gradient(145deg, #8B4513, #6A3D1B);
  box-shadow: inset 0 -2px 5px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, box-shadow 0.3s;
}

.nav-buttons button:hover {
  background-color: #6A3D1B;
  box-shadow: inset 0 -4px 8px rgba(0, 0, 0, 0.3);
}

.featured-restaurants, .popular-dishes, .testimonials, .newsletter-signup {
  margin: 40px 0;
}

.restaurant-cards, .dish-cards, .testimonial-cards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 20px;
  width: 250px;
  text-align: left;
}

.card img {
  width: 100%;
  border-radius: 4px;
  margin-bottom: 10px;
}

.newsletter-signup input[type="email"] {
  padding: 10px;
  border: 1px solid #8B4513;
  border-radius: 4px;
  width: 60%;
  margin-right: 10px;
}

.newsletter-signup button {
  padding: 10px 20px;
  background-color: #8B4513;
  color: #FFFFFF;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
