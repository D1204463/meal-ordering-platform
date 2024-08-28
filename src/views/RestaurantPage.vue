<template>
  <div class="restaurant-page">
    <h1>Restaurant</h1>
    <div class="container">
      <div class="sidebar">
        <h3>Filter by Type</h3>
        <ul>
          <li
              v-for="type in types"
              :key="type"
              @click="filterByType(type)"
              :class="{ active: selectedType === type }"
          >
            {{ type }}
          </li>
        </ul>
      </div>
      <div class="card-container">
        <!-- Card elements -->
        <div
            v-for="card in filteredCards"
            :key="card.id"
            class="card"
            @click="goToMenu(card.id)"
        >
          <img :src="getImage(card.type)" alt="Card Image" class="card-image" />
          <div class="card-info">
            <h3>{{ card.title }}</h3>
            <p>{{ card.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { restaurant_data } from '@/fake_data/data.js';

export default {
  name: 'RestaurantPage',
  data() {
    return {
      selectedType: 'All',
      types: ['All', 'Italian', 'Chinese', 'Mexican', 'Japanese', 'Indian', 'Korean'],
    };
  },
  computed: {
    filteredCards() {
      if (this.selectedType === 'All') {
        return restaurant_data;
      }
      return restaurant_data.filter(card => card.type === this.selectedType);
    },
  },
  methods: {
    goToMenu(menuId) {
      this.$router.push({ path: `/menu/${menuId}` });
    },
    filterByType(type) {
      this.selectedType = type;
    },
    getImage(type) {
      let img = "";

      if(type==='Chinese'){
        img = 'img/Chinese.jpg'
      }else if(type === 'Italian'){
        img = 'img/Italy.jpg'
      }else if(type === 'Mexican'){
        img = 'img/Mexico.jpg'
      }else if(type === 'Japanese'){
        img = 'img/Japan.jpg'
      }else if(type === 'Indian'){
        img = 'img/India.jpg'
      }else{
        img = 'img/Korea.jpg'
      }
  
      return img;
    }
  }
};
</script>

<style scoped>
.restaurant-page {
  padding: 20px;
}

.container {
  display: flex;
}

.sidebar {
  width: 200px;
  margin-right: 20px;
}

.sidebar h3 {
  margin: 0;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar li {
  cursor: pointer;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  transition: background-color 0.3s ease;
}

.sidebar li:hover,
.sidebar li.active {
  background-color: #f0f0f0;
  font-weight: bold; /* Active item becomes bold */
}

.card-container {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* Increased spacing between cards */
}

.card {
  cursor: pointer;
  transition: transform 0.3s ease;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  width: calc(25% - 20px); /* 4 cards per row with spacing */
  box-sizing: border-box;
  text-align: center;
}

.card:hover {
  transform: scale(1.05);
}

.card-image {
  width: 100%;
  height: 200px; /* Set a fixed height for the image */
  object-fit: cover; /* Ensures the image covers the area without distortion */
  border-bottom: 1px solid #ddd;
}

.card-info {
  padding: 10px;
}

.card-info h3 {
  margin: 0;
  font-size: 1.2em;
}

.card-info p {
  margin: 5px 0 0;
}

/* Responsive design */
@media (max-width: 1200px) {
  .card {
    width: calc(33.33% - 20px); /* 3 cards per row on medium screens */
  }
}

@media (max-width: 800px) {
  .card {
    width: calc(50% - 20px); /* 2 cards per row on small screens */
  }
}

@media (max-width: 500px) {
  .card {
    width: calc(100% - 20px); /* 1 card per row on extra small screens */
  }
}
</style>
