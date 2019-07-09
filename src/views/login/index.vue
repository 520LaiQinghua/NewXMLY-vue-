<template>
  <div id="login">
    <div id="login-header">
      <router-link class="router-link-active" to="msgLogin" tag="div">手机快捷登录</router-link>
      <router-link to="passLogin" tag="div">账号密码登录</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: "login",
  components:{
  
  },
  data() {
    return {
      font: [
        {
          title: "QQ登录",
          icon: "#icon-QQ"
        },
        {
          title: "微博登录",
          icon: "#icon-weibo"
        }
      ]
    };
  }
};
</script>

<style scope>
#login{
  height: 100%;
}
#login-header {
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #cccccc;
}
#login-header>div {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.35rem;
  color: #999;
  background: #f2f2f2;
  cursor: pointer;
}
#login-header>.router-link-exact-active {
  background: #fff;
  color: #333;
}
#top {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main_top {
  width: 80%;
  height: 3.4rem;
  margin-top: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.main_top > input {
  display: block;
  width: 100%;
  height: 0.9rem;
  border: 1px solid #ccc;
  border-radius: 0.12rem;
  padding: 0.12rem 0.3rem 0.12rem 0.1rem;
  line-height: 0.9rem;
  font-size: 0.24rem;
  color: #f2f2f2;
}
.main_top > button {
  display: block;
  width: 100%;
  height: 0.9rem;
  border-radius: 0.08rem;
  line-height: 0.9rem;
  font-size: 0.28rem;
  color: #fff;
  background: #999;
  border: 0;
}

.main_mid {
  width: 80%;
  margin-top: 0.25rem;
  display: flex;
  justify-content: space-between;
}
.main_mid > a {
  color: #000;
  font-size: 0.27rem;
}

.main_footer {
  width: 3.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 3rem;
}
.main_footer > .othersLoginWay {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.othersLoginWay > span {
  display: block;
  width: 1rem;
  height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f2f2f2;
  border-radius: 50%;
  margin-bottom: 0.25rem;
}
.othersLoginWay > span > svg {
  width: 0.8rem;
  height: 0.8rem;
}
.othersLoginWay > i {
  font-size: 0.27rem;
}
</style>