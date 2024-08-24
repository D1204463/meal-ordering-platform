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
          <img :src="card.image" alt="Card Image" class="card-image" />
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

export default {
  name: 'RestaurantPage',
  data() {
    return {
      // Mock data for the cards
      cards: [
        { id: 1, image: 'path/to/image1.jpg', title: 'Restaurant 1', description: 'Description 1', type: 'Italian' },
        { id: 2, image: 'path/to/image2.jpg', title: 'Restaurant 2', description: 'Description 2', type: 'Chinese' },
        { id: 3, image: 'path/to/image3.jpg', title: 'Restaurant 3', description: 'Description 3', type: 'Mexican' },
        { id: 4, image: 'path/to/image4.jpg', title: 'Restaurant 4', description: 'Description 4', type: 'Japanese' },
        { id: 5, image: 'path/to/image5.jpg', title: 'Restaurant 5', description: 'Description 5', type: 'Indian' },
        { id: 6, image: 'path/to/image6.jpg', title: 'Restaurant 6', description: 'Description 6', type: 'Korean' },
        { id: 7, image: 'path/to/image7.jpg', title: 'Restaurant 7', description: 'Description 7', type: 'Italian' },
        { id: 8, image: 'path/to/image8.jpg', title: 'Restaurant 8', description: 'Description 8', type: 'Chinese' },
        { id: 9, image: 'path/to/image9.jpg', title: 'Restaurant 9', description: 'Description 9', type: 'Mexican' },
        { id: 10, image: 'path/to/image10.jpg', title: 'Restaurant 10', description: 'Description 10', type: 'Japanese' },
        { id: 11, image: 'path/to/image11.jpg', title: 'Restaurant 11', description: 'Description 11', type: 'Indian' },
        { id: 12, image: 'path/to/image12.jpg', title: 'Restaurant 12', description: 'Description 12', type: 'Korean' },
        { id: 13, image: 'path/to/image13.jpg', title: 'Restaurant 13', description: 'Description 13', type: 'Italian' },
        { id: 14, image: 'path/to/image14.jpg', title: 'Restaurant 14', description: 'Description 14', type: 'Chinese' },
        { id: 15, image: 'path/to/image15.jpg', title: 'Restaurant 15', description: 'Description 15', type: 'Mexican' },
        { id: 16, image: 'path/to/image16.jpg', title: 'Restaurant 16', description: 'Description 16', type: 'Japanese' },
        { id: 17, image: 'path/to/image17.jpg', title: 'Restaurant 17', description: 'Description 17', type: 'Indian' },
        { id: 18, image: 'path/to/image18.jpg', title: 'Restaurant 18', description: 'Description 18', type: 'Korean' },
        { id: 19, image: 'path/to/image19.jpg', title: 'Restaurant 19', description: 'Description 19', type: 'Italian' },
        { id: 20, image: 'path/to/image20.jpg', title: 'Restaurant 20', description: 'Description 20', type: 'Chinese' }
      ],
      selectedType: 'All',
      types: ['All', 'Italian', 'Chinese', 'Mexican', 'Japanese', 'Indian', 'Korean']
    };
  },
  computed: {
    filteredCards() {
      if (this.selectedType === 'All') {
        return this.cards;
      }
      return this.cards.filter(card => card.type === this.selectedType);
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
