<template>
  <div class="shadow cursor-pointer rounded-md">
    <div class="h-48">
      <img :src="podcast.picture.url" class="h-full w-full rounded-t-md">
    </div>
    <div class="h-1 flex justify-center items-center bg-gray-600 ">
      <div class="h-16 w-16 flex justify-center items-center rounded-full bg-white"> <!-- Convertir en m-auto -->
        <span class="material-icons icons test text-gray-600">play_circle_outline</span>
      </div>
    </div>
    <div class="h-24 flex flex-col justify-center items-center rounded-md shadow-2xl">
      <p class="w-3/4 flex flex-1 items-center justify-center text-center font-bold">{{ podcast.title }}</p>
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
    }
}
</script>


<style>
.icons {
  font-size: 40px;
}
</style>