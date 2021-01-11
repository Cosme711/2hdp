<template>
  <header id="header" class="fixed w-full h-24 bg-gray-600 text-white">
    <div class="w-11/12 h-full m-auto flex items-center">
      <div class="flex-1">
        <p>Logo</p>
      </div>
      <nav>
        <ul class="w-56 flex justify-between">
          <li>Home</li>
          <li>Podcast</li>
          <li>Live</li>
          <li>Contact</li>
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
        document.getElementById("header").style.height = "4rem";
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
}
  
</style>