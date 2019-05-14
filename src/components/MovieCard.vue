<template>
  <div class="movie-card">
    <div class="wrapper-image">
      <img :src="getMovieImage(image)" :alt="title">
    </div>
    <h1 class="movie-title"> {{ title }} </h1>
    <span class="movie-release"> Release: {{ formatDate(release_date) }} </span>
    <span class="movie-overview max-3-lines"> Overview: {{ overview }} </span>
    <router-link class="movie-details" :to="{ name: 'MovieDetails', params: { id: movie_id } }"> Details </router-link>
  </div>
</template>

<script>

import MovieMixin from '@/MovieMixin'
import { formatDate } from '@/helpers'

export default {
  name: 'MovieCard',
  props: ['image', 'movie_id', 'title', 'release_date', 'overview', 'genre'],
  methods: {
    formatDate: formatDate
  },
  mixins: [MovieMixin]
}

</script>

<style lang="sass">

.movie-card
  display: flex
  flex-direction: column
  align-items: center
  padding: 10px
  max-width: 320px
  margin: auto auto 20px
  border-radius: 10px
  background-color: #272626
  transform: scale(1)
  transition: all .2s ease-in-out;

  .wrapper-image
    width: 100%
    display: flex
    align-items: center
    justify-content: center

    img
      border-radius: 5px
      width: 100%

  .movie-title
    color: #dddddd
    font-size: 20px
    text-align: center

  .movie-release
    color: #edec51
    font-size: 12px
    font-weight: bold

  .movie-genres
    color: #edec51
    font-size: 12px
    font-weight: bold

  .movie-overview
    color: #dddddd
    font-size: 12px
    font-weight: bold
    text-align: center

  .movie-details
    margin-top: 10px
    padding: 10px 25px
    font-size: 12px
    font-weight: bold
    color: #272626
    text-decoration: none
    background-color: white
    border-radius: 25px

  &:last-of-type
    margin-bottom: 0

  .max-3-lines
    display: -webkit-box
    overflow: hidden
    text-overflow: ellipsis
    -webkit-box-orient: vertical
    -webkit-line-clamp: 3

  &:hover
    transform: scale(1.1)
    cursor: pointer

</style>
