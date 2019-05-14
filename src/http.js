import axios from 'axios'

export default class Http {

  constructor() {
    this.config =
    {
      url: 'http://localhost:3000/'
    }
  }

  request(urlRoute) {
    this.config.url += urlRoute
    return axios(this.config)
  }
}
