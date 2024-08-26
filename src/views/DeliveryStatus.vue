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
      estimatedArrivalTime: 'TBD',
      status: '取貨中',
      statuses: ['取貨中', '運送中', '已抵達', '送餐完畢'],
      currentStatusIndex: 0,
      deliveryTime: null,
      remainingTime: 'Calculating...',
      map: null
    };
  },
  mounted() {
    this.startStatusUpdates();
    this.calculateEstimatedArrivalTime();
    this.updateRemainingTime();
    this.initMap();
  },
  beforeUnmount() {
    this.stopStatusUpdates();
    this.stopTimeUpdate();
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
      }, 10000);
    },
    stopStatusUpdates() {
      if (this.statusInterval) {
        clearInterval(this.statusInterval);
      }
    },
    calculateEstimatedArrivalTime() {
      const now = new Date();
      this.deliveryTime = new Date(now.getTime() + 40 * 1000);
      this.estimatedArrivalTime = this.deliveryTime.toLocaleTimeString();
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
      }, 1000);
    },
    stopTimeUpdate() {
      if (this.timeUpdateInterval) {
        clearInterval(this.timeUpdateInterval);
      }
    },
    initMap() {
      this.map = L.map('map').setView([24.17956, 120.64671], 12);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(this.map);

      L.marker([24.17956, 120.64671]).addTo(this.map)
          .bindPopup('Your Location')
          .openPopup();
    },
    confirmDelivery() {
      if (confirm('Are you sure you want to confirm delivery?')) {
        this.$router.push('/'); // Redirect to Home.vue
      }
    }
  }
};
</script>

<style scoped>
/* ... existing styles ... */

.map {
  width: 100%;
  height: 300px;
  background-color: #e0e0e0;
  margin-bottom: 20px;
}
</style>
