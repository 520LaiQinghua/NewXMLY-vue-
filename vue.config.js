const path = require("path");

module.exports = {
    devServer:{
        open:true,
        proxy:{
            "/abc":{
                target:"https://m.ximalaya.com",
                changeOrigin:true,
                pathRewrite:{
                    "^/abc":""
                }
            }  
        }
    },
    configureWebpack:{
        resolve:{
            alias:{
                "@":path.resolve(__dirname,"./src"),
                "api":path.resolve(__dirname,"./src/api"),
                "common":path.resolve(__dirname,"./src/common"),
                "components":path.resolve(__dirname,"./src/components"),
                "utils":path.resolve(__dirname,"./src/utils"),
                "views":path.resolve(__dirname,"./src/views"),
                "router":path.resolve(__dirname,"./src/router"),
                "store":path.resolve(__dirname,"./src/store")
            }
        }
    }
}