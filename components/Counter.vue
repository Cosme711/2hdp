<template>
    <div class="bg-black">
        <div class="py-10 w-6/12 m-auto flex items-center  text-yellow font-bold">
            <div class="flex-1">
                <div class="mb-4 text-5xl">
                    <h1>2 Heures de perdues</h1>
                </div>
                <div class="text-3xl text-white">
                    <p><span class="mr-4">{{ numberOfPodcasts }}</span>Podcasts</p>
                </div>
                <div class="mt-2 text-3xl text-white">
                    <p><span class="mr-4">{{ numberOfHours }}</span>Heures de perdues</p>
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