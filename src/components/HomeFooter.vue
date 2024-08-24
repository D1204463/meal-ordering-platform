<template>
  <footer :class="['footer-banner', { fixed: isFixed }]">
    <p>&copy; 2024 Meal Ordering Platform. All rights reserved.</p>
  </footer>
</template>

<script>
export default {
  props: {
    isFixed: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.footer-banner {
  margin-top: 20px;
  padding: 10px;
  background-color: #f1f1f1;
  text-align: center;
}

.fixed {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
