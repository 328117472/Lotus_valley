<template>
  <div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
     images: [
        "https://img08.jiuxian.com/bill/2019/0801/c61ea92218d541d894c5c2db4d17a954.jpg",
        "https://img09.jiuxian.com/bill/2019/0802/a11f4fb8ea2b431b9bd739795954d616.jpg",
        "https://img08.jiuxian.com/bill/2019/0801/4d3346b5a6474c4c823a28d4a8613ec0.jpg",
        "https://img09.jiuxian.com/bill/2019/0801/9bae3d570ecf4538b749a2a955a145da.jpg",
        "https://img07.jiuxian.com/bill/2019/0802/d37096ce34b84e12882ac2b84ef97dc1.jpg",
        "https://img10.jiuxian.com/bill/2019/0801/9b9b7199033145018ec93226956043b4.jpg",
        "https://img10.jiuxian.com/bill/2019/0801/0721a85f2a5a45599e3fe2c3d3727acb.jpg",
        "https://img08.jiuxian.com/bill/2019/0801/b5bfe5087d2a47158bbfd530d19db9a8.jpg"
      ]
    }
  },
  created() {
    console.log(this.images);
  }
};
</script>

<style lang="scss" scoped>
#a1 {
  width: 400px;
  height: 400px;
}
img {
  width: 100%;
  height: 100%;
  touch-action: none;
}
</style>