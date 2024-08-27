<template>
  <div id="app">
    <div class="content">
      <HomeNavbar />
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
    <HomeFooter />
  </div>
</template>


<script>
import HomeFooter from './components/HomeFooter.vue';
import HomeNavbar from './components/HomeNavbar.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export default {
  name: 'App',
  components: {
    HomeNavbar,
    HomeFooter
  },
  computed: {
    isFixed() {
      // 如果內容不足以填滿視窗，返回 true，使 Footer 固定在底部
      return document.documentElement.scrollHeight <= window.innerHeight;
    }
  },
  mounted() {
    window.addEventListener('resize', this.updateFooterPosition);
    this.updateFooterPosition();
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateFooterPosition);
  },
  methods: {
    updateFooterPosition() {
      this.$forceUpdate();
    }
  }
};
</script>


<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.container{
  padding-bottom: 80px;
}

.content {
  flex: 1;
}
</style>