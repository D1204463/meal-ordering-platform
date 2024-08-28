<template>
  <footer :class="['footer-banner']">
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
  background-color: #f8650b; /* 深橙色背景 */
  text-align: center;
  color: white; /* 可選：文字顏色設為白色，增加對比 */
}

.fixed {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
