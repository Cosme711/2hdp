<template>
  <main class="pb-32">
    <div class="bg-gray-100">
      <div class="w-11/12 m-auto">
        <div class="pt-32 w-full flex flex-col items-end">
          <select class="outline-none">
              <option value="">Plus récent</option>
              <option value="">Plus ancien</option>
              <option value="">Ordre Alphabétique</option>
          </select>
        </div>
        <div class="w-11/12 sm:w-full m-auto justify-self-stretch pt-10 grid gap-10 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          <Card v-for="podcast in podcasts" 
            :key="podcast.id"
            :podcast="podcast"
          />
        </div>
        <div class="mt-8 text-center">
          <nuxt-link to="/podcasts" class="px-4 py-2 bg-gray-600 text-white rounded-md">Voir plus</nuxt-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Card from "@/components/Card.vue"
import { mapState } from 'vuex'
import { reactive } from '@nuxtjs/composition-api'

export default {
  components: { Card },
  async fetch({ store, error }) {
    try {
      await store.dispatch('getData', 6)
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


