<template>
  <div>
    <NavBar />
    <Nuxt />
    <Player />
  </div>
</template>

<script>
import NavBar from "~/components/NavBar.vue"
import Player from "~/components/Player.vue"

export default {
  components: { NavBar, Player }
}
</script>