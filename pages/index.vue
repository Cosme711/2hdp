<template>
  <main class="pb-32 font-Lato">
    <div class="bg-white h-full min-h-screen">
      <div class="w-11/12 m-auto">
        <div class="pt-32 w-full flex flex-col items-end">
          <select class="outline-none">
              <option value="">Plus récent</option>
              <option value="">Plus ancien</option>
              <option value="">Ordre Alphabétique</option>
          </select>
        </div>
        <div class="w-11/12 test:w-3/4 sm:w-full test2:w-4/5 lg:w-full m-auto pt-10 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          <Card v-for="podcast in podcasts" 
            :key="podcast.id"
            :podcast="podcast"
          />
        </div>
        <div class="py-8 mt-4 text-center">
          <nuxt-link to="/podcasts" class="bg-transparent hover:bg-darkgray text-darkgrey font-semibold hover:text-white py-2 px-4 border border-darkgrey hover:border-darkgray rounded">Voir plus</nuxt-link>
        </div>
      </div>
    </div>
    <Banner />
    <Counter />
  </main>
</template>

<script>
import Card from "@/components/Card.vue"
import Banner from "@/components/Banner.vue"
import Counter from "@/components/Counter.vue"
import { mapState } from 'vuex'
import { reactive } from '@nuxtjs/composition-api'

export default {
  components: { Card, Banner, Counter },
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
  setup() {

    const data = reactive({
      dropdown: false
    })

    return { data }

  }
}
      // <div class="pt-32 w-full flex flex-col items-end">
      //   <div class="relative">
      //     <div class="h-12 w-32 py-1 px-2 border-2 border-gray-600 text-gray-600 flex justify-center items-center cursor-pointer" @click="data.dropdown = !data.dropdown">
      //       <p>Latest</p>
      //       <span class="material-icons mt-1">keyboard_arrow_down</span>
      //     </div>
      //     <div v-if="data.dropdown"  class="absolute w-32">
      //       <ul class="bg-white">
      //         <li>1</li>
      //         <li>2</li>
      //         <li>3</li>
      //         <li>4</li>
      //       </ul>
      //     </div>
      //   </div>
      // </div>
</script>


