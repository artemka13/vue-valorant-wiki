<template>
  <Preloader :loading="loading" />
  <navigation/>
  <router-view/>
  <Footer/>
</template>

<script>
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Preloader from "@/components/preloader.vue"
export default {
  components: {Footer, Navigation, Preloader},
  data() {
    return {
      loading: true, // Здесь мы имитируем загрузку приложения
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 3000); // Имитируем завершение загрузки после 3 секунд
  },
  methods: {
    logout(){
      this.$store.dispatch('SIGN_OUT')
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Lato', sans-serif;
  font-family: 'Oswald', sans-serif;
  scrollbar-width: thin;
  scrollbar-color: black red;
}
*::-webkit-scrollbar {
  height: 12px;
  width: 12px;
}
*::-webkit-scrollbar-track {
  background: black;
}
*::-webkit-scrollbar-thumb {
  background-color: red;
}
body{
  background-color: #08111f;
}
</style>