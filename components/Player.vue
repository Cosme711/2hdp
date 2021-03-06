<template>
  <div v-if="this.currentURL" class="shadow__player fixed bottom-0 flex items-center bg-white w-full">

    <div class="flex flex-col md:flex-row items-center w-11/12 m-auto">

      <div class="mr-4 flex items-center">
        <img class="my-4 w-16 h-16 rounded-full" src="../assets/images/logo-player.jpg" alt="Play Logo - 2 Heures de Perdues">
        <div class="ml-4">
          <p class="max-w-small text-lg font-semibold">{{ this.title }}</p>
          <p class="text-xs" v-if="data.isIndexed">S{{ this.saison }}, E{{this.episode}}</p>
        </div>
      </div>

      <div class="flex flex-1 items-center my-4 md:my-0 w-full">
        <div class="mx-4 flex justify-between">
          <font-awesome-icon :icon="['fas', 'play']" class="text-2xl text-darkgray cursor-pointer" @click="play_pause" v-if="this.isPause" />
          <font-awesome-icon :icon="['fas', 'pause']" class="text-2xl text-darkgray cursor-pointer" @click="play_pause" v-else />
        </div>

          <div class="mr-4">
            <p>{{ data.timer }}</p>
          </div>
          <div class="flex items-center w-full cursor-pointer" ref="progressTimerElement" @click="seek($event)">
            <input type="range" min="0" max="" :value="data.progressTimer" id="range">
          </div>
          <div class="ml-4">
            <p>{{data.duration}}</p>
          </div>
      </div>

        <div class="ml-6 hidden inter:flex items-center">
          <font-awesome-icon :icon="['fas', 'volume-up']" class="text-xl text-darkgray cursor-pointer" @click="mute" v-if="!data.isMute"/>
          <font-awesome-icon :icon="['fas', 'volume-mute']" class="text-xl text-darkgray cursor-pointer" @click="mute" v-else/>
          <div class="flex items-center w-full" ref="progressVolumeElement" @click="volume($event)">
            <input type="range" min="0" max="" :value="data.progressVolume" id="rangeVolume">
          </div>
        </div>

    </div>

  </div>
</template>

<script>
import { reactive, ref, watch, computed } from '@nuxtjs/composition-api';
import { Howl, Howler } from 'howler';
import { mapState } from 'vuex';

export default {
  name: 'App',
  setup() {

    const data = reactive({
      file: null,
      isMute: false,
      timer: "00:00",
      duration: "00:00",
      progressTimer: 0,
      progressVolume: 100,
      isIndexed: false
    })

    const progressTimerElement = ref(null);
    const progressVolumeElement = ref(null);

    function start() {
      var file;
      file = data.file = new Howl({
        src: [this.currentURL],
        html5: true,
        format: ['mp3'],
        onplay: function() {
          data.duration = formatTime(file.duration())
          requestAnimationFrame(stepFunction.bind(this));
        },
        onseek: function(){
          window.requestAnimationFrame(stepFunction.bind(this));
        }
      });
      file.play();
    }

    function play_pause() {
      this.$store.dispatch("player/isPause")
    }

    function stop() {
        var file = data.file;
        if (data.file) {
          file.stop();
        }
    }

    function formatTime(secs) {
      var minutes = Math.floor(secs / 60) || 0;
      var seconds = Math.floor(secs - minutes * 60) || 0;
      return (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    }

    function stepFunction() {
      var file = data.file;
      var seek = file.seek();
      data.timer = formatTime(Math.round(seek)); 
      data.progressTimer = (seek * 100) / file.duration();
      if (file.playing()) {
          window.requestAnimationFrame(stepFunction.bind(this));
      }
    }

    function seek(event) {
      var per = event.offsetX / progressTimerElement.value.clientWidth;
      var file = data.file
      if(file) {
        if (file.playing()) {
          file.pause();
          file.seek(file.duration() * per);
          file.play();
        } else {
          file.seek(file.duration() * per);
        }
      }
    }

    function volume(event) {
      var per = event.offsetX / parseFloat(progressVolumeElement.value.scrollWidth);
      var barWidth = (per * 100) / 100;
      data.progressVolume = barWidth * 100;
      Howler.volume(per);
    }

      function mute() {
        var file = data.file;
        data.isMute = !data.isMute;
        data.isMute ? file.mute(true) : file.mute(false)
      }
      
      function isIndexed() {
        if(this.saison != null && this.episode != null) {
          data.isIndexed = true
        } else {
          data.isIndexed = false
        }
      }

    return { data, progressTimerElement, progressVolumeElement, start, play_pause, seek, volume, mute, stop, isIndexed }

  },
  computed: mapState({
    currentURL: state => state.player.currentURL,
    title: state => state.player.title,
    saison: state => state.player.saison,
    episode: state => state.player.episode,
    isPause: state => state.player.isPause
  }),
  watch: {
    currentURL: function() {
      this.stop()
      this.data.file = null
      this.start() 
      this.isIndexed()
    },
    isPause: function() {
      var file = this.data.file;
      if(this.isPause) {
        file.pause()
      } else {
        file.play()
      }
    }
  }
}
</script>

<style>

.shadow__player {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}

#range{
  -webkit-appearance: none;
  width: 100%;
  height: 10px;
  border-radius: 5px;  
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

#range::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%; 
  background: #00AEC7;
  cursor: pointer;
}

#range::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #00AEC7;
  cursor: pointer;
}

#range::-moz-range-progress {
  background-color: green;
}

#rangeVolume{
  -webkit-appearance: none;
  width: 100%;
  height: 7px;
  border-radius: 5px;
  margin-left: 15px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

#rangeVolume::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 15px;
  height: 15px;
  border-radius: 50%; 
  background: #00AEC7;
  cursor: pointer;
}

#rangeVolume::-moz-range-thumb {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #00AEC7;
  cursor: pointer;
}

#rangeVolume::-moz-range-progress {
  background-color: green;
}

</style>