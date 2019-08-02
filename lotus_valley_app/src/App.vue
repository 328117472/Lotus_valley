<template>
<div id="app">
<div id="nav">
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o" name="home"  replace
    to="/">首页</van-tabbar-item>
    <van-tabbar-item icon="search" name="type">分类</van-tabbar-item>
    <van-tabbar-item icon="search" name="sell">清仓</van-tabbar-item>
    <van-tabbar-item icon="shopping-cart-o" name="friends">购物车</van-tabbar-item>
    <van-tabbar-item icon="friends-o" name="my" replace
    to="/user">我的酒仙</van-tabbar-item>
  </van-tabbar>
</div>
<router-view/>
</div>
</template>
<script>
export default {
  data() {
    return {
      active: 'home'
    };
  }
}
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0
}
</style>