import http from "utils/http.js"

export const listenList = ()=>http("get","/abc/m-revision/page/index/queryIndexTabContent?moduleKey=tuijian")