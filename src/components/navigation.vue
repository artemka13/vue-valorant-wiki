<template>
  <div class="nav__menu">
    <div class="nav__links">
      <router-link to="/" v-if="this.$store.state.token" id="logo">ValoWiki</router-link>
      <ul>
        <li><router-link to="/tournaments" v-if="this.$store.state.token">Турниры</router-link></li>
        <li><router-link to="/contacts" v-if="this.$store.state.token">Контакты</router-link></li>
        <li><router-link to="/register" v-if="!this.$store.state.token">Регистрация</router-link></li>
        <li><router-link to="/login" v-if="!this.$store.state.token" >Вход</router-link></li>
        <li><router-link to="/" v-if="this.$store.state.token" @click="logout">Выход</router-link></li>
      </ul>
      <router-link to="/franchise" v-if="this.$store.state.token" class="btn">Энциклопедия по Valorant</router-link>
    </div>
  </div>

<div class="dropdown_menu">
  <input type="checkbox" id="active">
  <label for="active" class="menu-btn"><i class="fas fa-bars"></i></label>
  <div class="wrapper">
    <ul>
      <li><a v-if="this.$store.state.token" href="/">CYBER CAMP</a></li>
      <li><a v-if="this.$store.state.token" href="/tournaments">Турниры</a></li>
      <li><a v-if="this.$store.state.token" href="/franchise">Франшиза</a></li>
      <li><a v-if="this.$store.state.token" href="/contacts">Контакты</a></li>
      <li><a v-if="!this.$store.state.token" href="/register">Регистрация</a></li>
      <li><a v-if="!this.$store.state.token" href="/login">Вход</a></li>
      <li><a v-if="this.$store.state.token" @click="logout" href="/">Выход</a></li><hr/>
        <div class="mm_contacts">
          <div class="footer_contacts_top">Пишите нам:</div>
          <a class="footer_contacts_bottom" href="mailto:info@cybercamp-franchise.ru">info@cybercamp-franchise.ru</a>
        </div>

        <div class="mm_contacts">
          <div class="footer_contacts_top">Адрес:</div>
          <div class="footer_contacts_bottom">Томск, улица Яковлева, 65</div>
        </div>

        <div class="mm_contacts">
          <div class="footer_contacts_top">Телефон:</div>
          <a class="footer_contacts_bottom" href="tel:+7 123 456-78-90">+7 123 456-78-90</a>
        </div>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: "navigation",
  methods: {
    logout(){
      this.$store.dispatch('SIGN_OUT')
    },
  },
}
</script>

<style scoped>
@import url("https://use.fontawesome.com/releases/v5.15.3/css/all.css");
* {
  box-sizing: border-box;
}
.nav__menu {
  width: 100%;
  height: 80px;
  background-color: #111;
  position: relative;
  z-index: 10;
}
.nav__links {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
}
.nav__links li {
  list-style-type: none;
  display: inline-block;
}
.nav__links a:not(.btn) {
  text-decoration: none;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  font-family: 'Montserrat', Arial, Verdana, sans-serif;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-top: 5px;
}
.nav__links a:hover:not(#logo, .btn) {
  border-bottom: 2px solid rgba(227,11,15,1);
}
.dropdown_menu {
  display: none;
}
.mm_contacts {
  padding: 10px 30px;
  font-size: 20px;
  color: white;
}
.mm_contacts a {
  text-decoration: none;
  color: white;
}
hr {
  width: 1200px;
}
@media (max-width: 1000px) {
  .dropdown_menu {
    display: block;
  }
  .nav__links ul
  {
    display: none;
  }
  #logo {
    padding-left: 30px;
  }
}
@media (min-width: 350px) {
  .wrapper li:nth-child(3) {
    display: none;
  }
}
@media (max-width: 600px) {
  .nav__links {
    justify-content: start;
  }
  #logo {
    margin-right: 20px;
  }
}
@media (max-width: 370px) {
  .nav__links {
    justify-content: start;
  }
  .nav__links .btn {
    display: none;
  }
}
.wrapper{
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #000;
  clip-path: circle(25px at calc(100% - 45px) 45px);
  transition: all 0.3s ease-in-out;
  z-index: 10;
}
#active:checked ~ .wrapper{
  clip-path: circle(75%);
}
.menu-btn{
  position: fixed;
  z-index: 11;
  right: 20px;
  top: 19px;
  height: 50px;
  width: 50px;
  text-align: center;
  line-height: 50px;
  border-radius: 50%;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
#active:checked ~ .menu-btn{
  color: #fff;
}
#active:checked ~ .menu-btn i:before{
  content: "\f00d";
  font-family: "Font Awesome 5 Free";
}
.wrapper ul{
  position: absolute;
  list-style: none;
}
.wrapper ul li{
  margin: 15px 0;
}
.wrapper ul li a{
  text-decoration: none;
  font-size: 30px;
  font-weight: 500;
  padding: 5px 30px;
  color: #fff;
  border-radius: 50px;
  background: #000;
  position: relative;
  line-height: 50px;
  transition: all 0.3s ease;
}
#active {
  display: none
}
@keyframes rotate {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
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
</style>