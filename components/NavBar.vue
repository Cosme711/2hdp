<template>
  <header id="header" class="fixed w-full h-24 text-white shadow-md">
    <div class="w-11/12 h-full m-auto flex items-center">
      <div class="flex-1">
        <img src="../assets/images/logo.png" class="w-16">
      </div>
      <nav>
        <ul class="w-56 flex justify-between text-black">
          <li class="cursor-pointer">Home</li>
          <li class="cursor-pointer">Podcast</li>
          <li class="cursor-pointer">Live</li>
          <li class="cursor-pointer">Contact</li>
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