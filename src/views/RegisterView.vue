<script>
export default {
  name: 'register',
  data() {
    return {
      fio: "",
      email: "",
      password: "",
    };
  },
  methods: {
    signup() {
      const userData = {
        fio: this.fio,
        email: this.email,
        password: this.password,
      };

      this.$store.dispatch('SIGN_UP', userData)
    },
  },
}
</script>

<template>
  <section class="auth-view">
    <p class="text">СОЗДАТЬ УЧЕТНУЮ ЗАПИСЬ</p>
    <form @submit.prevent="signup">
      <h3>Регистрация</h3>

      <label for="fio">ФИО</label>
      <input type="text" placeholder="ФИО" id="fio" required v-model="fio"/>

      <label for="email">Почта</label>
      <input type="text" placeholder="Почта" id="email" required v-model="email">

      <label for="password">Пароль</label>
      <input type="password" placeholder="Пароль" id="password" required v-model="password">

      <button>Зарегистрироваться</button>
      <p class="footer">Есть аккаунт? <a href="/login">Войти</a></p>
    </form>
  </section>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
.auth-view {
  height: 100vh;
  background-image: url("../assets/viper.jpeg");
  background-size: 1900px;
}
form{
  width: 400px;
  background-color: rgba(255,255,255,0.13);
  position: absolute;
  transform: translate(-50%,-50%);
  top: 60%;
  left: 75%;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255,255,255,0.1);
  box-shadow: 0 0 40px rgba(8,7,16,0.6);
  padding: 50px 35px;
}
form *{
  font-family: 'Poppins',sans-serif;
  color: #ffffff;
  letter-spacing: 1px;
  outline: none;
  border: none;
}
form h3{
  font-size: 32px;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
}

label{
  display: block;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 500;
}
input{
  display: block;
  height: 50px;
  width: 100%;
  background-color: rgba(255,255,255,0.07);
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;
}
::placeholder{
  color: #e5e5e5;
}
button{
  margin-top: 50px;
  width: 100%;
  background-color: #ffffff;
  color: #080710;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
}
.footer {
  text-align: center;
  margin-top: 30px;
}
.footer a{
  color: #111;
  font-weight: bold;
}
.text {
  font-size: 100px;
  transform: translate(6.5em, 3em);
  max-width: 30px;
  color: white;
  font-weight: bold;
  line-height: 130px;
}
@media (max-width: 500px) {
  form {
    background: none;
    border: none;
    width: auto;
    padding: 0;
  }
  button {
    font-size: 16px;
    font-weight: 500;
  }
}
</style>