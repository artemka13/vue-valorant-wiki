<script>

</script>

<template>
  <section class="franchise">
    <div class="franchise__container">
      <h2 class="franchise__title">
        Карты входящие в соревновательный мап пул игры
      </h2>
      <div class="franchise__content">
        <div class="franchise__item">
          <div class="franchise__item_image-inner">
            <img src="../../assets/Sunset.jpeg" alt="gear" class="franchise__item_image">
          </div>
          <h4 class="franchise__item_title">
            Sunset
          </h4>
        </div>
        <div class="franchise__item">
          <div class="franchise__item_image-inner">
            <img src="../../assets/n45889.jpeg" alt="location" class="franchise__item_image">
          </div>
          <h4 class="franchise__item_title">
            Bind
          </h4>
        </div>
        <div class="franchise__item">
          <div class="franchise__item_image-inner">
            <img src="../../assets/valorant-fracture_feature.jpg" alt="play-btn" class="franchise__item_image">
          </div>
          <h4 class="franchise__item_title">
            Fracture
          </h4>
        </div>
        <div class="franchise__item">
          <div class="franchise__item_image-inner">
            <img src="../../assets/Lotus.jpeg" alt="reading" class="franchise__item_image">
          </div>
          <h4 class="franchise__item_title">
            Lotus
          </h4>
        </div>
        <div class="franchise__item">
          <div class="franchise__item_image-inner">
            <img src="../../assets/Pearl.jpeg" alt="menager" class="franchise__item_image">
          </div>
          <h4 class="franchise__item_title">
            Pearl
          </h4>
        </div>
        <div class="franchise__item">
          <div class="franchise__item_image-inner">
            <img src="../../assets/Ascent.jpeg" alt="speaker" class="franchise__item_image">
          </div>
          <h4 class="franchise__item_title">
            Ascent
          </h4>
        </div>
        <div class="franchise__item">
          <div class="franchise__item_image-inner">
            <img src="../../assets/Haven.jpeg" alt="crm" class="franchise__item_image">
          </div>
          <h4 class="franchise__item_title">
            Haven
          </h4>
        </div>
        <div class="franchise__item">
          <div class="franchise__item_image-inner">
            <img src="../../assets/Split.jpeg" alt="design-project" class="franchise__item_image">
          </div>
          <h4 class="franchise__item_title">
            Split
          </h4>
        </div>
        <div class="franchise__item">
          <div class="franchise__item_image-inner">
            <img src="../../assets/Breeze.jpeg" alt="book" class="franchise__item_image">
          </div>
          <h4 class="franchise__item_title">
            Breeze
          </h4>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
* {
  font-family: 'Montserrat', Arial, Verdana, sans-serif;
  box-sizing: border-box;
}
.franchise {
  padding: 100px 0;
  background: #08111f;
  color: white;
}
.franchise__container {
  width: 100%;
  max-width: 1530px;
  margin: 0 auto;
  padding: 0 20px;
}
.franchise__title {
  font-size: 62.5px;
  line-height: 1.2;
  margin-bottom: 120px;
  text-align: center;
}
.franchise__content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.franchise__item {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 32%;
  flex: 1 1 32%;
  max-width: 450px;
  text-align: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-bottom: 75px;
}
.franchise__item_image-inner {
  position: relative;
  margin: 0 auto 40px;
  width: fit-content;
  z-index: 1;
}
img {
  max-width: 70%;
  transform: scale(1.25);
}
.franchise__item_title {
  font-size: 24px;
  width: fit-content;
  padding: 0 5px;
  line-height: 1.3;
  margin: 0 auto;
}
@media (max-width: 1400px) {
  .franchise__title {
    font-size: 50px;
  }
}
@media (max-width: 1200px) {
  .franchise__container {
    max-width: 1200px;
  }
}
@media (max-width: 900px) {
  .franchise__item {
    -ms-flex-preferred-size: 45%;
    flex-basis: 45%;
  }
  .franchise__content {
    max-width: 700px;
    margin: 0 auto;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .franchise__title {
    font-size: 45px;
  }
  .franchise__item_title {
    font-size: 18px;
  }
}
@media (max-width: 700px) {
  .franchise__title {
    font-size: 40px;
  }
}
@media (max-width: 600px) {
  .franchise__title {
    font-size: 35px;
  }
}
@media (max-width: 500px) {
  .franchise__title {
    font-size: 30px;
  }
  .franchise__item_title {
    padding: 0;
  }
  .franchise__item {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
  }
}
@media (max-width: 360px) {
  .franchise__title {
    font-size: 25px;
  }
}
</style>