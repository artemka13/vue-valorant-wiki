<template>
  <section class="footer-block">
    <div class="wrapper">
      <div class="footer__part">
        <p class="footer__coop">
          <b>
            © ValoWiki </b>
        </p>
        <div class="footer__center">
          <div class="soc">
            <a href="https://www.youtube.com/@valorant" title="YouTube" class="soc-link fs_yt"></a>

            <a href="https://t.me/miarevanayw" title="Telegram" class="soc-link fs_tg"></a>

            <a href="https://vk.com/valorant" title="VK" class="soc-link fs_vk"></a>
          </div>
          <p class="footer__email">
            <a class="link" href="mailto:info@cybercamp-franchise.ru">
              © ValoWiki, INC., 2023. ВСЕ ПРАВА СОХРАНЕНЫ.</a>
          </p>
        </div>
        <p class="footer__web">
        </p><p><b>Сайт принадлежит — <a href="https://vk.com/valorant" target="_blank"><span>Valorant</span></a></b></p>
        <p></p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "footer"
}
</script>

<style scoped>
* {
  font-family: 'Montserrat', Arial, Verdana, sans-serif;
  box-sizing: border-box;
}
.footer-block {
  background-color: #111;
  padding: 50px 0 50px;
  color: white;
}
.wrapper {
  width: 100%;
  max-width: 1670px;
  padding: 0 50px;
  margin: 0 auto;
}
.footer__part {
  justify-content: space-between;
}
.footer__center, .footer__part {
  display: flex;
  align-items: center;
}
.footer__email {
  margin-left: 75px;
}
.soc {
  display: flex;
  align-items: center;
}
.soc-link {
  display: block;
  width: 24px;
  height: 24px;
  margin: 0 12px;
  position: relative;
}
a {
  text-decoration: none;
  color: white;
}
.footer__center .soc .fs_yt {
  background-image: url("../assets/icon-soc-yt.svg");
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
}
.footer__center .soc .fs_tg {
  background-image: url("../assets/icon-soc-tg.svg");
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
}
.footer__center .soc .fs_vk {
  background-image: url("../assets/icon-soc-vk.svg");
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
}
@media screen and (max-width: 1200px) {
  .footer__center, .footer__part {
    display: block;
    text-align: center;
  }
  .footer__coop {
    margin-bottom: 35px;
  }
  .footer__web {
    margin-top: 35px;
  }
  .soc {
    justify-content: center;
  }
  .footer__email {
    margin-left: 0;
    margin-top: 35px;
  }
}
</style>