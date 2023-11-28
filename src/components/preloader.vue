<script>
export default {
  name: "Preloader",
  props: {
    loading: Boolean,
  },
};
</script>

<template>
  <div v-if="loading" class="preloader">
    <div class="preloader-spinner"></div>
    <p class="preloader-text">ValoWiki</p>
  </div>
</template>

<style scoped>
* {
  font-family: 'Montserrat', Arial, Verdana, sans-serif;
  box-sizing: border-box;
}
.preloader {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.preloader-text {
  color: red;
  font-size: 48px;
  margin-top: 10px;
  text-align: center;
  font-weight: bold;
  letter-spacing: 5px;
}
.preloader-spinner {
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: preloader-spin 1s linear infinite;
}

@keyframes preloader-spin {
  to {
    transform: rotate(360deg);
  }
}
@media screen and (max-width: 550px) {
  .preloader-text {
    display: none;
  }
}
</style>