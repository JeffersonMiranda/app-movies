import Vue from 'vue'
import Router from 'vue-router'
import MoviesList from './views/MoviesList'
import MovieDetails from './views/MovieDetails'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'MoviesList',
      component: MoviesList
    },
    {
      path: '/movie-details/:id',
      name: 'MovieDetails',
      component: MovieDetails
    },
  ]
})
