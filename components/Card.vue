<template>
  <div class="shadow cursor-pointer rounded-md" @click="play">
    <div class="h-48">
      <img :src="podcast.picture.url"  class="h-full w-full rounded-t-md">
    </div>
    <div class="h-1 flex justify-center items-center bg-darkgray ">
      <div class="h-16 w-16 flex justify-center items-center rounded-full bg-white"> <!-- Convertir en m-auto -->
        <font-awesome-icon :icon="['fas', 'play']" class="text-xl text-darkgray"/>
      </div>
    </div>
    <div class="h-24 mt-2 flex flex-col justify-center items-center rounded-b-md bg-white shadow-2xl">
      <p class="w-3/4 flex flex-1 items-center justify-center text-center text-lg font-black">{{ podcast.title }}</p>
      <div class="flex mb-2">
        <p>Saison 7</p>
        <p class="mx-2">|</p>
        <p>Episode 2</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        podcast: Object
    },
    methods: {
      play() {
        console.log(this.podcast)
        this.$store.dispatch("player/getURL", this.podcast.mp3[0].url);
        this.$store.dispatch("player/getTitle", this.podcast.title)

      }
    }
}
</script>


<style>
.icons {
  font-size: 40px;
}
</style>