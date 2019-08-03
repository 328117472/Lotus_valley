<template>
  <div>
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" @change="onChange">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image.img_src" />
      </van-swipe-item>
    </van-swipe>
    <!-- 宫格导航 -->
    <van-grid :border="false" :column-num="5" :center="false">
      <van-grid-item v-for="(swipe, index) in swipes" :key="index">
        <van-image :src="swipe.img_src" />
      </van-grid-item>
    </van-grid>
    <van-row>
      <van-col span="24">
        <a href="javascript:;">
          <img
            src="https://img07.jiuxian.com/bill/2019/0801/f2200c36f9f74e01896aac68d4b1d187.jpg"
            alt
          />
        </a>
      </van-col>
    </van-row>
    <van-row>
      <van-col span="12">
        <a href="javascript:;">
          <img
            src="https://img09.jiuxian.com/bill/2019/0801/ecd75ceabe0f4e2a86d0ea11220760e2.jpg"
            alt
          />
        </a>
      </van-col>
      <van-col span="12">
        <a href="javascript:;">
          <img
            src="https://img07.jiuxian.com/bill/2019/0801/ca8df0b009a7492f8e326ec6c289a958.jpg"
            alt
          />
        </a>
      </van-col>
    </van-row>

    <!-- 头条 -->
    <van-row>
      <van-col span="3" style="margin:0.7rem">
        <a href="javascript:;">
          <img
            src="https://img09.jiuxian.com/bill/2018/0131/dc91033804f74f8c82bd8feec19ac915.jpg"
            alt
          />
        </a>
      </van-col>
      <van-col span="8" style="margin:0.2rem">
        <van-swipe style="height: 20px;" vertical :autoplay="2000">
          <van-swipe-item>1</van-swipe-item>
          <van-swipe-item>2</van-swipe-item>
          <van-swipe-item>3</van-swipe-item>
          <van-swipe-item>4</van-swipe-item>
          
        </van-swipe>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      // 轮播图片
      images: [
        {
          id: 0,
          name: "狂欢节",
          img_src: require("../../imgs/index/c61ea92218d541d894c5c2db4d17a954.jpg")
        },
        {
          id: 1,
          name: "10斤大坛会场",
          img_src: require("../../imgs/index/a11f4fb8ea2b431b9bd739795954d616.jpg")
        },
        {
          id: 2,
          name: "超级买手",
          img_src: require("../../imgs/index/9bae3d570ecf4538b749a2a955a145da.jpg")
        },
        {
          id: 3,
          name: "十年老酒会场",
          img_src: require("../../imgs/index/4d3346b5a6474c4c823a28d4a8613ec0.jpg")
        },
        {
          id: 4,
          name: "整箱会场",
          img_src: require("../../imgs/index/d37096ce34b84e12882ac2b84ef97dc1.jpg")
        },
        {
          id: 5,
          name: "99元封顶会场",
          img_src: require("../../imgs/index/9b9b7199033145018ec93226956043b4.jpg")
        },
        {
          id: 6,
          name: "红洋会场",
          img_src: require("../../imgs/index/0721a85f2a5a45599e3fe2c3d3727acb.jpg")
        },
        {
          id: 7,
          name: "品牌会场",
          img_src: require("../../imgs/index/b5bfe5087d2a47158bbfd530d19db9a8.jpg")
        }
      ],
      swipes: [
        {
          id: 0,
          name: "白酒",
          img_src: require("../../imgs/index/ef2f3afdc2a34a5c9a28f82c3c69b929.jpg")
        },
        {
          id: 1,
          name: "葡萄酒",
          img_src: require("../../imgs/index/7108a690c9664a398d371dc535d37e5a.jpg")
        },
        {
          id: 2,
          name: "洋酒",
          img_src: require("../../imgs/index/e16bed30be8e4b33ba67181c4c763d05.jpg")
        },
        {
          id: 3,
          name: "啤酒",
          img_src: require("../../imgs/index/1da0756d604a407aa8d6710d880bfcb7.jpg")
        },
        {
          id: 4,
          name: "门店加盟",
          img_src: require("../../imgs/index/af18da91cb4d4fe6806ab48c34217d7f.jpg")
        },
        {
          id: 5,
          name: "领劵",
          img_src: require("../../imgs/index/6a0c6680098245bdbaf237b13b26105d.jpg")
        },
        {
          id: 6,
          name: "赚钱",
          img_src: require("../../imgs/index/75f4fa25d9c241d5908277264c0b407a.gif")
        },
        {
          id: 7,
          name: "附近门店",
          img_src: require("../../imgs/index/06885c37a8424109a1e1d61b17468cb3.jpg")
        },
        {
          id: 8,
          name: "拼团",
          img_src: require("../../imgs/index/a032029908d3423e84d13fe5de6acb98.jpg")
        },
        {
          id: 9,
          name: "值得买",
          img_src: require("../../imgs/index/b71d3a63a48e44e3bb585d918361c458.jpg")
        }
      ]
    };
  },
  created() {},
  methods: {
    onChange(index) {
      this.current = index;
    }
  }
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
  touch-action: none;
  vertical-align: -4px;
}
// 轮播指示器 (无效)
/* .van-swipe__indicators {
    position: absolute;
    left: 78% !important;
*/
// 宫格取消填充 (无效)
.van-grid-item__content {
  padding: 0;
}
</style>