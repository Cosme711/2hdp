<template>
  <div class="shadow cursor-pointer rounded-md" @click="play">
    <div class="h-48">
      <img :src="podcast.picture.url"  class="h-full w-full rounded-t-md">
    </div>
    <div class="h-1 flex justify-center items-center bg-darkgray ">
      <div class="h-16 w-16 flex justify-center items-center rounded-full bg-white"> <!-- Convertir en m-auto -->
        <font-awesome-icon :icon="['fas', 'play']" class="text-xl text-black" v-if="!data.isPauseCard"/>
        <font-awesome-icon :icon="['fas', 'pause']" class="text-xl text-black" v-else />
      </div>
    </div>
    <div class="h-24 mt-2 flex flex-col justify-center items-center rounded-b-md bg-white shadow-2xl">
      <p class="my-1 w-3/4 flex flex-1 items-center justify-center text-center text-lg font-semibold">{{ podcast.title }}</p>
      <div class="flex mb-2" v-if="data.isIndexed">
        <p>Saison {{ podcast.saison }}</p>
        <p class="mx-2">|</p>
        <p>Episode {{ podcast.episode }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@nuxtjs/composition-api'
import { mapState } from 'vuex';

export default {
    props: {
        podcast: Object
    },
    setup() {

      const data = reactive({
        isIndexed: true,
        isPauseCard: false
      })

      function isIndexed() {
        if(this.podcast.episode && this.podcast.saison) {
          data.isIndexed = true
        } else {
          data.isIndexed = false
        }
      }

      function isSameCard() {
        if(this.currentURL == this.podcast.mp3[0].url) {
          this.data.isPauseCard = !this.data.isPauseCard
        }
      }

      function play() {
        this.$store.dispatch("player/getURL", this.podcast.mp3[0].url)
        this.$store.dispatch("player/getTitle", this.podcast.title)
        this.$store.dispatch("player/getSaison", this.podcast.saison)
        this.$store.dispatch("player/getEpisode", this.podcast.episode)
      }

      return { data, isIndexed, isSameCard, play }
    },
    mounted: function() {
      this.isIndexed();
    },
    computed: mapState({
      isPause: state => state.player.isPause,
      currentURL: state => state.player.currentURL
    }),
    watch: {
      isPause: function() {
        this.isSameCard()
      },
      currentURL: function() {
        if(this.currentURL != this.podcast.mp3[0].url) {
          this.data.isPauseCard = false
        } else {
          this.data.isPauseCard = true
        }
      }
    },
    mounted: function() {
      this.isSameCard() // Here for fix bug when we start playing on home page and we go to Podcasts pages
    }
}
</script>


<style>
.icons {
  font-size: 40px;
}
</style>