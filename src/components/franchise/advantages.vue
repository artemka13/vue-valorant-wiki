<script>

</script>

<template>
  <section class="advantages" id="advantages">
    <div class="advantages__container">
      <h2 class="advantages__title">
        Агенты и их особенности
      </h2>
      <p class="advantages__sub-title">
        Уникальные способности персонажей превращают банальную перестрелку в красивое сражение с непредсказуемыми поворотами.
      </p>
      <div class="advantages__wrapper">
        <div class="advantages__item">
          <div class="advantages__item_image-wrapper">
          <img src="../../assets/0faab58ebc7363c7db96d7b9d3d79539.jpeg" alt="economy" class="advantages__item_image">
          </div>
          <div class="advantages__item_text-block">
            <h3 class="advantages__item_title">
              Дуэлянты
            </h3>
            <p class="advantages__item_text">
              Дуэлянты — самодостаточные убийцы, от которых товарищи по команде ожидают высокой результативности и агрессивной игры. <br>
              Добиться в этом успеха им помогают их умения и навыки. <br> (Phoenix, Jett, Reyna, Raze, Yoru, Neon, Iso)
            </p>
          </div>
        </div>
        <div class="advantages__item">
          <div class="advantages__item_image-wrapper">
            <img src="../../assets/-ZLdFOLQkMU.jpg" alt="education" class="advantages__item_image">
          </div>
          <div class="advantages__item_text-block">
            <h3 class="advantages__item_title">
              Зачинщики
            </h3>
            <p class="advantages__item_text">
              Зачинщики отрабатывают опасные углы, проводя таким образом подготовку для захвата территории командой и оттесняя обороняющихся.
            </p>
            <p class="advantages__item_text">
              (Sova, Breach, Skye, KAY/O, Fade, Gekko)
            </p>
          </div>
        </div>
        <div class="advantages__item">
          <div class="advantages__item_image-wrapper">
           <img src="../../assets/viper.jpg" alt="income" class="advantages__item_image">
          </div>
          <div class="advantages__item_text-block">
            <h3 class="advantages__item_title">
              Специалисты
            </h3>
            <p class="advantages__item_text">
              Специалисты по контролю мастерски справляются с угрозами на местности, чтобы обеспечить команде победу. <br>
              (Brimstone, Viper, Omen, Astra, Harbor)
            </p>
          </div>
        </div>
        <div class="advantages__item">
          <div class="advantages__item_image-wrapper">
            <img src="../../assets/chamber.jpg" alt="club-opening" class="advantages__item_image">
          </div>
          <div class="advantages__item_text-block">
            <h3 class="advantages__item_title">
              Стражи
            </h3>
            <p class="advantages__item_text">
              Стражи — эксперты по обороне, способные обеспечить защиту участников на поле боя и флангов как в защите, так и в нападении. <br>
              (Killjoy, Cypher, Sage, Chamber, Deadlock)
            </p>
          </div>
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
.advantages {
  padding: 100px 0;
  color: black;
  background-color: white;
}
.advantages__container {
  width: 100%;
  max-width: 1530px;
  margin: 0 auto;
  padding: 0 20px;
}
.advantages__title {
  font-size: 62.5px;
  line-height: 1.23;
  margin-bottom: 10px;
}
.advantages__sub-title {
  font-size: 24px;
  line-height: 1.3;
}
.advantages__wrapper {
  margin-top: 90px;
}
.advantages__item {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 25px 0;
  border-top: 2px solid #1875ff;
}
.advantages__item_text:last-child {
  margin-bottom: 0;
}
.advantages__item_image-wrapper {
  width: 100%;
  max-width: 500px;
  min-width: 300px;
}
img {
  max-width: 100%;
}
.advantages__item:nth-child(2n+1) .advantages__item_text-block {
  margin-left: 35px;
}
.advantages__item_text-block {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  max-width: 760px;
}
.advantages__item_title {
  font-size: 24px;
  line-height: 1.2;
  margin-bottom: 20px;
}
.advantages__item_text:last-child {
  margin-bottom: 0;
}
.advantages__item_text {
  font-size: 18px;
  line-height: 1.3;
  margin-bottom: 40px;
  color: #1d1d1b;
}
.advantages__item:nth-child(2n) {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
}
@media (max-width: 1400px) {
  .advantages__title {
    font-size: 50px;
  }
}
@media (max-width: 1050px) {
  .advantages__item_text-block {
    max-width: 500px;
  }
  .advantages__item_title {
    font-size: 22px;
  }
  .advantages__item_text {
    font-size: 16px;
    margin-bottom: 20px;
  }
  .advantages__sub-title {
    font-size: 20px;
  }
  .advantages__item_title {
    font-size: 22px;
  }
  .advantages__item_text {
    font-size: 16px;
  }
}
@media (max-width: 1440px) {
  .advantages__item_image-wrapper {
    width: 100%;
    max-width: 360px;
    min-width: 300px;
  }
}
@media (max-width: 750px) {
  .advantages__item:nth-child(2n+1) .advantages__item_text-block {
    margin-left: 20px;
  }
}
@media (max-width: 1200px) {
  .advantages__item:nth-child(2n+2) .advantages__item_text-block {
    margin-right: 20px;
  }
}
@media (max-width: 700px) {
  .advantages__item:nth-child(1n) {
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse;
    padding-bottom: 40px;
  }
  .advantages__item:nth-child(1n) .advantages__item_text-block {
    margin: 0 0 30px;
    max-width: 450px;
  }
  .advantages__item_image-wrapper {
    max-width: 450px;
    min-width: auto;
  }
}
@media (max-width: 1200px)
.advantages__container {
  max-width: 1200px;
}
@media (max-width: 800px) {
  .advantages__title {
    font-size: 40px;
  }
}
@media (max-width: 650px) {
  .advantages__title {
    font-size: 30px;
  }
  .advantages__sub-title {
    font-size: 18px;
  }
}
@media (max-width: 360px) {
  .advantages__title {
    font-size: 22px;
  }
  .advantages__sub-title {
    font-size: 16px;
  }
}
</style>