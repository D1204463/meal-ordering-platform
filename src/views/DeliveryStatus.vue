<template>
  <div class="delivery-status">
    <h1>配送狀態</h1>
    <!-- 狀態圖示 -->
    <div class="status-container">
      <i v-if="status === '取貨中'" class="status-icon fas fa-box"></i>
      <i v-if="status === '運送中'" class="status-icon fas fa-truck"></i>
      <i v-if="status === '已抵達'" class="status-icon fas fa-map-pin"></i>
      <i v-if="status === '送餐完畢'" class="status-icon fas fa-check-circle"></i>
      <p class="status-text">{{ status }}</p>
    </div>
    <div id="map" class="map"></div>
    <p>預計抵達時間: {{ estimatedArrivalTime }}</p>
    <p>剩餘時間: {{ remainingTime }}</p>
    <button @click="confirmDelivery" class="confirm-button">確認送達</button>
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
      deliveryTime: null, // 儲存預計送達時間
      remainingTime: '計算中...', // 預設值
      map: null, // Leaflet 地圖實例
      marker: null, // Leaflet 標記實例
      yourLocation: [24.179362080353094, 120.64652569999998] // 替換為實際座標
    };
  },
  mounted() {
    this.startStatusUpdates();
    this.calculateEstimatedArrivalTime();
    this.updateRemainingTime();
    this.initMap();
    this.initializeMap();
  },
  beforeUnmount() {
    this.stopStatusUpdates();
    this.stopTimeUpdate();
    if (this.map) {
      this.map.remove();
    }
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
            this.remainingTime = `${seconds} 秒`;
          } else {
            this.remainingTime = '已送達';
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
    initializeMap() {
      this.map = L.map('map').setView(this.yourLocation, 15); // 設定為你的位置

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> 版權所有'
      }).addTo(this.map);

      // 添加標記和標籤
      L.marker(this.yourLocation, {
        icon: L.icon({
          iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
          shadowSize: [41, 41]
        })
      }).addTo(this.map).bindPopup('你的位置').openPopup();
    },
    confirmDelivery() {
      if (confirm('你確定要確認送達嗎？')) {
        this.$router.push('/'); // 重定向到 Home.vue
      }
    }
  }
};
</script>

<style scoped>
/* 強調配送狀態的字體 */
.status-container {
  text-align: center;
  margin-bottom: 20px;
}

.status-text {
  font-size: 2rem;
  font-weight: bold;
  color: #d9534f;
  margin-top: 10px;
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
