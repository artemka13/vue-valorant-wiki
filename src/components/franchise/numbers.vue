<script>

</script>

<template>
  <section class="numbers">
    <div class="numbers__container">
      <div class="numbers__item">
        <h4 class="numbers__item_title">92%</h4>
        <p class="numbers__item_text">
          положительных отзывов
          о карте Bind
        </p>
      </div>
      <div class="numbers__item">
        <h4 class="numbers__item_title">65%</h4>
        <p class="numbers__item_text">
          Положительных отзывов
          о карте Fracture
        </p>
      </div>
      <div class="numbers__item">
        <h4 class="numbers__item_title">77%</h4>
        <p class="numbers__item_text">
          Положительных отзывов
          о карте Lotus
        </p>
      </div>
      <div class="numbers__item">
        <h4 class="numbers__item_title">80%</h4>
        <p class="numbers__item_text">
          Положительных отзывов
          об игре Valorant
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
* {
  font-family: 'Montserrat', Arial, Verdana, sans-serif;
  box-sizing: border-box;
}
.numbers {
  padding: 0 0 40px;
  background: white;
}
.numbers__container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
.numbers__item {
  width: 100%;
  max-width: 235px;
  z-index: 1;
  margin-right: 20px;
  margin-bottom: 70px;
}
.numbers__item_title {
  font-size: 47px;
  font-weight: 700;
  color: #e30b0f;
  line-height: 1;
  margin-bottom: 10px;
}
.numbers__item_text {
  font-size: 18px;
  font-weight: 500;
  line-height: 1.25;
}
</style>