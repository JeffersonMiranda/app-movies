import MoviesService from '@/services/MoviesService'

export default {
	methods: {
		getMovieImage(image) {
      var service = new MoviesService()
      return service.getMovieImage(image)
		}
	}
}