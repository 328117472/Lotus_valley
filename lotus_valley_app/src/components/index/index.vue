<template>
  <div>
    <van-swipe :autoplay="3000" id="a1">
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
      images:[
        'https://img06.jiuxian.com/bill/2019/0801/12cd1de66ac84f3d817c314eee06d923.jpg',
        'https://img06.jiuxian.com/bill/2019/0801/c25486e095744350a25fc693a5ef92b4.jpg',
        'https://img07.jiuxian.com/bill/2019/0801/f8c6d4c7c9ea4001932635d1993440e2.jpg',
        'https://img09.jiuxian.com/bill/2019/0801/9bae3d570ecf4538b749a2a955a145da.jpg',
        'https://img07.jiuxian.com/bill/2019/0801/5520a1feb5604833ba4e5d1e61d37f40.jpg',
      ]
    }
  },
};
</script>

<style lang="scss" scoped>
#a1{
  width: 200px;height: 300px;
  // background: #f0f
}
</style>