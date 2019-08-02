<template>
  <div>
    <div class="my_header">
      <!-- 顶部标题 -->
      <h2>用户登陆</h2>
    </div>
    <div class="my_login">
      <!-- 登陆框 -->
      <ul>
        <!-- 上面选择需要用什么登陆 -->
        <li>
          <p @click="change_login(1)">账号登陆</p>
        </li>
        <li>
          <p @click="change_login(2)">手机动态登陆</p>
        </li>
      </ul>
      <div class="my_user">
        <div v-show="tid==1" class="icon">
          <!-- 账号登陆框 -->
          <span>
            
          </span>
          <input type="text" placeholder="用户名/邮箱/手机号" />
          <br>
          <span>
            
          </span>
          <input type="password" placeholder="密码"/>
        </div>
        <div v-show="tid==2">
          <!-- 手机动态登陆框 -->
          <span>
            
          </span>
          <input type="text" placeholder="手机登陆" />
          <br>
          <span>123</span>
          <input type="password" placeholder="请点击校验码" />
        </div>
      </div>
    </div>
    <a href="javasrcipt:;" @click="login">登陆</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tid:1,//判断使用哪种登陆
      uid:1//用户uid
    }
  },
  methods: {
    change_login(id){
      //切换登陆
        this.tid=id
      //切换登陆方式
    },
    login(){
    // 登陆及保存uid
      sessionStorage.setItem("uid", this.uid);
    }
  },
};
</script>

<style lang="scss" scoped>
.my_header {
  width: 100%; //宽度100%
  background: #de4943; //背景颜色
  color: #fff; //字体颜色
  height: 40px; //高40px
}
.my_header > h2 {
  font-weight: normal; //取消加粗
  font-size: 18px; //字体大小16px
  text-align: center; //字体居中
  line-height: 40px; //行高;
}
.my_login {
  padding-top: 15px; //上内边距
}
.my_login > ul {
  display: flex; //ul弹性
}
.my_login > ul > li:first-child {
  padding-left: 40px; //右内边距;
}
.my_login > ul > li:last-child {
  padding-left: 125px; //右内边距;
}
.my_login > ul li p {
  font-family: Helvetica, STHeiti STXihei, Microsoft JhengHei, Microsoft YaHei,
    Tohoma, Arial; //字体
  color: #626365; //字体颜色
  font-size: 14px; //字体大小;
}
.my_login > ul > li > p:hover {
  border-bottom: 2px solid red; //p下边框
  color: #de4943; //字体颜色
}
.my_user {
  padding-top: 15px; //上内边距
  text-align: center//居中;
}
.my_user>div{
  position: relative;//相对定位
}
.my_user > div > input {
  width: 315px; //宽
  height: 40px; //高
  border: 1px solid #ddd; //边框
  border-radius: 5px; //圆角;
  padding-left: 40px//左内边距
}
// .my_user > div > input + input {
//   margin-top: 65px;//
// }
.my_user > .icon>span:first-child{
  display: inline-block;//行内快
  height: 25px;//高
  width: 25px;//宽
  background: url('../../imgs/login/loginIcon.png') no-repeat;//背景图
  background-position:0px -30px;//背景图位移
  // z-index: 99
  position:absolute;//绝对定位
  left:20px;
  top:6px
}
.my_user > .icon>span:nth-child(4){
  display: inline-block;//行内快
  height: 25px;//高
  width: 25px;//宽
  background: url('../../imgs/login/loginIcon.png') no-repeat;//背景图
  background-position:0px -60px;//背景图位移
  // z-index: 99
  position:absolute;//绝对定位
  left:20px;
  top:6px
}
</style>