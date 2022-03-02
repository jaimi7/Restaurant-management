import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeComp from '../components/HomeComp';
import SingUp from '../components/SingUp';
import LogIn from '../components/LogIn';
import AddRestaurant from '../components/AddRestaurant';
import UpdateRestaurant from '../components/UpdateRestaurant';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeComp',
    component: HomeComp
  },
  {
    path: '/login',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/singup',
    name: 'SingUp',
    component: SingUp
  },
  {
    path: '/addrestaurant',
    name: 'AddRestaurant',
    component: AddRestaurant
  },
  {
    path: '/updaterestaurant/:id',
    name: 'UpdateRestaurant',
    component: UpdateRestaurant
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
