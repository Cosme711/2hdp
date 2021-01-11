<template>
  <main class="bg-gray-100">
    <div>
      <div class="pt-40 md:w-11/12 m-auto grid gap-10 sm:gap-x-3 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        <Card v-for="podcast in podcasts" 
          :key="podcast.id"
          :podcast="podcast"
        />
      </div>
      <div class="py-4 text-center">
        <a class="cursor-pointer" @click="loadMore()">Load More...</a>
      </div>
    </div>
  </main>
</template>

<script>
import Card from "@/components/Card.vue"
import { mapState } from 'vuex'

export default {
  components: { Card },
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
  methods: {
    loadMore() {
      this.$store.dispatch("increment")
      this.$store.dispatch("loadMore")
    }
  }
}
</script>


