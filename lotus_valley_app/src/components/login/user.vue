<template>
  <div>
    <div v-show="!uid">
      <!-- 注册及登陆模块 -->
      <router-view></router-view>
      <!--登陆组件-->
      <!-- <reg></reg>注册组件 -->
      <!-- <a href></a> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uid: "" //账号id
    };
  },
  created() {
    this.uid = sessionStorage.getItem("uid");
      if(!this.uid){
      this.$router.push("/user/login")
      }
  },
};
</script>

<style lang="scss" scoped>
</style>