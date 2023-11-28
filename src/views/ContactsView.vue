<template>
<section class="contacts-bg">
<h1 class="container__title">Контакты</h1>
  <div class="contacts">
    <div class="item item--50">
        <div class="contacts__block contacts__block--clip-t-l">
          <div class="contacts__desc">
            <h3 class="contacts__name">
              Обратная связь </h3>
            <p class="contacts__text">
              Если вы хотите связаться с нами </p>
          </div>
          <div class="contacts__bottom">
            <a class="btn" data-link="write-us" href="#" @click="openModal">
              Написать
            </a>

          </div>
        </div>
    </div>
    <div class="item item--50">
      <div class="contacts__block contacts__block--clip-b-r">
        <div class="contacts__desc">
          <h3 class="contacts__name">
            Управляющая компания ValoWiki </h3>
          <p class="contacts__text">
            Томск, проспект Ленина, 60/1 </p>
        </div>
        <div class="contacts__bottom">
          <div class="contacts__bottom-line">
            <div class="contacts__bottom-phone">
              <a class="link link-bold link--large" href="tel:+7 783 299-46-02">
                +7 783 299-46-02 </a>
            </div>
            <div class="contact__bottom-email">
              <a class="link" href="mailto:help@valowiki.ru">
                help@valowiki.ru </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="item">
      <div class="contacts__block contacts__block--clip-l-b">
        <div class="contacts__desc">
          <h3 class="contacts__name">
            Рекламодателям </h3>
          <p class="contacts__text">
            Размещение рекламы на нашем сайте </p>
        </div>
        <div class="contacts__bottom">
          <object>
            <div class="contacts__bottom-phone">
              <a class="link link-bold" href="tel:+7 783 299-46-02">
                +7 783 299-46-02 </a>
            </div>
            <div class="contact__bottom-email">
              <a class="link" href="mailto:marketing@valowiki.ru">
                marketing@valowiki.ru </a>
            </div>
          </object>
        </div>
      </div>
    </div>
    <div class="item">
      <router-link to="/tournaments" class="contacts__block contacts__block--clip-t-l">
        <div class="contacts__desc">
          <h3 class="contacts__name">
            Список турниров </h3>
        </div>
        <div class="contacts__bottom">
          <div class="btn">
            Найти
          </div>
        </div>
      </router-link>
    </div>
    <div class="item">
      <a class="contacts__block contacts__block--clip-t-r" href="#">
        <div class="contacts__desc">
          <h3 class="contacts__name">
            Франшиза </h3>
          <p class="contacts__text">
            Узнайте подробные условия открытия своей кибер арены </p>
        </div>
        <div class="contacts__bottom">
          <object>
            <div class="contacts__bottom-phone">
              <a class="link link-bold" href="tel:+7 783 299-46-02">
                +7 783 299-46-02 </a>
            </div>
            <div class="contact__bottom-email">
              <a class="link" href="mailto:help@valowiki.ru">
                help@valowiki.ru </a>
            </div>
          </object>
        </div>
      </a>
    </div>
  </div>
</section>
    <Map/>
  <div class="review-modal" v-if="isModalOpen">
    <div class="review-content">
      <h2>Заказать звонок</h2>
      <p>Заполните форму, и мы с вами обязательно свяжемся в ближайшее время!</p>
      <form @submit.prevent="submitReview">
        <input type="text" placeholder="Имя" />
        <input class="phone" name="tel" placeholder="+7 (___) ___-__-__" type="tel" required="" />
        <button type="submit">Отправить</button>
      </form>
      <button class="close-button" @click="closeModal">&times;</button>
    </div>
  </div>
  <transition name="fade">
    <div v-show="showPopup" class="popup">
      <span class="close" @click="closePopup">&times;</span>
      <p>Спасибо за ваш звонок!</p>
    </div>
  </transition>
</template>

<script>
import Map from "@/components/map";

export default {
  name: "ContactsView",
  components: { Map },
  data() {
    return {
      isModalOpen: false,
      showPopup: false,
    }
  },
  mounted() {
    ymaps.ready().then(() => {
      this.map = new ymaps.Map('map-test', {
        center: [56.479749, 84.948718],
        zoom: 17
      });

      this.map.controls.remove('geolocationControl'); // удаляем геолокацию
      this.map.controls.remove('searchControl'); // удаляем поиск
      this.map.controls.remove('trafficControl'); // удаляем контроль трафика
      this.map.controls.remove('typeSelector'); // удаляем тип
      this.map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
      // this.map.controls.remove('zoomControl'); // удаляем контрол зуммирования
      this.map.controls.remove('rulerControl'); // удаляем контроль правил
      // this.map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

      let placemark = createPlacemark([56.479749, 84.948718], '', '', '');
      this.map.geoObjects.add(placemark);
    });

    function createPlacemark(coords,title,body,footer){
      return new ymaps.Placemark(coords, { balloonContentHeader: title, balloonContentBody: body, balloonContentFooter: footer}, {
        iconLayout: 'default#image',
        iconImageHref: require('../assets/free-icon-location-pin-8637632.png'),
        iconImageSize: [40, 40],
        iconImageOffset: [-19, -44]
      });
    }
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    submitReview() {
      this.isModalOpen = false;
      this.showPopup = true;
      setTimeout(() => {
        this.showPopup = false;
      }, 5000);
    },
    closePopup() {
      this.showPopup = false;
    }
  }
}
</script>

<style scoped>
* {
  font-family: 'Montserrat', Arial, Verdana, sans-serif;
  box-sizing: border-box;
}

.contacts-bg {
  max-width: 1240px;
  width: 100%;
  padding: 0 50px;
  margin: 0 auto;
}
.contacts {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
}
.item {
  padding: 0 10px;
  width: 33.33333%;
  margin-bottom: 20px;
}
.item--50 {
  width: 50%;
}
.item--50 .contacts__block {
  min-height: 290px;
}
.contacts__block {
  background-color: white;
  min-height: 250px;
  height: 100%;
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  color: #212121;
}
.contacts__desc {
  margin-bottom: 20px;
}
.contacts__name {
  margin: 0 0 18px;
}
.contacts__bottom {
  margin-top: auto;
}
.contacts__bottom-line {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.contacts__bottom .link {
  margin-top: 5px;
  display: inline-block;
  font-size: 1.125rem;
  color: #212121;
}
.contacts__bottom .link--large {
  font-size: 1.5rem;
}
.container__title {
  font-size: 48px;
  text-transform: uppercase;
  font-weight: 800;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
  color: white;
}
h3, h4 {
  font-size: 1.875rem;
  line-height: 120%;
}
ol li, p, ul li {
  font-size: 1.125rem;
  line-height: 140%;
  margin: 18px 0;
}
a {
  text-decoration: none;
}
.link-bold {
  font-weight: 700;
  font-size: 1.5rem;
}
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.125rem;
  cursor: pointer;
  background-image: url(../assets/btn-bg-red.svg);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  padding: 10px 50px;
}
.contacts__block--clip-t-l {
  -webkit-clip-path: polygon(10% 0,100% 0,100% 100%,0 100%,0 14%);
  clip-path: polygon(10% 0,100% 0,100% 100%,0 100%,0 14%);
}
.contacts__block--clip-b-r {
  -webkit-clip-path: polygon(0 0,100% 0,100% 90%,94.5% 100%,0 100%);
  clip-path: polygon(0 0,100% 0,100% 90%,94.5% 100%,0 100%);
}
.contacts__block--clip-l-b {
  -webkit-clip-path: polygon(0 0,100% 0,100% 100%,100% 100%,9% 100%,0 89%);
  clip-path: polygon(0 0,100% 0,100% 100%,100% 100%,9% 100%,0 89%);
}
.contacts__block--clip-t-r {
  -webkit-clip-path: polygon(92% 0,100% 11%,100% 100%,100% 100%,0 100%,0 0);
  clip-path: polygon(92% 0,100% 11%,100% 100%,100% 100%,0 100%,0 0);
}
.review-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.review-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  position: relative;
  width: 360px;
}

.review-content h2 {
  margin-top: 0;
  text-align: center;
}
.review-content p {
  text-align: center;
  font-size: 13px;
}

.review-content form {
  display: flex;
  flex-direction: column;
}

.review-content input,
.review-content .phone {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
  font-size: 16px;
}

.review-content button[type='submit'] {
  padding: 10px;
  border: none;
  background-color: red;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background-color: transparent;
  font-size: 28px;
  cursor: pointer;
  z-index: 1;
}
@media screen and (max-width: 1300px) {
  .contacts__name {
    font-size: 1.1775rem;
  }
}
@media screen and (max-width: 1150px) {
  .contacts__bottom-line {
    display: block;
  }
}
@media screen and (max-width: 1050px) {
    .contacts__block {
      padding: 30px 25px;
      min-height: 180px;
    }
}
@media screen and (max-width: 1050px) {
  .item {
    width: 100%;
  }
  .item .contacts__block {
    min-height: 180px;
    clip-path: none;
  }
}
@media screen and (max-width: 600px) {
  .container__title {
    font-size: 24px;
  }
  .contacts-bg {
    padding: 0 20px;
  }
}
@media screen and (max-width: 400px) {
  .btn {
    font-size: 1rem;
    padding: 10px 30px;
  }
  .contacts__name {
    font-size: 1rem;
  }
  .link-bold {
    font-weight: 700;
  }
  .contacts__bottom .link {
    font-size: 0.8rem;
  }
}
.popup {
  position: fixed;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 20px;
  z-index: 1000;
}

.popup .close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 24px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
