<template>
  <section class="franchise-block">
    <div class="head-block">
      <h2>ValoWiki</h2>
      <p>Энциклопедия по Valorant</p>
    </div>

    <div class="footer-block">
      <ul class="list">
        <li>Valorant — новый проект компании <span class="text-red-bold">Riot Games</span></li>
        <li>Это онлайн-шутер от <span class="text-red-bold">первого лица</span></li>
        <li><span class="text-red-bold">23 агента </span>с уникальными способностями</li>
      </ul>
      <p>Действие Valorant происходит в мире близкого будущего с аугментациями и магией.</p>
      <p>Одна должна заминировать точку, вторая - ее защитить.</p>
      <div class="btn-block">
        <a class="btn" href="/franchise">Подробнее</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "franchise"
}
</script>

<style scoped>
* {
  font-family: 'Montserrat', Arial, Verdana, sans-serif;
  box-sizing: border-box;
}
.franchise-block {
  padding: 100px 0;
  background-color: #111;
  background-image: url("../assets/07d1b5bd23bd5a2d84cb3666a69a8369.png");
  background-position: center;
}
.head-block {
  text-align: center;
}
h2 {
  margin: 0 auto 20px;
  font-size: 48px;
  text-transform: uppercase;
  font-weight: 800;
  color: white;
}
.head-block p {
  font-weight: 700;
  font-size: 28px;
  color: white;
}
.footer-block {
  margin-left: 200px;
  margin-right: 200px;
  margin-top: 50px;
}
.list {
  color: white;
  list-style: square url(../assets/list-tripline.svg) inside;
  margin-bottom: 40px;
  font-size: 18px;
}
.list li {
  margin-bottom: 10px;
  font-weight: bold;
}
.text-red-bold {
  color: red;
}
.footer-block p {
  color: white;
  margin-bottom: 20px;
  font-size: 18px;
}
.btn-block {
  margin-top: 40px;
}
.btn {
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  font-family: 'Montserrat', Arial, Verdana, sans-serif;
  cursor: pointer;
  background-image: url(../assets/btn-bg-red.svg);
  background-size: contain;
  background-position: center;
  padding: 10px 25px;
  text-decoration: none;
}
@media (max-width: 800px) {
  .footer-block {
    margin-left: 20px;
    margin-right: 20px;
  }
}
@media (max-width: 400px) {
  h2 {
    font-size: 32px;
  }
  .head-block p {
    font-weight: 700;
    font-size: 20px;
  }
}
</style>