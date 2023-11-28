<template>
  <section class="indicators-block">
    <div class="head-block">
      <h2>ValoWiki сегодня</h2>
      <p>Энциклопедия по Valorant</p>
    </div>

    <div class="footer-block">
      <div class="digit-block">
        <div class="digit">
          <h1>№1</h1>
          <p>Новостной сайт</p>
        </div>
        <div class="digit arrow">
          <img src="../assets/right-arrow-svgrepo-com.svg" alt="arrow">
        </div>
        <div class="digit">
          <h1>100 000</h1>
          <p>Постоянных посетителей</p>
        </div>
        <div class="digit arrow">
          <img src="../assets/right-arrow-svgrepo-com.svg" alt="arrow">
        </div>
        <div class="digit">
          <h1>250 000</h1>
          <p>Посетителей в месяц</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "indicators"
}
</script>

<style scoped>
* {
  font-family: 'Montserrat', Arial, Verdana, sans-serif;
  box-sizing: border-box;
}
.indicators-block {
  padding: 100px 0;
  background-color: white;
}
.head-block {
  text-align: center;
}
h2 {
  margin: 0 auto 20px;
  font-size: 48px;
  text-transform: uppercase;
  font-weight: 800;
}
.head-block p {
  font-weight: 700;
  font-size: 28px;
}
.footer-block {
  margin-top: 50px;
}
.digit-block {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 100px;
}
.digit {
  text-align: center;
}
.arrow img{
  width: 100px;
  height: 100px;
  margin-top: 10px;
}
.digit h1 {
  font-size: 96px;
}
.digit p {
  color: red;
}
@media (max-width: 1200px) {
  .digit h1 {
    font-size: 64px;
  }
  h2 {
    font-size: 32px;
  }
  .head-block p {
    font-weight: 700;
    font-size: 20px;
  }
  .arrow img {
    width: 70px;
    height: 70px;
  }
}
@media (max-width: 900px) {
  .digit-block {
    display: block;
  }
  .arrow img {
    padding: 10px 0;
    transform: rotate(90deg);
  }
  .digit-block {
    padding: 0 50px;
  }
}
</style>