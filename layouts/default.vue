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
  components: { NavBar, Player },
    head() {
    return {
      titleTemplate: '2 Heures de perdues - Podcast Cinéma',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Chaque semaine, l’équipe de 2 heures de perdues revient avec humour et mauvaise foi sur un film pour le décrypter scène par scène.'
        }
      ]
    }
  }
}
</script>