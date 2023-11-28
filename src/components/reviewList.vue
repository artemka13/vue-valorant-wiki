<template>
<!--  <div class="container">-->
<!--    <review-card v-for="review in reviews"-->
<!--                 :key="review.id"-->
<!--                 :name="review.name"-->
<!--                 :review="review.comment"/>-->
<!--  </div>-->
  <section class="review-block" v-if="reviews.length > 0">
    <div class="head-block">
      <h1>Отзывы</h1>
    </div>
    <ul class="gallery">
      <li>
        <review-card
            :key="reviews.id"
            :name="reviews[0].name"
            :review="reviews[0].comment"/>
      </li>
      <li>
        <review-card
            :key="reviews.id"
            :name="reviews[1].name"
            :review="reviews[1].comment"/>
      </li>
      <li>
        <review-card
            :key="reviews.id"
            :name="reviews[2].name"
            :review="reviews[2].comment"/>
      </li>
      <li>
        <review-card
            :key="reviews.id"
            :name="reviews[3].name"
            :review="reviews[3].comment"/>
      </li>
      <li>
        <review-card
            :key="reviews.id"
            :name="reviews[4].name"
            :review="reviews[4].comment"/>
      </li>
    </ul>
  </section>
</template>

<script>
import ReviewCard from "@/components/reviewCard";
export default {
  name: "reviewList",
  components: {
    'review-card': ReviewCard,
  },
  mounted() {
    const slider = document.querySelector('.gallery');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', e => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', _ => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', _ => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', e => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const SCROLL_SPEED = 3;
      const walk = (x - startX) * SCROLL_SPEED;
      slider.scrollLeft = scrollLeft - walk;
    });


  },
  data() {
    return {
      reviews: [
        {
          id: 1,
          name: 'Евгений',
          comment: 'Валорант имеет ряд преимуществ а также недостатков. Например минусы: Очень много крысерских позиций, в следствии чего появляется куча крыс в игре, которые только ждут тебя убить за углом.',
        },
        {
          id: 2,
          name: 'Алексей',
          comment: 'Приветствую! Валорант, новая игра от Riot games создателей популярной МОБА League of legends. В данный момент игру можно получить привязав свой аккаунт Riot к Twitch, и просмотрев более двух часов стримов по Валоранту. Доступ выдаётся случайным образом.',
        },
        {
          id: 3,
          name: 'Богдан',
          comment: 'Всем привет, решил поделиться своим мнением по поводу данной игры:) Тактический шутер в привычном киберспортивном режиме 5х5 только у вас теперь не только оружие в руках, так еще и способности с ультимейтом:D Ух, жарким запахло.',
        },
        {
          id: 4,
          name: 'Владислав',
          comment: 'Имхо очень похожа на кс 1.6. Разнообразие геймплея т.к. имеются различные персонажи с разными умениями. Регулярные обновления Новая кибер дисциплина (возможность новым и старым игрокам в шутеры пробиться кибер спорт)',
        },
        {
          id: 5,
          name: 'Ярослав',
          comment: 'Валорант имеет интересный дизайн, хорошее представление о том, что могут быть шутеры, и очень даже хорошая система матчей для шутера, как конкуренция для csgo!',
        },
      ],
    };
  },
}
</script>

<style scoped>
* {
  font-family: 'Montserrat', Arial, Verdana, sans-serif;
  box-sizing: border-box;
}
.review-block {
  padding: 100px 0;
  background-color: white;
}
.head-block {
  text-align: center;
  color: black;
}
.head-block h1 {
  margin: 0 auto 20px;
  font-size: 48px;
  text-transform: uppercase;
  font-weight: 800;
}
.gallery {
  display: grid;
  grid-template-columns: repeat(5, 100vw);
  grid-template-rows: 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  overflow: scroll;
  overflow-y: hidden;
  scroll-snap-type: both mandatory;
  scroll-padding: 1rem;
}

.active {
  scroll-snap-type: unset;
}

li {
  scroll-snap-align: center;
  display: inline-block;
  border-radius: 3px;
  font-size: 0;
}
@media (max-width: 950px) {
  .head-block h1 {
    font-size: 36px;
  }
}
</style>