<template>
  <div :class="currentURL ? 'pb-24' : ''">
    <div class="w-10/12 m-auto">
      <div class="pt-32 w-full flex justify-between">
        <h1 class="text-5xl font-semibold">Podcasts</h1>
        <div class="flex items-center">
          <select class="pr-2 text-xl outline-none bg-white" v-model="selected">
              <option value="recent">Plus récent</option>
              <option value="7">Saison 7</option>
              <option value="6">Saison 6</option>
              <option value="5">Saison 5</option>
          </select>
        </div>
      </div>
      <div class="w-full cc:w-11/12 min:w-3/4 sm:w-full inter:w-10/12 lg:w-full m-auto pt-10 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        <Card v-for="podcast in podcasts" 
          :key="podcast.id"
          :podcast="podcast"
        />
      </div>
      <div v-if="!this.isSelected" class="mb-12 mt-10 text-center">
        <button @click="loadMore()" 
          class="bg-darkgray font-semibold text-white text-lg py-2 px-4 border border-darkgrey rounded"
        >
        Voir plus
        </button>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Card from "@/components/Card.vue"
import Footer from "@/components/Footer.vue"
import { mapState } from 'vuex'
import { reactive } from '@nuxtjs/composition-api';

export default {
    components: { Card, Footer },
    async fetch({ store, error }) {
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
      podcasts: state => state.podcasts,    
      currentURL: state => state.player.currentURL
    }),
    methods: {
      loadMore() {
        this.$store.dispatch("loadMore")
      }
    },
    data() {
      return {
        selected: "recent",
        isSelected: false
      }
    },
    watch: {
      selected: function() {
        if(this.selected != "recent") {
          this.$store.dispatch("getBySeason", this.selected)
          this.isSelected = true
        } else {
          this.$store.dispatch("getPodcasts")
          this.isSelected = false
        }
      }
    }
}
</script>
