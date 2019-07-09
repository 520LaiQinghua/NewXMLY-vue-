<template>
  <div id="myfocus">
    <header id="focusheader">
      <p>我听</p>
      <i class="iconfont icon-fangdajing"></i>
    </header>
    <div id="focusmain">
      <div class="main_inner">
        <div class="focus_top">
          <router-link to="subscribe" tag="p">订阅</router-link>
          <router-link to="recommend" tag="p">推荐</router-link>
         
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "myFocus",
  components:{

  }
};
</script>

<style scope>
#myfocus {
  height: 100%;
}
#focusheader {
  width: 100%;
  height: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0.15rem 0.3rem;
  background: #ff5000;
}
#focusheader > p {
  font-size: 0.35rem;
  color: #fff;
}
#focusheader > .iconfont {
  font-size: 0.35rem;
  position: absolute;
  top: 0.12rem;
  right: 0.3rem;
  color: #fff;
}

#focusmain {
  width: 100%;
  height: 92%;
  padding-bottom: 1.2rem;
}
.main_inner {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 1.2rem;
}
.focus_top {
  height: 1rem;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 0.25rem;
}
.focus_top>.router-link-active{
  font-weight: 600;
  scale: 2;
  position: relative;
}
.focus_top>.router-link-active::after{
  content: '';
  position: absolute;
  top: .88rem;
  left: 5px;
  width: .5rem;
  height: .1rem;
  background:#c33;
  border-radius: .05rem
}
.focus_top > p {
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 0.3rem;
  font-size: 0.3rem;
}

.main_content {
  height: 100%;
  overflow-y: auto;
}
.main_content > ul {
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.main_content > ul > li {
  padding: 0.25rem 0.2rem 0.45rem;
  display: flex;
  border-bottom: 1px solid #ccc;
  position: relative;
}
.main_content > ul > li > .item_pic > img {
  width: 1.5rem;
  height: 1.5rem;
  display: block;
  border-radius: 0.1rem;
  margin-right: 0.2rem;
}
.main_content > ul > li > .item_des {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.item_des > h4 {
  font-size: 0.3rem;
}
.item_des > p {
  color: #666;
  font-size: 0.25rem;
}
.item_more > p {
  position: absolute;
  right: 0.3rem;
  bottom: 0.35rem;
  font-size: 0.7rem;
  color: #c3c3c3;
}
</style>