<script>

</script>

<template>
  <section class="about" id="about">
    <div class="formats__container">
      <h2 class="about__title">
        Пример карт со своими особенностями
      </h2>
      <div class="about__wrapper">
        <div class="about__item">
          <picture><source srcset="../../assets/n45889.jpeg" type="image/webp"><img src="../../assets/p_2269-08000.jpg" alt="format" class="about__item_img"></picture>
          <h4 class="about__item_title">Bind</h4>
          <ul class="about__item_list">
            <li class="about__item_list-option">
              <img src="../../assets/icons/free-icon-star-2107957.png" alt="pc-icon" class="about__item_list-option_icon">
              <div class="about__item_list-option_inner">
                <span>Порталы в количестве</span> <b>2 шт</b>
              </div>
            </li>
            <li class="about__item_list-option">
              <img src="../../assets/icons/free-icon-information-button-1176.png" alt="square-icon" class="about__item_list-option_icon" style="width:31px; margin-right:4px;">
              <div class="about__item_list-option_inner">
                <span>Уникальная особенность Bind заключается в том, что в нем нет средней секции, вместо нее есть два односторонних телепорта. Один переносит игроков из Шорта A в Шорт B, а другой - из Лонга B в лобби A.</span>
              </div>
            </li>
            <li class="about__item_list-option price">
              <div class="about__item_list-option_inner"><span>Дата выхода</span> <b>Бета</b></div>
            </li>
          </ul>
        </div>
        <div class="about__item">
          <picture><source srcset="../../assets/valorant-fracture_feature.jpg" type="image/webp"><img src="../../assets/p_2269-08000.jpg" alt="format" class="about__item_img"></picture>
          <h4 class="about__item_title">Fracture</h4>
          <ul class="about__item_list">
            <li class="about__item_list-option">
              <img src="../../assets/icons/free-icon-star-2107957.png" alt="pc-icon" class="about__item_list-option_icon">
              <div class="about__item_list-option_inner">
                <span>Нейтральные сектора в количестве</span> <b>4 шт.</b>
              </div>
            </li>
            <li class="about__item_list-option">
              <img src="../../assets/icons/free-icon-information-button-1176.png"  alt="square-icon" class="about__item_list-option_icon" style="width:31px; margin-right:4px;">
              <div class="about__item_list-option_inner">
                <span>Уникальный дизайн Fracture разделяет карту на четыре нейтральных сектора; четыре центральные области между квадрантами, в которых находятся сайты и места появления Атакующих, и центральную зону, где появляются Защитники.</span>
              </div>
            </li>
            <li class="about__item_list-option price">
              <div class="about__item_list-option_inner"><span>Дата выхода</span> <b>8 сентября 2021</b></div>
            </li>
          </ul>
        </div>
        <div class="about__item">
          <picture><source srcset="../../assets/Valorant-Lotus-2.jpg" type="image/webp"><img src="../../assets/p_2269-08000.jpg" alt="format" class="about__item_img"></picture>
          <h4 class="about__item_title">Lotus</h4>
          <ul class="about__item_list">
            <li class="about__item_list-option">
              <img src="../../assets/icons/free-icon-star-2107957.png" alt="pc-icon" class="about__item_list-option_icon">
              <div class="about__item_list-option_inner">
                <span>Шары умений в количестве</span> <b>3 шт</b>
              </div>
            </li>
            <li class="about__item_list-option">
              <img src="../../assets/icons/free-icon-information-button-1176.png"  alt="square-icon" class="about__item_list-option_icon" style="width:31px; margin-right:4px;">
              <div class="about__item_list-option_inner">
                <span>Lotus содержит множество объектов, разбросанных по карте. Это вторая карта VALORANT, состоящая из трех объектов, но, в отличие от первой карты Хейвена, в Lotus есть третий конечный шар, который можно получить в середине игры.</span>
              </div>
            </li>
            <li class="about__item_list-option price">
              <div class="about__item_list-option_inner"><span>Дата выхода</span> <b>10 января 2023</b></div>
            </li>
          </ul>
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
.about__item_img {
  height: 206px;
}
.about {
  padding: 100px 0;
  background: white;
}
.formats__container {
  width: 100%;
  max-width: 1530px;
  margin: 0 auto;
  padding: 0 20px;
}
.about__title {
  font-size: 64px;
  line-height: 1.23;
  text-align: center;
  margin-bottom: 90px;
}
.about__wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.about__item {
  width: 32%;
  max-width: 450px;
  margin-right: 20px;
}
.about__item_img {
  width: 100%;
  max-width: 450px;
}
.about__item_title {
  font-weight: 700;
  font-size: 25px;
  line-height: 1.75;
  margin-top: 20px;
}
.about__item_list {
  margin-top: 30px;
}
.about__item_list-option {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
}
.about__item_list-option_icon {
  max-width: 35px;
}
.about__item_list-option_inner {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  margin-left: 25px;
  justify-content: space-between;
}
.about__item_list-option span {
  min-width: 120px;
  font-size: 14px;
  font-weight: 500;
}
.about__item_list-option b {
  font-size: 14px;
  font-weight: 700;
  margin-left: 15px;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  text-align: end;
}
.about__item_list-option.price {
  padding-top: 20px;
}
.about__item_list-option:last-child {
  margin-bottom: 0;
}
.about__item_list-option.price span, .about__item_list-option.price b {
  width: 50%;
}
.about__item_list-option.price .about__item_list-option_inner {
  margin-left: 0;
}
@media (max-width: 1150px) {
  .about__wrapper {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin: 0 auto;
    max-width: 900px;
    flex-wrap: wrap;
  }
  .about__item {
    width: 47%;
    margin: 0 20px 60px 0;
  }
}
@media (max-width: 1520px) {
  .about__item {
    max-width: 1200px;
  }
  .about__item_img {
    max-width: 1200px;
  }
  .formats__container {
    max-width: 1200px;
  }
}
@media (max-width: 800px) {
  .about__wrapper {
    max-width: 500px;
  }
  .about__item {
    width: 100%;
    margin-right: 0;
  }
  .about__title {
    font-size: 36px;
    margin-bottom: 30px;
  }
}
@media (max-width: 400px) {
  .about__wrapper {
    max-width: 500px;
  }
  .about__title {
    font-size: 30px;
  }
  .about__item {
    width: 100%;
    margin-right: 0;
  }
  .about__item_list-option_inner {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    margin-left: 15px;
  }
  .about__item_list-option b {
    margin-left: 0;
    text-align: start;
  }
}
</style>