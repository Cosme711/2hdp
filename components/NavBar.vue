<template>
  <header id="header" class="fixed w-full h-24 text-white shadow-md">
    <div class="w-10/12 h-full m-auto flex items-center">
      <div class="flex-1">
        <nuxt-link to="/">
          <img src="../assets/images/logo-2.png" class="w-16" alt="Logo 2 Heures de Perdues">
        </nuxt-link>
      </div>
      <nav>
        <ul class="flex justify-between text-black font-semibold tex-base little:text-xl">
          <li class="mx-2 first:mx-4 cursor-pointer"><nuxt-link :to="{ path: '/', hash: '#home' }">Home</nuxt-link></li>
          <li class="mx-2 first:mx-4 cursor-pointer"><nuxt-link to="/podcasts">Podcasts</nuxt-link></li>
          <li class="mx-2 first:mx-4 cursor-pointer"><nuxt-link :to="{ path: '/', hash:'#contact' }">Contact</nuxt-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  mounted: function(){
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").style.height = "5rem";
      } else {
        document.getElementById("header").style.height = "6rem";
      }
    }
  }
}
</script>

<style>

#header {
  transition: 0.2s;
  background-color: white;
}

</style>