<template>
  <div class="shadow cursor-pointer rounded-md" @click="play">
    <div class="h-48">
      <img :src="podcast.picture.url"  class="h-full w-full rounded-t-md">
    </div>
    <div class="h-1 flex justify-center items-center bg-darkgray ">
      <div class="h-16 w-16 flex justify-center items-center rounded-full bg-white"> <!-- Convertir en m-auto -->
        <font-awesome-icon :icon="['fas', 'play']" class="text-xl text-black"/>
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

export default {
    props: {
        podcast: Object
    },
    setup() {

      const data = reactive({
        isIndexed: true
      })

      function isIndexed() {
        if(this.podcast.episode && this.podcast.saison) {
          data.isIndexed = true
        } else {
          data.isIndexed = false
        }
      }

      function play() {
        this.$store.dispatch("player/getURL", this.podcast.mp3[0].url);
        this.$store.dispatch("player/getTitle", this.podcast.title)
      }

      return { play, isIndexed, data }
    },
    mounted: function() {
      this.isIndexed();
    }
}
</script>


<style>
.icons {
  font-size: 40px;
}
</style>