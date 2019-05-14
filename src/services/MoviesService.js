import Http from '@/http'

export default class MoviesService {

  constructor() {
    this.http = new Http()
  }

  async getAllMovies(page) {
    return this.http.request('movies/' + page)
  }

  async getMovieById(id) {
    return this.http.request('movie/' + id)
  }

  getMovieImage(image) {
    if (image) {
      return 'https://image.tmdb.org/t/p/w500/' + image
    } else {
      return this.getMovieImageOnError()
    }
  }

  getMovieImageOnError() {
    return 'https://assets-global.website-files.com/583347ca8f6c7ee058111b55/5afc770caa130421393fa412_google-doc-error-message.png'
  }
}
