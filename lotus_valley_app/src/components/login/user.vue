<template>
  <div>
    <div v-show="!uid">
    <login></login>
    <reg></reg>
    <a href=""></a>
    </div>
    <div v-show="uid">信息</div>
  </div>
</template>

<script>
import login from './login';
import reg from './reg';
export default {
  data() {
    return {
      uid:""
    };
  },
  components: {
    login: login,
    reg:reg
  },
  created() {
    this.uid=sessionStorage.getItem("uid")
    // console.log(sessionStorage)
  },
};
</script>

<style lang="scss" scoped>
</style>