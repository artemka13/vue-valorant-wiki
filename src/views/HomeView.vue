<template>
  <section class="video-bg">
    <video src="../../public/videoplayback.mp4" type="video/mp4" autoplay muted loop></video>
    <div class="kvadrat"></div>
    <div class="effects"></div>
    <div class="video-bg__content">
      <p>Valorant Wiki</p>
      <p>Добро пожаловать в Википедию,
        свободную энциклопедию по игре Valorant,
        а так же освещение турниров по данной игре!</p>
      <a class="btn" href="https://playvalorant.com/ru-ru/">Играть</a>
    </div>
    <div class="scroll_down">О ValoWiki</div>
  </section>
  <Indicators/>
  <Approach/>
  <NewsList/>
  <Franchise/>
  <ReviewList/>
</template>

<script>


import Indicators from "@/components/indicators";
import Franchise from "@/components/franchise";
import TournamentsList from "@/components/tournamentsList";
import NewsList from "@/components/newsList";
import ReviewList from "@/components/reviewList.vue";
import Approach from "@/components/approach.vue"
export default {
  name: 'HomeView',
  components: {
    Indicators,
    Franchise,
    TournamentsList,
    NewsList,
    ReviewList,
    Approach
  }
}
</script>

<style scoped>
* {
  font-family: 'Montserrat', Arial, Verdana, sans-serif;
  box-sizing: border-box;
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
.video-bg {
  height: 85vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.kvadrat{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 92vh;
  object-fit: cover;
  background-color: white;
}
.video-bg video {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 92vh;
  object-fit: cover;
}
.effects {
  position: absolute;
  object-fit: cover;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 92vh;
  background-color: rgba(0,0,0,0.6);
}
.video-bg__content {
  z-index: 2;
  color: #ffffff;
  font-size: 50px;
  max-width: 620px;
  width: 100%;
}
.video-bg__content p:nth-child(1) {
  font-weight: 800;
  line-height: 1.5;
  text-transform: uppercase;
  font-size: 64px;
  margin-bottom: 30px;
}
.video-bg__content p:nth-child(2) {
  font-size: 24px;
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
  .video-bg__content p:nth-child(1) {
    font-size: 44px;
  }
  .video-bg__content p:nth-child(2) {
    font-size: 18px;
  }
}
@media (max-width: 350px) {
  .video-bg__content p:nth-child(1) {
    font-size: 32px;
  }
  .video-bg__content p:nth-child(2) {
    font-size: 16px;
  }
}
</style>