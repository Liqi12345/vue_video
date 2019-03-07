<template>
  <div id="home">






                  <div class="title">
                      <img src="../assets/image/monitor.png" alt="">
                      <span>视屏监控 </span>
                  </div>
                  <div class="btm" style="    border: 0.08rem solid #3FFDFC;padding:0;;width: 80%;height: 50%;">
                      <div class="con monitor" style="width: 100%;height: 100%;">
                          <video
                                  style="    width:100%;height: 100%;padding-top: 0%;"
                                  id="my-player1"
                                  class="video-js
                                vjs-default-skin
                                vjs-big-play-centered"
                                  preload="auto"
                                  width="500"
                                  height="400"
                                  data-setup='{ "html5" : { "nativeTextTracks" : false } }'>

                          </video>

                      </div>
                  </div>



  </div>
</template>

<script>
// @ is an alias to /src

import videojs from 'video.js'

import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
import 'videojs-flash'
import SWF_URL from 'videojs-swf/dist/video-js.swf'
videojs.options.flash.swf = SWF_URL // 设置flash路径，Video.js会在不支持html5的浏览中使用flash播放视频文件

export default {
  name: 'home',
    data(){
      return{
          options1: {
              autoplay: true, // 是否自动播放
              muted: false, // 是否静音
              controls: false,
              fluid: true, // 宽高自适应
              sources: [{
                  src: 'rtmp://94.191.15.122:1935/flv/test',
                  type: 'rtmp/flv'
              }]
          },
              times: '',
              run: '',
              stock: '',
              Color: ['#FFC206', '#1BD861', '#BF0D4C', '#0f63d5', '#c40b96', '#C61946', '#16d5ce'],
              data1: [],
              data2: [],
              status: [],
              speed: [],
              wait: [],
              ing: [],
              over: []
          }

    },
    mounted(){

        this.player1 = videojs('my-player1', this.options1, function onPlayerReady() {
            videojs.log('播放器已经准备好了!')
            this.on('play', function() {
                console.log('开始/恢复播放')
            })
           this.on('pause', function() {
               console.log('暂停播放')
           })
           this.on('ended', function() {
               console.log('结束播放')
           })
        })
        const vm = this
        setTimeout(function () {
            vm.player1.player()
        },1000)
    },
  components: {

  },



    created(){

    },
    methods:{
        playVideo() {

            this.$refs['playerObj'].videoSrc = 'rtmp://94.191.15.122:1935/flv/test'
            this.$refs['playerObj'].playerOptions.sources[0].src = 'rtmp://94.191.15.122:1935/flv/test'
        }
    }
}
</script>
<style scoped  lang="scss">




</style>
