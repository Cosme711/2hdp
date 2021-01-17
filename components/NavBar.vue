<template>
  <header id="header" class="fixed w-full h-24 text-white shadow-md">
    <div class="w-11/12 h-full m-auto flex items-center">
      <div class="flex-1">
        <nuxt-link to="/">
          <img src="../assets/images/logo-2.png" class="w-16">
        </nuxt-link>
      </div>
      <nav>
        <ul class="hidden sm:flex justify-between text-black">
          <li class="mx-2 cursor-pointer"><nuxt-link :to="{ path: '/', hash: '#home' }">Home</nuxt-link></li>
          <li class="mx-2 cursor-pointer"><nuxt-link to="/podcasts">Podcasts</nuxt-link></li>
          <li class="mx-2 cursor-pointer"><a href="https://docs.google.com/spreadsheets/d/1Ft5HlnWAsZ8OHYM2iPVDXLLMXP0huZzO97Pu5MtT110/edit#gid=59860108" target="_blank">Chapeau</a></li>
          <li class="mx-2 cursor-pointer"><nuxt-link :to="{ path: '/', hash:'#contact' }">Contact</nuxt-link></li>
        </ul>

        <div @click="toggle" class="sm:hidden">
          <div class="line__hamburger"></div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  setup() {

    function toggle() {
      const hamburger = document.querySelector(".line__hamburger")
      hamburger.classList.toggle('open')
    }

    return { toggle }
    
  },
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

.line__hamburger{
    width: 30px;
    height: 3px;
    background-color: black;
    transition: all .5s ease-in-out;
}

.line__hamburger::before,
.line__hamburger::after {
    content: '';
    width: 30px;
    height: 3px;
    background-color: black;
    position: absolute;
    transition: all .5s ease-in-out;
}

.line__hamburger::before {
    transform: translateY(-9px);
}

.line__hamburger::after {
    transform: translateY(9px);
}

.line__hamburger.open {
    transform: translateX(-50px);
    background: transparent;
}

.line__hamburger.open::before {
    transform: rotate(45deg) translate(35px, -35px);
}

.line__hamburger.open::after {
    transform: rotate(-45deg) translate(35px, 35px);
}
  
</style>