<template>
  <section class="news-block">

    <div class="head-block">
      <h2>Последние новости</h2>
      <p>Самое актуальное</p>
    </div>

    <div class="news-list">
      <NewsCard v-for="news in newsList"
                :key="news.id"
                :title="news.title"
                :description="news.description"
                :image="news.image"
                :url="news.url" />
    </div>

  </section>
</template>

<script>

import NewsCard from "@/components/newsCard.vue";

export default {
  components: {
    NewsCard,
  },
  data() {
    return {
      newsList: [
        {
          id: 1,
          title: "Самые громкие истории получат продолжение на чемпионате",
          description: "Чемпионат VALORANT Game Changers",
          image: require("../assets/VCT23_NXTUP_GCC_banner_Textless.webp"),
          url: "#",
        },
        {
          id: 2,
          title: "Valorant, Громче",
          description: "Испытай Valorant на совершенно новой громкости",
          image: require("../assets/GCC23_Promo_thumb_Textless_opt.webp"),
          url: "#",
        },
        {
          id: 3,
          title: "Вызовы сообщества Valorant",
          description: "Мы прощаемся с 2023 годом",
          image: require("../assets/Val_Ep7_ArticleAsset_no_text.webp"),
          url: "#",
        },
        {
          id: 4,
          title: "Всё что нужно знать о чемпионате",
          description: "Не пропустите самое громкое событие этого сезона",
          image: require("../assets/GCC23_Format_Explainer_Thumb_Textless.webp"),
          url: "#",
        },
        {
          id: 5,
          title: "Список изменений патча",
          description: "Впереди изменение Deadlock",
          image: require("../assets/Val_Ep7_PatchNotes_7.10_bm2.webp"),
          url: "#",
        },
        {
          id: 6,
          title: "Анализ данных Valorant",
          description: "Клатч - все просчитано",
          image: require("../assets/Data_Drop_VCT_2023_Oct23_Article_Banner_Final_1108.webp"),
          url: "#",
        },
      ],
    };
  },
};
</script>

<style scoped>
* {
  font-family: 'Montserrat', Arial, Verdana, sans-serif;
  box-sizing: border-box;
}
.news-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1320px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 50px;

}
.news-block {
  padding: 100px 0;
  background-color: white;
}
.head-block {
  text-align: center;
}
.head-block h2 {
  margin: 0 auto 20px;
  font-size: 48px;
  text-transform: uppercase;
  font-weight: 800;
}
.head-block p {
  font-weight: 700;
  font-size: 28px;
}
@media (max-width: 400px) {
  .head-block h2 {
    font-size: 32px;
  }
  .head-block p {
    font-weight: 700;
    font-size: 20px;
  }
}
</style>