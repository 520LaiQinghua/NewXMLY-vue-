<template>
  <div id="container">
    <header id="mine-header">
      <div class="msg">
        <i class="iconfont icon-message"></i>
      </div>
      <div class="setting">
        <i class="iconfont icon-setting"></i>
      </div>
    </header>
    <div id="mine-main">
      <div class="acount-detail">
        <div class="headImg">
          <img
            src="//imagev2.xmcdn.com/group50/M02/C3/30/wKgKnVv1BnbAMuEyAAEnQFB5bCQ387.jpg!op_type=3&columns=144&rows=144&magick=webp"
          />
        </div>
        <div class="acount">
          <strong class="acount-name">LittleStr星</strong>
          <p>
            粉丝
            <span>0</span> | 关注
            <span>0</span>
          </p>
        </div>
      </div>
      <div class="myTools">
        <ul>
          <li v-for="(item,index) in myTools" :key="index">
            <i class="iconfont" v-html="item.icon"></i>
            <p>{{item.title}}</p>
          </li>
        </ul>
      </div>
      <div class="myservice">
        <strong>我的服务</strong>
        <ul>
          <router-Link v-for="(item,index) in myService" :key="index" :to="item.path" tag="li" :class="item.class">
            <i class="iconfont" v-html="item.icon"></i>
            <p>{{item.title}}</p>
          </router-Link>
        </ul>
      </div>
      <div class="necessTools">
        <strong>必备工具</strong>
        <ul>
          <li v-for="(item,index) in necessTools" :key="index">
            <i class="iconfont" v-html="item.icon"></i>
            <p>{{item.title}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mine",
  data() {
    return {
      myTools: [
        {
          title: "我要录音",
          icon: "&#xe61b;"
        },
        {
          title: "我要直播",
          icon: "&#xe66e;"
        },
        {
          title: "我要作品",
          icon: "&#xe61d;"
        },
        {
          title: "创作中心",
          icon: "&#xe67d;"
        }
      ],
      myService:[
          {
            title: "我的钱包",
            icon: "&#xe62a;",
            class:"myWallet",
            path:"/wallet"
          },
          {
            title: "我的订单",
            icon: "&#xe629;",
            class:"myOrder",
            path:"/order"
          },
          {
            title: "我的收听",
            icon: "&#xe71c;",
            class:"myFocus",
            path:"/myFocus"
          },
          {
            title: "我的等级",
            icon: "&#xe608;",
            class:"myLevel",
            path:"/myLevel"
          },
          {
            title: "我的积分",
            icon: "&#xe6a6;",
            class:"myJifen",
            path:"/myJifen"
          },
          {
            title: "我的圈子",
            icon: "&#xe607;",
            class:"myRelationship",
            path:"/myRelationship"
          },
          {
            title: "我的客服",
            icon: "&#xe60e;",
            class:"myKufu",
            path:"/myKufu"
          },
          {
            title: "推荐有礼",
            icon: "&#xe612;",
            class:"myRecommon",
            path:"myRecommon"
          }
      ],
      necessTools:[
           {
            title: "扫一扫",
            icon: "&#xe634;" 
          },
          {
            title: "夜间模式",
            icon: "&#xe617;" 
          },
          {
            title: "驾驶模式",
            icon: "&#xe643;" 
          },
          {
            title: "定时关闭",
            icon: "&#xe616;" 
          },
          {
            title: "未成年模式",
            icon: "&#xe610;" 
          },
      ]
    };
  },
  methods: {
   
  },
};
</script>

<style scope>
#container {
  height: 100%;
  overflow-y: auto;
  background: #f2f2f2;
}
#mine-header {
  width: 100%;
  height: 1.2rem;
  background: #ff5500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 0.25rem;
}
#mine-header > .msg > .icon-message,
#mine-header > .setting > .icon-setting {
  font-size: 0.42rem;
  color: #fff;
}
#mine-main {
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 1.2rem;
  bottom: 1.2rem;
  overflow-y: auto;
}
.acount-detail {
  width: 100%;
  height: 2.4rem;
  display: flex;
  background: #fff;
  padding: 0.3rem 0.1rem;
}
.acount-detail > .headImg {
  width: 1.8rem;
  height: 1.8rem;
  border: 1px solid #fff;
  border-radius: 50%;
  margin-right: 0.2rem;
}
.acount-detail > .headImg > img {
  width: 1.8rem;
  height: 1.8rem;
  border: 1px solid #ccc;
  border-radius: 50%;
}
.acount-detail > .acount {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.2rem 0;
}
.acount-detail > .acount > .acount-name {
  font-size: 0.35rem;
}
.acount-detail > .acount > p {
  width: 2rem;
  line-height: 0.5rem;
  display: flex;
  justify-content: space-around;
  color: #ccc;
}

.myTools {
  width: 100%;
  border-radius: 0.1rem;
  padding: 0.25rem;
  background: #fff;
  margin: 0.25rem 0;
  box-shadow: 0 0 0 #000;
}
.myTools > ul {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 1;
}
.myTools > ul > li {
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.myTools > ul > li > .iconfont {
  font-size: 0.5rem;
  color: #cc3333;
}
.myTools > ul > li > p {
  font-size: 0.25rem;
  color: #c3c3c3;
}

.myservice {
  width: 100%;
  border-radius: 0.1rem;
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 0.15rem 0;
}
.myservice > strong {
  font-size: 0.25rem;
  padding-left: 0.15rem;
}
.myservice > ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.myservice > ul > li {
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.myservice > ul > li > .iconfont {
  font-size: 0.4rem;
}
.myservice > ul > li > .icon-shoucang {
  color: #fff;
}
.myservice > ul > li > p {
  font-size: 0.25rem;
  color: #c3c3c3;
}

.necessTools {
  width: 100%;
  border-radius: 0.1rem;
  display: flex;
  flex-direction: column;
  background: #fff;
  margin: 0.25rem 0;
  padding: 0.15rem 0;
}
.necessTools > strong {
  font-size: 0.25rem;
  padding-left: 0.15rem;
}
.necessTools > ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.necessTools > ul > li {
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.necessTools > ul > li > .iconfont {
  font-size: 0.5rem;
}
.necessTools > ul > li > p {
  font-size: 0.25rem;
  color: #c3c3c3;
}
</style>