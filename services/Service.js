import axios from 'axios'

const apiClient = axios.create({
    baseURL: `https://murmuring-beyond-66837.herokuapp.com/`,
    withCredentials: false, 
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })

export default {
    getData(number) {
        return apiClient.get('/podcasts?_limit=' + number + '&_sort=date_publication:DESC')
    },
    loadMore(increment) {
        return apiClient.get('/podcasts?_start=' + increment + '&_limit=6&_sort=date_publication:DESC')
    }
  }

  // '/podcast?_start=10&_limit=5&_sort=date_publication:DESC'

  // '/podcasts?_start=10&_limit=5&_sort=date_publication:DESC'