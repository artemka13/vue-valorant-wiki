import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from "@/store";
const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next();
    return;
  }
  next('/')
};

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next();
    return;
  }
  next('/login')
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: ifAuthenticated,
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: function () {
      return import('@/views/ContactsView.vue');
    },
    beforeEnter: ifAuthenticated,
  },
  {
    path: '/tournaments',
    name: 'tournaments',
    component: function () {
      return import('@/views/TournamentsView.vue');
    },
    beforeEnter: ifAuthenticated,
  },
  {
    path: '/franchise',
    name: 'franchise',
    component: function () {
      return import('@/views/FranchiseView.vue');
    },
    beforeEnter: ifAuthenticated,
  },
  {
    path: '/login',
    name: 'login',
    component: function () {
      return import('@/views/LoginView.vue');
    },
    beforeEnter: ifNotAuthenticated,
  },
  {
    path: '/register',
    name: 'register',
    component: function () {
      return import('@/views/RegisterView.vue');
    },
    beforeEnter: ifNotAuthenticated,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
