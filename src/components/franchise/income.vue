<script>

</script>

<template>
  <section class="income">
    <div class="income__container">
      <h2 class="income__title">
        Какие режимы можно поиграть в Valorant?
      </h2>
      <div class="income__content">
        <ul class="income__list">
          <h3 class="income__club-name">
            Активные режимы
          </h3>
          <li class="income__list-item">
						<span class="income__list-item_name">
							Без рейтинга
						</span>
            <strong class="income__list-item_value">5x5</strong>
          </li>
          <li class="income__list-item">
						<span class="income__list-item_name">
							Рейтинговая игра
						</span>
            <strong class="income__list-item_value">5x5</strong>
          </li>
          <li class="income__list-item">
						<span class="income__list-item_name">
							Быстрая игра
						</span>
            <strong class="income__list-item_value">5x5</strong>
          </li>
          <li class="income__list-item">
						<span class="income__list-item_name">
							Эскалация
						</span>
            <strong class="income__list-item_value">5x5</strong>
          </li>
          <li class="income__list-item">
						<span class="income__list-item_name">
							Премьер режим
						</span>
            <strong class="income__list-item_value">5x5</strong>
          </li>
          <li class="income__list-item">
						<span class="income__list-item_name">
							Бой насмерть
						</span>
            <strong class="income__list-item_value">1x9</strong>
          </li>
        </ul>
        <div class="income__right-column">
         <img src="../../assets/VALORANT-Win64-Shipping_aef7Y94HhF.jpg" alt="gaming-place" class="income__image">
          <div class="income__result">
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
.income {
  padding: 100px 0;
  background: white;
}
.income__container {
  width: 100%;
  max-width: 1530px;
  margin: 0 auto;
  padding: 0 20px;
}
.income__title {
  font-size: 62.5px;
  line-height: 1.2;
}
.income__content {
  margin-top: 40px;
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
.income__list {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  max-width: 830px;
  margin-right: 50px;
}
ul {
  list-style: none;
}
.income__club-name {
  color: #1d1d1b;
  font-size: 30px;
  line-height: 1.3;
  font-weight: 400;
  margin-bottom: 30px;
}
.income__list-item {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding-left: 30px;
  margin-bottom: 20px;
}
.income__list-item::before {
  position: absolute;
  content: url(../../assets/list-tripline.svg);
  left: 0;
  top: 5px;
}
.income__list-item_name {
  color: #1d1d1b;
  font-size: 25px;
  font-weight: 400;
  max-width: 460px;
}
.income__list-item_value {
  color: #e30f13;
  font-size: 25px;
  font-weight: 700;
  min-width: 170px;
  margin-left: 10px;
  text-align: end;
}
.income__right-column {
  width: 100%;
  max-width: 500px;
}
img {
  max-width: 100%;
}
.income__result-item {
  font-size: 20px;
  line-height: 1.3;
}
.income__result_key {
  color: #1d1d1b;
  font-weight: 400;
}
.income__result_value {
  color: #e30f13;
  font-weight: 700;
}
@media (max-width: 1400px) {
  .income__right-column {
    max-width: 400px;
  }
  .income__list-item_name {
    font-size: 20px;
  }
  .income__list-item_value {
    font-size: 20px;
  }
  .income__club-name {
    font-size: 24px;
  }
  .income__title {
    font-size: 50px;
  }
}
@media (max-width: 1200px) {
  .income__container {
    max-width: 1200px;
  }
}
@media (max-width: 1050px) {
  .income__title {
    font-size: 40px;
  }
  .income__content {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
  .income__right-column {
    max-width: none;
    margin-top: 50px;
  }
  .income__list {
    margin-right: 0;
  }
}
@media (max-width: 700px) {
  .income__title {
    font-size: 40px;
  }
}
@media (max-width: 650px) {
  .income__list-item {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  .income__list-item_value {
    margin-left: 0;
    text-align: start;
  }
}
@media (max-width: 500px) {
  .income__title {
    font-size: 30px;
  }
}
@media (max-width: 360px) {
  .income__title {
    font-size: 25px;
  }
}
</style>