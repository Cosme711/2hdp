<template>
  <main class="pb-32 font-Lato">
    <div class="bg-white h-full min-h-screen">
      <div class="w-10/12 m-auto">
        <div class="pt-32 w-full flex flex-col items-end">
          <select class="outline-none bg-white" @click="test()">
              <option value="">Plus récent</option>
              <option value="">Plus ancien</option>
              <option value="">Ordre Alphabétique</option>
          </select>
        </div>
        <div class="w-11/12 test:w-3/4 sm:w-full test2:w-4/5 lg:w-full m-auto pt-10 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          <Card v-for="podcast in data.podcastsList" 
            :key="podcast.id"
            :podcast="podcast"
          />
        </div>
        <div class="py-8 mt-4 text-center">
          <nuxt-link to="/podcasts" class="bg-transparent hover:bg-darkgray text-darkgrey font-semibold hover:text-white py-2 px-4 border border-darkgrey hover:border-darkgray rounded">Voir plus</nuxt-link>
        </div>
      </div>
    </div>
    <Counter />
    <Description />
    <Banner />
  </main>
</template>

<script>
import Card from "@/components/Card.vue"
import Banner from "@/components/Banner.vue"
import Counter from "@/components/Counter.vue"
import Description from "@/components/Description.vue"
import { mapState } from 'vuex'
import { reactive, computed } from '@nuxtjs/composition-api'

export default {
  components: { Card, Banner, Counter, Description },
  async fetch({ store, error }) {
    try {
      await store.dispatch('getData')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch events at this time. Please try again'
      })
    }
  },
  computed: mapState({
    podcasts: state => state.podcasts
  }),
  mounted: function() {
    this.responsiveNumberOfCards()
  },
  setup() {

    const data = reactive({
      dropdown: false,
      podcastsList: {}
    })


    function responsiveNumberOfCards() {

      const min1260 = window.matchMedia('(min-width: 1260px)')
      const max1600 = window.matchMedia('(max-width: 1600px)')
      const min1600 = window.matchMedia('(min-width: 1600px)')
      const max1260 = window.matchMedia('(max-width: 1260px)')

      var podcasts = this.podcasts;

      if(max1260.matches) { // If screen width is less than 1260px push 4 podcasts
        push(4, podcasts)
      } else if (min1260.matches && max1600.matches) { // If screen width is between 1260px & 1600px push 6 podcasts
        push(6, podcasts)
      } else if (min1600.matches) { // If screen width is greater than 1600px push 8 podcasts
        data.podcastsList = this.podcasts
      }
    }


    function push(number, podcasts) {
      var podcastsList = [];
      let n = 0;
      var index = 0;
      while (n < number) {
        podcastsList.push(podcasts[index])
        index++
        n++
      }
      data.podcastsList = podcastsList
    }

    return { data, responsiveNumberOfCards, push }

  }
}
</script>


