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
    getData(displayed) {
        return apiClient.get('/podcasts?_limit=' + displayed + '&_sort=date_publication:DESC')
    },
    loadMore(increment, displayed) {
        return apiClient.get('/podcasts?_start=' + increment + '&_limit=' + displayed + '&_sort=date_publication:DESC')
    },
    getNumber() {
        return apiClient.get('/numbers')
    },
    getProfiles() {
        return apiClient.get('/profiles')
    }
  }
