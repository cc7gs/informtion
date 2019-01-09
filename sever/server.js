const express=require('express')
const UserRouter=require('./user')

const app=express();
//中间件 使用路由 '/user/info'
app.use('/user',UserRouter);

//监听端口,用于判断服务是否开启
app.listen(8888,()=>{
    console.log('Node app start at port 8888');
})
