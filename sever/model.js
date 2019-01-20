const mongoose=require('mongoose');
// 链接mongo 并且使用mashroom这个集合
const DB_URL='mongodb://localhost:27017/mashroom'
mongoose.connect(DB_URL);

const models={
    user:{
        'user':{type:String,require:true},
        'password':{type:String,require:true},
        'type':{type:String,require:true},
        //头像
        'avatar':{type:String},
        //个人简介
        'desc':{type:String},
        'title':{type:String},
        //boss 字段
        'company':{type:String},
        'money':{type:String}

    },
    chart:{

    }
}
//注册字段
for(let m in models){
    mongoose.model(m,new mongoose.Schema(models[m]))
}
//暴露方法
module.exports={
    getModels:(name)=>{
        return mongoose.model(name);
    }
}