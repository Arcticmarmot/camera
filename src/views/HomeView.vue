<template>
  <div id="home">
    <h1>camera</h1>
    <div class="video-wrapper">
      <video id="video" autoPlay>
        <track default kind="captions" srcLang="en" src="" />
        您的浏览器不支持 video 标签。
      </video>
    </div>

    <canvas id="canvas" width="420px" height="200px" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
  },
})
export default class HomeView extends Vue {
  mounted(){
    let video: any = document.getElementById('video');
    // 得到摄像头api
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: { width: 420, height: 200 } })
      .then(
      (stream) => {
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error(err);
      });
    }
  }
}
</script>
<style lang="less">
#home{
  .video-wrapper{
    #video{
      width: 800px;
      height: 500px;
    }
  }

}
</style>
