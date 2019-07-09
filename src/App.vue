<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios"
import {listenList} from "api/index"
export default {
    name:"app",
    components:{
      
    },
    async created(){
      let data = await listenList()
      //console.log(data.data.moduleContent.moduleRankDatas);
      let val = data.data.moduleContent.moduleRankDatas;
      //console.log(val);
      for(var i=0; i<val.length; i++){
        //console.log(val[i].title);
        
        let result = val[i].rankingContentInfoList.rankModuleInfoList;
        //console.log(result);
        for(var j=0; j<result.length; j++){
          let lastResult = result[j].albumInfo;
          //console.log(lastResult);
          
        }
        
      }
      
      //this.movieList = data.data.movieList;
    },
}
</script>

<style scope>
#app{
  width: 100%;
  height: 100%;
}
</style>
