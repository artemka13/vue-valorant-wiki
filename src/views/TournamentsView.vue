<template>
  <section class="tournaments-bg">
      <div class="video-bg__content">
        <p>Турниры</p>
        <a class="btn" href="tel:+7 783 299-46-02">Записаться</a>
      </div>
      <div class="scroll_down">Расписание турниров</div>
  </section>
  <TournamentsList/>
  <TournamentsFuture/>
</template>

<script>
import TournamentsList from "@/components/tournamentsList.vue";
import TournamentsFuture from "@/components/tournamentsFuture.vue";

export default {
  name: "TournamentsView",
  components: {TournamentsList, TournamentsFuture}
}
</script>

<style scoped>
* {
  font-family: 'Montserrat', Arial, Verdana, sans-serif;
  box-sizing: border-box;
}
.tournaments-bg {
  background-image: url(../assets/325d16b9e76c1e55b3ff980491ce8cb2.jpg);
  overflow: hidden;
  background-position: center top;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  height: 92vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.video-bg__content {
  z-index: 2;
  color: #ffffff;
  font-size: 50px;
  max-width: 620px;
  width: 100%;
}
.video-bg__content p {
  font-weight: 800;
  line-height: 1.5;
  text-transform: uppercase;
  font-size: 64px;
  margin-bottom: 30px;
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
  padding: 10px 18px;
  text-decoration: none;
}
@media (max-width: 700px) {
  .video-bg__content {
    text-align: center;
    margin-left: 10px;
    margin-right: 10px;
  }
  .video-bg__content p {
    font-size: 34px;
  }
}
@media (max-width: 350px) {
  .btn {
    font-size: 18px;
  }
}
.scroll_down {
  position: absolute;
  z-index: 6;
  text-align: center;
  font-size: 26px;
  font-weight: 800;
  color: white;
  top: 82%;
}
.scroll_down:after {
  content: '';
  width: 20px;
  height: 38px;
  background-image: url(../assets/icon-arrow-down.svg);
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  left: 50%;
  margin-left: -10px;
  top: 100%;
  margin-top: 15px;
  animation: scroll_down  1s infinite ease-in-out;
}

@keyframes scroll_down {
  from {margin-top: 10px; opacity: 0.6;}
  50% {margin-top: 30px; opacity: 1;}
  to {margin-top: 10px; opacity: 0.6;}
}
</style>