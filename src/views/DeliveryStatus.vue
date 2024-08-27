<template>
  <div class="delivery-status">
    <h1>Delivery Status</h1>
    <!-- Status Icons -->
    <div class="status-container">
      <i v-if="status === '取貨中'" class="status-icon fas fa-box"></i>
      <i v-if="status === '運送中'" class="status-icon fas fa-truck"></i>
      <i v-if="status === '已抵達'" class="status-icon fas fa-map-pin"></i>
      <i v-if="status === '送餐完畢'" class="status-icon fas fa-check-circle"></i>
      <p class="status-text">{{ status }}</p>
    </div>
    <div id="map" class="map"></div>
    <p>Estimated Arrival Time: {{ estimatedArrivalTime }}</p>
    <p>Remaining Time: {{ remainingTime }}</p>
    <button @click="confirmDelivery" class="confirm-button">Confirm Delivery</button>
  </div>
  <Footer :isFixed="true" />
</template>

<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default {
  data() {
    return {
      estimatedArrivalTime: 'TBD', // Replace with actual data
      status: '取貨中', // Initial status
      statuses: ['取貨中', '運送中', '已抵達', '送餐完畢'],
      currentStatusIndex: 0,
      deliveryTime: null, // To store the estimated delivery time
      remainingTime: 'Calculating...', // Default value
      map: null, // Leaflet map instance
      marker: null, // Leaflet marker instance
      yourLocation: [24.179362080353094, 120.64652569999998] // Replace with actual coordinates
    };
  },
  created() {
    this.startStatusUpdates();
    this.calculateEstimatedArrivalTime();
    this.updateRemainingTime();
  },
  beforeUnmount() {
    this.stopStatusUpdates();
    this.stopTimeUpdate();
    if (this.map) {
      this.map.remove();
    }
  },
  mounted() {
    this.initializeMap();
  },
  methods: {
    startStatusUpdates() {
      this.statusInterval = setInterval(() => {
        if (this.currentStatusIndex < this.statuses.length - 1) {
          this.currentStatusIndex++;
          this.status = this.statuses[this.currentStatusIndex];
        } else {
          this.stopStatusUpdates();
        }
      }, 10000); // Update every 10 seconds
    },
    stopStatusUpdates() {
      if (this.statusInterval) {
        clearInterval(this.statusInterval);
      }
    },
    calculateEstimatedArrivalTime() {
      // Calculate the estimated arrival time (40 seconds from now)
      const now = new Date();
      this.deliveryTime = new Date(now.getTime() + 40 * 1000); // 40 seconds from now
      this.estimatedArrivalTime = this.deliveryTime.toLocaleTimeString(); // Format the time
    },
    updateRemainingTime() {
      this.timeUpdateInterval = setInterval(() => {
        if (this.deliveryTime) {
          const now = new Date();
          const timeDiff = this.deliveryTime - now;
          if (timeDiff > 0) {
            const seconds = Math.floor(timeDiff / 1000);
            this.remainingTime = `${seconds}s`;
          } else {
            this.remainingTime = 'Delivered';
            this.stopTimeUpdate();
          }
        }
      }, 1000); // Update every second
    },
    stopTimeUpdate() {
      if (this.timeUpdateInterval) {
        clearInterval(this.timeUpdateInterval);
      }
    },
    confirmDelivery() {
      if (confirm('Are you sure you want to confirm delivery?')) {
        this.$router.push('/'); // Redirect to Home.vue
      }
    },
    initializeMap() {
      this.map = L.map('map').setView(this.yourLocation, 15); // Set to your location

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);

      // Add a marker with a label
      L.marker(this.yourLocation, {
        icon: L.icon({
          iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
          shadowSize: [41, 41]
        })
      }).addTo(this.map).bindPopup('Your Location').openPopup();
    }
  }
};
</script>

<style scoped>
.delivery-status {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
  background-color: #f9f9f9;
}

.status-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.status-icon {
  font-size: 2rem;
  margin-right: 10px;
  color: #007BFF;
}

.status-text {
  font-size: 1.5rem;
  font-weight: bold;
}

.map {
  width: 100%;
  height: 300px;
  background-color: #e0e0e0;
  margin-bottom: 20px;
}

.confirm-button {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
}

.confirm-button:hover {
  background-color: #218838;
}
</style>
