<template>
    <div class="historical-orders-page">
      <h1>Historical Orders</h1>
      <div class="order-list">
        <div v-for="order in orders" :key="order.id" class="order-card">
          <div class="order-header">
            <h2>{{ order.restaurant }}</h2>
            <span class="order-date">{{ order.date }}</span>
          </div>
          <div class="order-items">
            <div v-for="item in order.items" :key="item.name" class="order-item">
              <span class="item-name">{{ item.name }}</span>
              <span class="item-quantity">x{{ item.quantity }}</span>
              <span class="item-price">${{ item.price.toFixed(2) }}</span>
            </div>
          </div>
          <div class="order-total">
            <strong>Total:</strong> ${{ order.total.toFixed(2) }}
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { restaurant_data, menu_data } from '@/fake_data/data.js';
  
  export default {
    name: 'HistoricalOrdersPage',
    data() {
      return {
        orders: []
      };
    },
    mounted() {
      this.generateMockOrders();
    },
    methods: {
      generateMockOrders() {
        const numberOfOrders = 10;
        const orders = [];
  
        for (let i = 0; i < numberOfOrders; i++) {
          const restaurant = this.getRandomRestaurant();
          const menu = menu_data[restaurant.id];
          const items = this.getRandomItems(menu.menu);
          const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
          orders.push({
            id: i + 1,
            restaurant: restaurant.title,
            date: this.getRandomDate(),
            items: items,
            total: total
          });
        }
  
        this.orders = orders.sort((a, b) => new Date(b.date) - new Date(a.date));
      },
      getRandomRestaurant() {
        return restaurant_data[Math.floor(Math.random() * restaurant_data.length)];
      },
      getRandomItems(menu) {
        const numberOfItems = Math.floor(Math.random() * 3) + 1;
        const items = [];
  
        for (let i = 0; i < numberOfItems; i++) {
          const menuItem = menu[Math.floor(Math.random() * menu.length)];
          items.push({
            name: menuItem.item,
            quantity: Math.floor(Math.random() * 2) + 1,
            price: menuItem.price
          });
        }
  
        return items;
      },
      getRandomDate() {
        const start = new Date(2023, 0, 1);
        const end = new Date();
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
      }
    }
  };
  </script>
  
  <style scoped>
  .historical-orders-page {
    padding: 20px;
  }
  
  .order-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .order-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    background-color: #f9f9f9;
  }
  
  .order-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .order-header h2 {
    margin: 0;
    font-size: 1.2em;
  }
  
  .order-date {
    color: #666;
  }
  
  .order-items {
    margin-bottom: 10px;
  }
  
  .order-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }
  
  .item-name {
    flex-grow: 1;
  }
  
  .item-quantity {
    margin: 0 10px;
  }
  
  .item-price {
    font-weight: bold;
  }
  
  .order-total {
    text-align: right;
    font-size: 1.1em;
  }
  
  @media (max-width: 600px) {
    .order-header {
      flex-direction: column;
      align-items: flex-start;
    }
  
    .order-date {
      margin-top: 5px;
    }
  }
  </style>