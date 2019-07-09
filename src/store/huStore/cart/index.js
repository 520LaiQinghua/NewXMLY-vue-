import axios from "axios"

const state = {
    goods:[],
    selectAll:true
}



const actions = {
    getActionGoods({commit}){
        axios({
            method:"get",
            url:"http://localhost:3000/goods"
        }).then((data)=>{
            commit("getMutationsGoods",data.data)
        })
    }
}

const mutations = {
    //获取数据
    getMutationsGoods(state,params){
        params.map((item)=>{
            item.flag = true
        })
        state.goods = params;
    },
    //全选，反选
    handleToggle(state){
        state.selectAll = !state.selectAll;

        state.goods.map((item)=>{
            item.flag = state.selectAll;
        })
    },
    //商品选择
    handleToggleGoods(state,index){
        //点击的时候反选
        state.goods[index].flag = !state.goods[index].flag;
        var bStop = true;
        for(var i=0; i<state.goods.length; i++){
            if(!state.goods[i].flag){
                bStop = false;
                break;
            }
        }
        state.selectAll = bStop;
    }
}

const getters = {
    count(state){
        let goodsNum = 0,goodsPrice = 0;

        for (var i = 0; i < state.goods.length; i++) {
            if (state.goods[i].flag) {
                goodsNum+= state.goods[i].num;
                goodsPrice+= state.goods[i].num * state.goods[i].price
            }
        }
        return {
            goodsPrice,
            goodsNum
        }

    }
}

export default {
    state,
    actions,
    mutations,
    getters,
    namespaced:true
}