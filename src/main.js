import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vue from 'vue';
import * as firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/database'


createApp(App).use(store).use(router).mount('#app')


firebase.initializeApp({
    apiKey: "AIzaSyDYcWLrBj0jtarfeMCSWWc8q1C7DO-bqLo",
    authDomain: "valowiki-c857f.firebaseapp.com",
    projectId: "valowiki-c857f",
    storageBucket: "valowiki-c857f.appspot.com",
    messagingSenderId: "77834713439",
    appId: "1:77834713439:web:2b8050b8baac581e561eea",
    measurementId: "G-B0FC6GZ6TF"
})
