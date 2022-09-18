<template>
  <video id="flvPlyer" ref="flvPlyer" controls muted width="100%" height="100%"></video>
</template>
<script>
  import flvjs from 'flv.js'

  export default {
    name: 'FlvPlayer',
    data() {
      return {
        flvPlayer: null
      }
    },
    mounted() {
      if (flvjs.isSupported()) {
        let videoElement = this.$refs.flvPlyer
        this.flvPlayer = flvjs.createPlayer({
          type: 'flv',
          isLive: false,
          // hasAudio: false,
          url: '../assets//video/big_buck_bunny.flv'
        })
        this.flvPlayer.attachMediaElement(videoElement)
        this.flvPlayer.load()
        this.flvPlayer.play()
      }
    },
    methods: {
      play() {
        this.flvPlayer.play()
      }
    }

    // methods: {
    //   // establish flv Video examples
    //   createFlv() {
    //     let url = 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
    //     if (flvjs.isSupported()) {
    //       let videoElement = document.getElementById('videoElement')
    //       this.flvPlayer = flvjs.createPlayer({
    //         type: 'flv',
    //         isLive: true,
    //         hasAudio: false,
    //         url
    //       })
    //       this.flvPlayer.attachMediaElement(videoElement)
    //       this.flvPlayer.load()
    //     }
    //   }
    // }
  }
</script>
<style lang=""></style>
