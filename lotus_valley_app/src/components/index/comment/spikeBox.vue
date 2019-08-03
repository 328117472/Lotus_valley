<template>
  <div>
    <van-row>
      <van-col>
        <h3>掌上秒拍</h3>
      </van-col>
      <van-col>
        <span>距结束</span>
      </van-col>
      <van-col span="8">
        <van-count-down :time="time">
          <template v-slot="timeData">
            <span class="item">{{ timeData.hours }}</span>:
            <span class="item">{{ timeData.minutes }}</span>:
            <span class="item">{{ timeData.seconds }}</span>
          </template>
        </van-count-down>
      </van-col>
      <van-col>
        <a href="javascript:;">
          <span>更多商品的你来抢！
            <van-icon name="arrow" />
          </span>
        </a>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
       time: 2 * 47 * 60 * 1000
    };
  }
};
</script>

<style lang="scss" scoped>
.van-col {
  margin: 0.5rem 0.2rem 0 0.7rem;
  line-height: 1.5rem;
}
// 倒计时样式
.item {
  display: inline-block;
  width: 22px;
  margin-right: 5px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #1989fa;
}
div{
  color:#666;
  font-size: 16px;
  font-family: "黑体";
}
a{
  color:#666;
}
h3{
  font-weight: bold;  
  line-height: 1.6rem;
}
.van-icon{
  width: 1rem;
  height: 1rem;
  background:#858585;
  color:#fff;
  font-size: 12px;
  border-radius: 50%;
  text-align: center;
  line-height: 1rem;
}
</style>