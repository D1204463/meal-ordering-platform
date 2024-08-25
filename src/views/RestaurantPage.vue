<template>
  <div class="restaurant-page">
    <h1>Restaurant</h1>
    <div class="container">
      <div class="sidebar">
        <h3>Filter by Type</h3>
        <ul>
          <li v-for="type in types" :key="type" @click="filterByType(type)">
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
          <!-- <img :src="card.image" alt="Card Image" class="card-image" /> -->
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
      types: ['All', 'Italian', 'Chinese', 'Mexican', 'Japanese', 'Indian', 'Korean']
    };
  },
  computed: {
    filteredCards() {
      const data = restaurant_data;
      if (this.selectedType === 'All') {
        return data;
      }
      let filtered_data = [];
      data.forEach(element => {
        if(element.type === this.selectedType){
          filtered_data.push(element)
        }
      });
      return filtered_data;
    }
  },
  methods: {
    goToMenu(menuId) {
      this.$router.push({ path: `/menu/${menuId}` });
    },
    filterByType(type) {
      this.selectedType = type;
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
}

.sidebar li:hover {
  background-color: #f0f0f0;
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
  height: auto;
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
