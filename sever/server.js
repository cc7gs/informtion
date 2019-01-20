const express=require('express')
//导入 cookie、和接受post插件
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');

const UserRouter=require('./user')

const app=express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(bodyParser.json());
//中间件 使用路由 '/user/info'
app.use('/user',UserRouter);

//监听端口,用于判断服务是否开启
app.listen(9999,()=>{
    console.log('Node app start at port 9999');
})
