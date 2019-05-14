<template>
  <div class="movie-details" v-if="movie">
    <img class="movie-image" :src="getMovieImage(movie.backdrop_path)" :alt="movie.title">
    <p class="movie-title"> {{ movie.title }} </p>
    <p class="movie-overview"> {{ movie.overview }} </p>
    <p class="movie-information"> Original language: <span class="yellow-color"> {{ movie.original_language.toUpperCase() }} </span> </p>
    <p class="movie-information"> Original title: <span class="yellow-color"> {{ movie.original_title }} </span> </p>
    <p class="movie-information"> Release: <span class="yellow-color"> {{ formatDate(movie.release_date) }} </span> </p>
    <p class="movie-information"> <span class="yellow-color"> Popularity: {{ movie.popularity }} </span> </p>
    <p class="movie-information"> Vote count: <span class="yellow-color"> {{ movie.vote_count }} </span> </p>
    <p class="movie-information"> Vote average: <span class="yellow-color"> {{ movie.vote_average }} </span> </p>
  </div>
</template>

<script>

import MovieMixin from '@/MovieMixin'
import MoviesService from '@/services/MoviesService'
import { formatDate } from '@/helpers'

export default {
  name: 'MovieDetails',
  data() {
    return {
      movie: null,
      movieImage: null
    }
  },
  methods: {
    formatDate
  },
  mixins: [MovieMixin],
  async created() {
    var service = new MoviesService()

    try {
      var response = await service.getMovieById(this.$route.params.id)
      this.movie = response.data
    } catch(error) {
      alert('It is not possible to connect to server, try again later!')
    }
  }
}

</script>

<style lang="sass">

.movie-details
  color: #aaaaaa
  font-weight: bold

  .yellow-color
    color: #edec51

  .movie-image
    display: block
    margin: auto
    border-radius: 10px

  .movie-title
    text-align: center
    font-size: 24px

  .movie-overview
    font-weight: normal

  .movie-information
    width: 100%
    border-radius: 10px

  @media (max-width: 568px)
    .movie-image
      max-width: 300px


</style>
