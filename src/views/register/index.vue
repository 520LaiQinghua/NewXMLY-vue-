<template>
  <div id="register-main">
    <div class="code-content">
      <div class="register-acount">
        <input
          type="text"
          placeholder="请输入手机号"
          class="username"
          v-model="userInfo.userName"
          @blur="inputUserName"
        />
        <p class="username-tips">
          <span v-show="tips1">请输入手机号</span>
          <span v-show="tips01">请输入正确手机号</span>
        </p>
        <div class="wordipt">
          <i class="iconfont icon-password"></i>
          <input
            type="text"
            placeholder="6-20位数字,字符或符号  至少两种"
            class="password"
            v-model="userInfo.passWord"
            @blur="inputPassWord"
          />
          <i class="iconfont icon-yincang"></i>
        </div>
        <p class="password-tips">
          <span v-show="tips2">请输入密码</span>
          <span v-show="tips02">请输入正确的密码格式</span>
        </p>
        <div class="emailMsg">
          <i class="iconfont icon-message"></i>
          <input
            type="text"
            placeholder="请输入邮箱"
            class="useremail"
            v-model="userInfo.userEmail"
            @blur="inputUserEmail"
          />
        </div>
        <p class="email-tips">
          <span v-show="tips3">请输入邮箱</span>
          <span v-show="tips03">请输入正确的邮箱格式</span>
        </p>
        <div class="security">
          <i class="iconfont icon-yanzheng"></i>
          <input
            type="text"
            placeholder="请输入验证码"
            class="safecode"
            v-model="userInfo.safeCode"
            @blur="inputSafeCode"
          />
        </div>
        <p class="safecode-tips">
          <span v-show="tips4">验证码不能为空</span>
          <span v-show="tips04">验证码错误</span>
        </p>
      </div>
      <div class="btom">
        <button class="register" @click="handleRegister()">立即注册</button>
        <p class="agreement">
          <input type="checkbox" class="checked">
          本人已阅读并同意
          <a href="https://m.ximalaya.com/passport/register_rule">注册协议</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      flag: false,
      tips1: false,
      tips01:false,
      tips2: false,
      tips02:false,
      tips3: false,
      tips03:false,
      tips4: false,
      tips04:false,
      userInfo: {
        userName: "",
        passWord: "",
        userEmail: "",
        safeCode: ""
      }
    };
  },
  
  methods: {
    inputUserName() {
      var userNameReg =/^(1|\+861)[3-9][0-9]{9}$/g;
      if (!this.userInfo.userName == '') {
        if (userNameReg.test(this.userInfo.userName)) {
          this.tips01 = false;
        }else{
          this.tips1 = false;
          this.tips01 = true;
        }
      } else {
        this.tips1 = true;
        this.tips01 = false;
      }
    },
    inputPassWord() {
      var passWordReg = /^[0-9a-zA-Z]{6,18}$/g;
      if (!this.userInfo.passWord == '') {
        if (passWordReg.test(this.userInfo.passWord)) {
          this.tips02 = false;
        }else{
          this.tips2 = false;
          this.tips02 = true;
        }
      } else {
        this.tips2 = true;
        this.tips02 = false;
      }
    },
    inputUserEmail() {
      if (this.userInfo.userName == "") {
        this.tips3 = true;
      } else {
        this.tips3 = false;
      }
    },
    inputSafeCode() {
      if (this.userInfo.userName == "") {
        this.tips4 = true;
      } else {
        this.tips4 = false;
      }
    },
    handleRegister(){

    }
  },
  created() {}
};
</script>

<style scope>
#register-main {
  width: 100%;
  height: 100%;
}
.code-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.register-acount {
  width: 80%;
  margin-top: 0.8rem;
}
.register-acount > .username,
.wordipt > .password,
.emailMsg > .useremail,
.security > .safecode {
  display: block;
  width: 100%;
  height: 0.9rem;
  border: 1px solid #ccc;
  border-radius: 0.12rem;
  padding: 0.12rem 0.3rem 0.12rem 0.5rem;
  line-height: 0.9rem;
  font-size: 0.25rem;
  color: #333;
  box-sizing: border-box;
  border-color: #ccc;
}
.wordipt,
.security,
.emailMsg {
  position: relative;
}
.wordipt > .icon-password,
.security > .icon-yanzheng,
.emailMsg > .icon-message {
  position: absolute;
  top: 0.09rem;
  left: 8px;
  font-size: 0.27rem;
}
.wordipt > .icon-yincang {
  position: absolute;
  top: 10px;
  right: 13px;
  font-size: 0.27rem;
}
.btom {
  width: 80%;
  margin-top: 0.25rem;
}
.btom > .register {
  display: block;
  width: 100%;
  height: 0.9rem;
  border-radius: 0.08rem;
  line-height: 0.9rem;
  font-size: 0.28rem;
  color: #fff;
  background: #c33;
  border: 0;
}
.register-acount > p {
  height: 0.45rem;
  color: red;
}
.btom > .agreement {
  margin-top: 0.18rem;
  font-size: 0.25rem;
}
.checked{
  width: .25rem;
  height: .25rem;
  border: 0;
}
.btom > .agreement > a {
  color: #c33;
}
</style>