<template>
  <div class="bg-white font-Lato">
    <div class="w-10/12 m-auto pb-32">
      <div class="pt-32 w-full flex justify-between">
        <h1 class="text-5xl font-semibold">Podcasts</h1>
        <div class="flex items-center">
          <select class="pr-2 text-xl outline-none bg-white" v-model="selected">
              <option value="recent">Plus récent</option>
              <option value="s7">Saison 7</option>
              <option value="s6">Saison 6</option>
              <option value="s5">Saison 5</option>
              <option value="s4">Saison 4</option>
              <option value="s3">Saison 3</option>
          </select>
        </div>
      </div>
      <div class="w-full cc:w-11/12 min:w-3/4 sm:w-full inter:w-10/12 lg:w-full m-auto pt-10 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        <Card v-for="podcast in podcasts" 
          :key="podcast.id"
          :podcast="podcast"
        />
      </div>
      <div class="mb-12 mt-6 text-center">
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
import { reactive } from '@nuxtjs/composition-api';

export default {
    components: { Card },
    async fetch({ store, error }) { // Crée une persisted data pour ne pas avoir a recharger les podcasts chargé sur la page home
      try {
        await store.dispatch('getPodcasts')
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
        this.$store.dispatch("loadMore")
      }
    },
    data() {
      return {
        selected: "recent"
      }
    },
    watch: {
      selected: function() {
        console.log("hey")
        // this.$store.dispatch("")
        
      }
    }
}
</script>
