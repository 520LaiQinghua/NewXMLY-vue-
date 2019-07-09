<template>
  
    <div id="top">
      <div class="main_top">
        <input type="text" class="username" placeholder="请输入手机号"/>
        <br />
        <input type="text" class="password" placeholder="验证码"/>
        <br />
        <button type="button" class="login">立即登录</button>
      </div>
      <div class="main_mid">
        <router-link class="myAcount" to="/mine" tag="a">查看我的喜马拉雅账号</router-link>
        <router-link class="registerAcount" to="/register" tag="a">注册账号</router-link>
      </div>
      <div class="main_footer">
        <div class="othersLoginWay" v-for="(item,index) in font" :key="index">
          <span>
            <svg class="icon icon_qq" aria-hidden="true">
              <use :xlink:href="item.icon" />
            </svg>
          </span>
          <i>{{item.title}}</i>
        </div>
      </div>
    </div>
  
</template>

<script>
export default {
  name: "msgLogin",
  data() {
      return {
          font:[
              {
                  title:"QQ登录",
                  icon:"#icon-QQ"
              },
              {
                  title:"微博登录",
                  icon:"#icon-weibo"
              }
          ]
      }
  },
};
</script>

<style scope>

</style>