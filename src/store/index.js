import { createStore } from 'vuex'
import axios from "axios";
import router from "@/router";

export default createStore({
  state: {
    token: localStorage.getItem('token'),
    type_token: 'Bearer ',
    API: 'https://jurapro.bhuser.ru/api-shop/',
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  mutations: {
    AUTH_SUCCESS: (state, token) => {
      state.token = token;
    },
    AUTH_ERROR: (state) => {
      state.token = '';
    },
  },
  actions: {
    async SIGN_IN({commit}, user) {
      try {
        await axios.post(this.state.API + 'login', user).then((response) => {
          this.state.token = response.data.data.user_token
          localStorage.setItem('token', this.state.token)
          axios.defaults.headers = {Authorisation: this.state.type_token + this.state.token}
          router.push('/')
        })
      } catch (error) {
        commit('auth_error');
        localStorage.removeItem('token');
      }
    },
    async SIGN_UP({commit}, user) { // кэтчим ошибку если регистрация неверная
      try {
        await axios.post(this.state.API + 'signup', user).then((response) => {
          this.state.token = response.data.data.token
          localStorage.setItem('token', this.state.token)
          axios.defaults.headers = {Authorisation: this.state.type_token + this.state.token}
          router.push('/')
        })
      } catch (error) {
        commit('auth_error');
        localStorage.removeItem('token');
        console.log("error! enter the test data --> name: abc, password: 123123, email: awf@mail.ru")
        alert("Enter a correct data (you can view it in F12 console)");
      }
    },
    async SIGN_OUT() {
      localStorage.removeItem('token', this.state.token)
      this.state.token = '';
      await axios.get(this.state.API + 'logout')
    }
  },
})