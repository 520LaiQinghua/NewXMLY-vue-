import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


import mine from "./mine"
import login from "./login"
import myFocus from "./myFocus"
import order from "./order"
import register from "./register"

export default new Router({
  routes: [
    mine,
    login,
    myFocus,
    order,
    register
  ]
})
