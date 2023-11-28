<script>

</script>

<template>
  <section class="approach">
    <div class="wrapper">
      <div class="approach__head">
        <h2 class="approach__head-name">
          Новый подход к киберспортивному пространству </h2>
        <p>Здесь вы сможете найти турниры по игре Valorant которые мы освещаем, и узнать больше о конкретном матче.</p>
        <p>Возможность наблюдать за любыми матчами которые проходят в момент просмотра страницы, а так же узнать лучше наших спонсоров.</p>
      </div>
      <div>
        <a class="btn" href="/tournaments">Турниры</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
* {
  font-family: 'Montserrat', Arial, Verdana, sans-serif;
  box-sizing: border-box;
}
.approach {
  padding: 100px 0;
  background-color: #111;
  color: white;
}
.wrapper {
  max-width: 1240px;
  margin: 0 auto;
  text-align: center;
}
.approach__head-name {
  font-size: 48px;
  margin-bottom: 30px;
}
.wrapper p {
  font-size: 18px;
}
.wrapper p:last-child {
  margin-top: 20px;
  margin-bottom: 50px;
}
.btn {
  color: white;
  font-weight: 700;
  text-transform: uppercase;
  font-family: 'Montserrat', Arial, Verdana, sans-serif;
  cursor: pointer;
  font-size: 24px;
  background-image: url(../assets/btn-bg-red.svg);
  background-size: contain;
  background-position: center;
  padding: 14px 45px;
  text-decoration: none;
}
@media screen and (max-width: 1400px) {
  .wrapper {
    margin-left: 100px;
    margin-right: 100px;
  }
}

@media screen and (max-width: 850px) {
  .wrapper {
    margin-left: 50px;
    margin-right: 50px;
  }
  .approach__head-name {
    font-size: 32px;
  }
}
@media screen and (max-width: 550px) {
  .wrapper {
    margin-left: 20px;
    margin-right: 20px;
  }
  .approach__head-name {
    font-size: 22px;
  }
  .wrapper p {
    font-size: 16px;
  }
}
@media screen and (max-width: 320px) {
  .wrapper {
    margin-left: 10px;
    margin-right: 10px;
  }
  .approach__head-name {
    font-size: 20px;
  }
}
</style>