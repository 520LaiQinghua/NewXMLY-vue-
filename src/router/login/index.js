
export default {
    path:"/login",
    component:()=>import("views/login"),
    name:"login",
    redirect:"/login/msgLogin",
    children:[
        {
            path:"passLogin",
            component:()=>import("components/Hu/passLogin"),
            name:"passLogin"
        },
        {
            path:"msgLogin",
            component:()=>import("components/Hu/msgLogin"),
            name:"msgLogin"
        }
    ]
}