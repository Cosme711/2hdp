<template>
    <div class="bg-black">
        <div class="py-10 m-auto flex justify-center items-center  text-yellow font-bold">
            <div class="w-10/12 xl:w-8/12 flex justify-center sm:justify-between items-center">
                <div class="title flex items-center text-2xl first:text-3xl little:text-4xl middle:text-5xl sm:text-3xl md:text-4xl inter:text-5xl lg:text-6xl">
                    <h1>2 Heures de perdues</h1>
                </div>
                <div class="hidden sm:flex flex-col text-white">
                    <div class="text-lg md:text-xl inter:text-2xl lg:text-3xl">
                        <p><span class="mr-4">{{ numberOfPodcasts }}</span>Podcasts</p>
                    </div>
                    <div class="text-lg md:text-xl inter:text-2xl lg:text-3xl">
                        <p><span class="mr-4">{{ numberOfHours }}</span>Heures de perdues</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
      numberOfPodcasts: state => state.counter.numberOfPodcasts,
      numberOfHours: state => state.counter.numberOfHours
  }),
  methods: {
      getNumbers() {
          this.$store.dispatch("counter/getNumber");
      }
  },
  mounted: function() {
      this.getNumbers();
  }

}
</script>

<style>

.title {
    font-family: 'Rubik', sans-serif;
}

.btn:hover .i{
    transform: scale(1.3);
    color: #fff;
}

.btn::before {
    content: '';
    position: absolute;
    width: 120%;
    height: 120%;
    background: #ffae00;
    transform: rotate(45deg);
    left: -120%;
    top: 90%;
}
.btn:hover::before {
    animation: aaa 0.7s 1;
    top: -10%;
    left: -10%;
}
.btn:hover::before {
    animation: aaa 0.7s 1;
    top: -10%;
    left: -10%;
}

@keyframes aaa {
    0%{
        left: -110%;
        top: 90%;
    }50%{
        left: 10%;
        top: -30%;
    }100%{
        top: -10%;
        left: -10%;
    }
}
</style>