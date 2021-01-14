import axios from 'axios'

const apiClient = axios.create({
    baseURL: `https://twohdp-api.herokuapp.com/`,
    withCredentials: false, 
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })

export default {
    getData() {
        return apiClient.get('/podcasts?_limit=6&_sort=date_publication:DESC')
    },
    loadMore(increment) {
        return apiClient.get('/podcasts?_start=' + increment + '&_limit=6&_sort=date_publication:DESC')
    },
    getNumber() {
        return apiClient.get('/numbers')
    },
    getProfiles() {
        return apiClient.get('/profiles')
    }
  }

  // '/podcast?_start=10&_limit=5&_sort=date_publication:DESC'

  // '/podcasts?_start=10&_limit=5&_sort=date_publication:DESC'