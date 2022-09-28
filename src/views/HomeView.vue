<template>
  <div id="home">
    <h3 class="title">人脸识别</h3>
    <div class="video-wrapper">
      <div class="shade"></div>
      <video id="video" autoPlay playsinline muted >
        <track default kind="captions" srcLang="en" src="" />
        您的浏览器不支持 video 标签。
      </video>
    </div>
    <div class="tip"><strong>请眨眼</strong></div>
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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .video-wrapper{
    margin-top: 50px;
    width: 300px;
    height: 300px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .shade{
      z-index: -1;
      position: absolute;
      width: 300px;
      height: 300px;
      border-radius: 500px;
      box-shadow: 0 0 0 1000px white;
    }
    #video{
      z-index: -2;
      width: 500px;
    }
  }
  .tip{
    margin-top: 50px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 15px
  }

}
</style>
