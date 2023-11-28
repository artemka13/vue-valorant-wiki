<script>
import Formats from "@/components/franchise/formats.vue";
import Numbers from "@/components/franchise/numbers.vue";
import Extention from "@/components/franchise/extention.vue"
import Crisis from "@/components/franchise/crisis.vue"
import Advantages from "@/components/franchise/advantages.vue"
import Franchise from "@/components/franchise/franchise.vue"
import Income from "@/components/franchise/income.vue"
import Help from "@/components/franchise/help.vue"

export default {
  name: "NewsView",
  components: { Formats, Numbers, Extention, Crisis, Advantages, Franchise, Income, Help},
}
</script>

<template>
  <section class="franchise-bg">
  <div class="main__content">
    <div class="container">
      <p class="main__sub-title">
        Узнай об игре больше с
      </p>
      <h1 class="main__title">
        ValoWiki
      </h1>
      <ul class="main__advantages-list">
        <li class="main__advantages-list__item">
          Ты узнаешь <span>сколько агентов</span> есть в игре на данный момент
        </li>
        <li class="main__advantages-list__item">
          Познакомишься с некоторыми <span>картами</span> в этом шутере
        </li>
        <li class="main__advantages-list__item">
          И так же узнаешь еще <span>море</span> разной информации
        </li>
      </ul>
      <p class="main__paragraph">
        Хочешь попробовать себя в динамических матчах этой игры?
      </p>
      <p class="footer__paragraph">
        Тогда присоединяйся к нам! Мы ждем тебя!
      </p>
      <a class="btn" href="https://playvalorant.com/ru-ru/">Скачать игру</a>
    </div>
  </div>
  </section>
  <Formats/>
  <Numbers/>
  <Extention/>
  <Crisis/>
  <Advantages/>
  <Franchise/>
  <Income/>
  <Help/>
</template>

<style scoped>

* {
  font-family: 'Montserrat', Arial, Verdana, sans-serif;
  box-sizing: border-box;
}
.franchise-bg {
  background: url(../assets/donat.jpg);
  padding: 100px 0;
  background-repeat: no-repeat;
  background-size: cover;
  height: 92vh;
}
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
.main__sub-title {
  font-size: 30px;
  line-height: 1.37;
  color: white;
}
.main__title {
  font-size: 70px;
  margin-bottom: 30px;
  line-height: 1.37;
  color: white;
}
.main__advantages-list {
  margin-bottom: 25px;
  list-style: none;
}
.main__advantages-list__item {
  position: relative;
  font-size: 20px;
  margin-bottom: 12px;
  font-weight: 600;
  padding-left: 30px;
  color: white;
}
.main__advantages-list__item::before {
  content: url(../assets/list-tripline.svg);
  position: absolute;
  top: 50%;
  left: 0;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.main__advantages-list__item span {
  color: #e30f13;
}
.main__paragraph {
  font-size: 18px;
  font-weight: 500;
  line-height: 1.3;
  width: 100%;
  max-width: 620px;
  color: white;
}
.footer__paragraph {
  font-size: 18px;
  font-weight: 500;
  line-height: 1.3;
  width: 100%;
  max-width: 620px;
  color: white;
  margin-bottom: 55px;
}
.container .btn {
  color: white;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  font-family: 'Montserrat', Arial, Verdana, sans-serif;
  cursor: pointer;
  background-image: url(../assets/btn-bg-red.svg);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  padding: 25px 30px;
  text-decoration: none;
}
@media (max-width: 900px) {
  .main__title {
    font-size: 48px;
  }
}
@media (max-width: 450px) {
  .main__title {
    font-size: 34px;
  }
  .main__sub-title {
    font-size: 24px;
  }
}
@media (max-width: 350px) {
  .main__title {
    font-size: 28px;
  }
  .container .btn {
    font-size: 16px;
    padding: 25px 20px;
  }
  .main__paragraph, .footer__paragraph {
    font-size: 16px;
  }
  .main__advantages-list__item {
    font-size: 16px;
  }
}
</style>