import Vue from 'vue'
import Router from 'vue-router'
import Posts from './components/AppPosts.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/posts',
      name: 'posts',
      component: Posts
    }
  ]
})