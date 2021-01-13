<template>
  <div class="bg-white">
    <div class="w-11/12 m-auto pb-32">
      <div class="pt-32 w-full flex flex-col items-end">
        <select class="outline-none">
            <option value="">Plus récent</option>
            <option value="">Plus ancien</option>
            <option value="">Ordre Alphabétique</option>
        </select>
      </div>
      <div class="w-11/12 test:w-3/4 sm:w-full test2:w-4/5 lg:w-full m-auto justify-self-stretch pt-10 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        <Card v-for="podcast in podcasts" 
          :key="podcast.id"
          :podcast="podcast"
        />
      </div>
      <div class="mt-8 text-center">
        <button @click="loadMore()" 
          class="bg-transparent hover:bg-darkgray text-darkgrey font-semibold hover:text-white py-2 px-4 border border-darkgrey hover:border-darkgray rounded"
        >
        Voir plus
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue"
import { mapState } from 'vuex'

export default {
    components: { Card },
    async fetch({ store, error }) { // Crée une persisted data pour ne pas avoir a recharger les podcasts chargé sur la page home
      try {
        await store.dispatch('getData', 12)
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
    },
}
</script>