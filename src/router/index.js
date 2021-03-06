import Vue from 'vue'
import Router from 'vue-router'
import HelloPage from '@/components/HelloPage'
import Profile from '@/components/Profile'
import Ranking from '@/components/Ranking'
import Register from '@/components/Register'
import Rules from '@/components/Rules'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloPage',
      component: HelloPage
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/ranking',
      name: 'Ranking',
      component: Ranking
    },
    {
      path: '/rules',
      name: 'Rules',
      component: Rules
    }
  ]
})
