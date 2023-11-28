<script>

</script>

<template>
  <section class="get-numbers">
    <div class="get-numbers__container">
      <div class="get-numbers__column">
        <h2 class="get-numbers__title">
          Каждый год спрос на наш сайт только растет
        </h2>
        <p class="get-numbers__sub-title">
          Так как количество новых игроков только увеличивается
        </p>

      </div>
      <div class="get-numbers__column get-numbers__column-right">
        <div class="get-numbers__image-wrapper">
          <img src="../../assets/graph2022.svg" alt="graph" class="get-numbers__image">
        </div>
        <p class="get-numbers__image-description">
          После пандемии 2020 года средняя посещаемость сайта выросла на 24%
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
.get-numbers {
  padding: 100px 0;
  color: #fff;
  background-color: black;
}
.get-numbers__container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  width: 100%;
  max-width: 1530px;
  margin: 0 auto;
  padding: 0 20px;
}
.get-numbers__column {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  max-width: 670px;
  margin-right: 30px;
}
.get-numbers__title {
  font-size: 50px;
  line-height: 1.23;
  margin-bottom: 20px;
}
.get-numbers__sub-title {
  font-size: 24px;
  margin-bottom: 40px;
  line-height: 1.3;
}
.get-numbers__column:last-child {
  margin-right: 0;
}
.get-numbers__column-right {
  max-width: 420px;
}
.get-numbers__image-wrapper {
  max-width: 420px;
  margin-bottom: 25px;
}
img {
  max-width: 100%;
}
.get-numbers__image-description {
  font-size: 18px;
  line-height: 1.3;
}
@media (max-width: 800px) {
  .get-numbers__container {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
}
@media (max-width: 480px) {
  .get-numbers__title {
    font-size: 36px;
  }
  .get-numbers__sub-title {
    font-size: 18px;
  }
}
</style>