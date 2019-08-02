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
        '../../imgs/index/c61ea92218d541d894c5c2db4d17a954.jpg',
        '../../imgs/index/a11f4fb8ea2b431b9bd739795954d616.jpg',
        '../../imgs/index/4d3346b5a6474c4c823a28d4a8613ec0.jpg',
        '../../imgs/index/4d3346b5a6474c4c823a28d4a8613ec0.jpg',
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