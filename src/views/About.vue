
<template>
  <div class="con monitor">
    <video
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
</template>

<script>
  /*  下载的包
     "video.js": "^5.1.9",
     "videojs-flash": "^2.1.0"
     "videojs-swf": "^5.4.2",
  */
    import videojs from 'video.js'
    import 'video.js/dist/video-js.css'
    import 'vue-video-player/src/custom-theme.css'
    import {videoPlayer} from 'vue-video-player'
    import 'videojs-flash'
    import SWF_URL from 'videojs-swf/dist/video-js.swf'
    videojs.options.flash.swf = SWF_URL // 设置flash路径，Video.js会在不支持html5的浏览中使用flash播放视频文件

    export default {
        name: 'videojs',
        components: {
            videoPlayer
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
        data () {
            return {
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
                }
            }
    }
</script>

<style scoped >
   
  .video-js{
    width: 90% !important;
    height: 90%!important;
    margin: 5% auto !important;
    overflow: hidden;
    .vjs-fluid{
      padding-top: 0;
    }
  }
</style>