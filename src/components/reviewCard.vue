<template>
  <div class="card">
    <div class="card-body">
      <p class="card-text">{{ review }}</p>

      <div class="name">
        <span>{{ name }}</span>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "reviewCard",
  props: {
    name: String,
    review: String,
  },
}
</script>

<style scoped>
* {
  font-family: 'Montserrat', Arial, Verdana, sans-serif;
  box-sizing: border-box;
}
.card {
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
  margin-bottom: 50px;
  padding: 10px;
  color: black;
}
.name {
  position: relative;
  overflow: hidden;
  z-index: 1;
}
.card-text {
  padding-bottom: 50px;
  font-size: 18px;
}
.name span {
  display: block;
  font-size: 24px;
  font-weight: 700;
  padding: 10px 30px;
  padding-right: 105px;
  background: white;
  float: right;
}
.name span:before {
  content: "";
  display: block;
  background: #E30B0F;
  width: 100%;
  height: 6px;
  left: 0;
  top: 50%;
  position: absolute;
  margin-top: -2px;
  z-index: -1;
}
.name span:after {
  content: "";
  display: block;
  width: 74px;
  height: 49px;
  position: absolute;
  top: 50%;
  margin-top: -25px;
  right: 0;
  background-image: url(../assets/icon-review.png);
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 3;
}
@media (max-width: 950px) {
  .card-text {
    font-size: 14px;
    text-align: center;
  }
  .name span:before {
    display: none;
  }
  .name span {
    padding: 0;
    float: none;
    text-align: center;
  }
  .name span:after {
    display: none;
  }
}
</style>