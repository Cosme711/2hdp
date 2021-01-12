<template>
  <div class="fixed bottom-0 flex items-center bg-gray-300 w-full">

    <div class="flex items-center w-11/12 m-auto">

      <div class="mr-4 my-4 flex items-center">
        <img class="w-16 h-16 rounded-full" src="https://tailwindcss.com/img/card-top.jpg">
        <div class="ml-2">
          <p>Name</p>
          <p>Artist</p>
        </div>
      </div>

      <div class="mx-4 flex justify-between">
        <span class="material-icons text-4xl cursor-pointer" @click="play" v-if="!data.isPause">play_arrow</span>
        <span class="material-icons text-4xl cursor-pointer" @click="pause" v-else>pause</span>
      </div>

      <div class="flex flex-1 items-center">
        <div class="mr-4">
          <p>{{ data.timer }}</p>
        </div>
        <div class="flex items-center h-1 w-full bg-gray-500 rounded-full cursor-pointer" @click="seek($event)" ref="progressTimerElement">
          <div class="h-full bg-yellow-500" :style="{'width' : data.progressTimer + '%'}"></div>
          <span class="w-4 h-4 flex justify-end bg-gradient-to-r from-red-500 to-red-700 rounded-full"></span>
        </div>
        <div class="ml-4">
          <p>{{data.duration}}</p>
        </div>
      </div>

        <div class="ml-6 flex items-center">
          <span class="material-icons cursor-pointer" @click="mute" v-if="!data.isMute">volume_up</span>
          <span class="material-icons cursor-pointer" @click="mute" v-else>volume_off</span>
          <div class="ml-2 flex items-center h-1 w-56 bg-gray-500 cursor-pointer" @click="volume($event)" ref="progressVolumeElement">
            <div class="h-full bg-yellow-500" :style="{'width' : data.progressVolume + '%'}"></div>
            <span class="w-4 h-4 flex justify-end bg-gradient-to-r from-red-500 to-red-700 rounded-full"></span>
          </div>       
        </div>

    </div>

  </div>
</template>

<script>
import { reactive, ref } from '@nuxtjs/composition-api';
import { mapState } from 'vuex'
import { Howl, Howler } from 'howler';

export default {
  name: 'App',
  setup() {

    const data = reactive({
      file: null,
      url: "https://2hdp-api.s3.eu-west-3.amazonaws.com/7_14_Wonderful_Life_023712b3c7.mp3",
      isPause: false,
      isMute: false,
      timer: "00:00",
      duration: "00:00",
      progressTimer: 0,
      progressVolume: 100,
    })

    const progressTimerElement = ref(null);
    const progressVolumeElement = ref(null);


    function formatTime(secs) {
      var minutes = Math.floor(secs / 60) || 0;
      var seconds = Math.floor(secs - minutes * 60) || 0;
      return (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    }

    function play() {
      if(this.currentPlaying) {
        var file = data.file = new Howl({
          src: [this.currentPlaying],
          html5: true, // A live stream can only be played through HTML5 Audio.
          format: ['mp3'],
          autoplay: true,
          onplay: function() {
            data.isPause = true;
            data.duration = formatTime(file.duration())
            requestAnimationFrame(stepFunction.bind(this));
          },
          onpause: function() {
            data.isPause = false; 
          },
          onend: function() {
            data.isPause = false;
          },
          onseek: function(){
            window.requestAnimationFrame(stepFunction.bind(this));
          }
        });
      data.isPause = true;
      file.play();
      }
    }

    function pause() {
      var file = data.file;
      console.log(data.isPause)
      if(data.isPause) {
        file.pause();
        data.isPause = true;
      }
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


    return { data, progressTimerElement, progressVolumeElement, play, pause, seek, volume, mute }

  },
  computed: mapState({
    currentPlaying: state => state.player.currentPlaying
  }),
}
</script>