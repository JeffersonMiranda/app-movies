<template>
  <div class="home">
    <input v-model="selectedMovie" class="movie-filter" type="text" placeholder="Search by title">
    <div class="movies-cards">

      <movie-card v-for="movie in filteredMovies"
              :movie_id= movie.id
              :image="movie.backdrop_path || null"
              :episode_id="movie.episode_id"
              :title="movie.title"
              :genre="movie.genre_ids"
              :overview="movie.overview"
              :release_date="movie.release_date"/>
    </div>
    <footer class="footer-navigation">
      <a @click="previousPage()" :class="{ hidden: this.page == 1 }"> Previous </a>
      <a @click="nextPage()"> Next </a>
    </footer>
  </div>
</template>

<script>

import MoviesService from '@/services/MoviesService'
import MovieCard from '@/components/MovieCard'

export default {
  name: 'MoviesList',
  components: {
    MovieCard
  },
  data() {
    return {
      selectedMovie: null,
      movies: [],
      page: 1
    }
  },
  computed: {
    filteredMovies() {
      if (this.selectedMovie) {
        var filter = this.selectedMovie.toLowerCase()
        return this.movies.filter(movie => movie.title.toLowerCase().includes(filter))
      } else {
        return this.movies
      }
    }
  },
  methods: {
    async getMoviesByPage() {
      let service = new MoviesService()

      try {
        var response = await service.getAllMovies(this.page)
        var results = response.data.results

        if (results.length) {
          this.movies = results
        } else {
          this.page-- 
          return
        }
      } catch(error) {
        alert('It is not possible to connect to server, try again later!')
      }
    },
    nextPage() {
      this.page++
      this.getMoviesByPage()
    },
    previousPage() {
      this.page--
      this.getMoviesByPage()
    }
  },
  created() {
    this.getMoviesByPage(this.page)
  }
}
</script>

<style lang="sass">

.home
  margin: auto

  .movie-filter
    display: block
    width: 100%
    max-width: 400px
    margin: auto auto 20px
    padding: 10px 20px
    border-radius: 25px
    outline: none
    box-sizing: border-box

  .movies-cards
    display: flex
    flex-wrap: wrap
  
  .footer-navigation
    margin-top: 50px
    display: flex
    justify-content: space-between
    max-width: 300px
    margin: 50px auto auto

    a 
      color: white
      cursor: pointer

.hidden
  visibility: hidden
</style>
