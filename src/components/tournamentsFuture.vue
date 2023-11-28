<template>
  <section class="franchise-block">
    <div class="footer-block">
      <ul class="list">
        <li>Турнир позволяет игрокам собрать полноценную команду и присоединиться к дивизиону, где они будут соревноваться в течение сезона.</li>
        <li>Помимо классических турниров, <span class="text-red-bold">проводятся и тематические</span>.</li>
        <li>По игре Valorant проведено уже более 200 LAN турниров и более 50 онлайн мероприятий разного уровня игроков. Так что на встречах команд никогда не бывает скучно!</li>
        <li>Регламенты организаторов <span class="text-red-bold">соответствуют современным стандартам</span>.</li>
      </ul>
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
  background-color: #020213;
}
.footer-block {
  margin-left: 200px;
  margin-right: 200px;
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
@media (max-width: 800px) {
  .footer-block {
    margin-left: 20px;
    margin-right: 20px;
  }
}
</style>