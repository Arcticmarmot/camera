<template>
  <div id="home">
    <h3 class="title">人脸识别</h3>
    <div class="video-wrapper">
      <div class="shade-left"></div>
      <video id="video" width="300" height="150" autoPlay>
        <track default kind="captions" srcLang="en" src="" />
        您的浏览器不支持 video 标签。
      </video>
      <div class="shade-right"></div>
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
    position: relative;
    width: 300px;
    height: 300px;
    border-radius: 200px;
    .shade-left{
      background: white;
      border-color: white;
      position: absolute;
      width: 75px;
      height: 150px;
    }
    .shade-right{
      left: 225px;
      top: 0px;
      background: white;
      border-color: white;
      position: absolute;
      width: 75px;
      height: 150px;
    }
    #video{
      z-index: 10;
      border-radius: 200px;
      object-fit: fill;
    }
  }
  .tip{
    margin-top: 50px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 15px
  }

}
</style>
