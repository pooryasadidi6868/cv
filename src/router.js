import Vue from 'vue'
import Router from 'vue-router'
import Logo from './components/icon/Logo.vue'
import IndexCv from './components/cv/IndexCv.vue'




Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
     {
      path:'/',
      component:Logo
    },

     {
       path:'/index',
       component:IndexCv,
     
     }

     


    ]
})
