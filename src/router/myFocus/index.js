
export default {
    path:"/myFocus",
    component:()=>import("views/myFocus"),
    name:"myFocus",
    redirect:"/myfocus/subscribe",
    children:[
        {
            path:"subscribe",
            component:()=>import("components/Hu/subscribe"),
            name:"subscribe"
        },
        {
            path:"recommend",
            component:()=>import("components/Hu/recommend"),
            name:"recommend"
        }
    ]
}