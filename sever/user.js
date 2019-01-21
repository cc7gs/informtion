const express = require('express');
const utils = require('utility');
const model = require('./model');
const User = model.getModels('user');

const Router = express.Router();

//用户列表
Router.get('/list', (req, res) => {
  //删除所有文件
  //  User.remove({},function(error,doc){})
  const {type}=req.query
  User.find({type}, (err, doc) => {
    return res.json({code:0,data:doc});
  });
});
//注册
Router.post('/register', (req, res) => {
  const { user, password, type } = req.body;
  User.findOne({ user }, (error, doc) => {
    if (doc) {
      //表示用户存在
      return res.json({ code: 1, msg: '用户名重复' });
    }
    //创建用户 并返回创建用户的信息(id,类型，名称)
    const userModel = new User({ user, type, password: MD5Pwd(password) });
    userModel.save((error, doc) => {
      if (error) {
        return res.json({ code: 1, msg: '后端出错' });
      }
      const { user, type, _id } = doc;
      res.cookie('userid', _id);
      return res.json({ code: 0, data: { user, type, _id } });
    });
    // User.create({ user, password: MD5Pwd(password), type }, (error, doc) => {
    //   if (error) {
    //     return res.json({ code: 1, msg: '网络异常,注册失败' });
    //   } else {
    //     return res.json({ code: 0 });
    //   }
    // });
  });
});

//登录
Router.post('/login', (req, res) => {
  const { user, password } = req.body;
  User.findOne({ user, password: MD5Pwd(password) }, (error, doc) => {
    if (doc) {
      //表示存在该用户
      //设置cookie
      res.cookie('userid', doc._id);
      return res.json({ code: 0, data: doc });
    } else {
      return res.json({ code: 1, msg: '用户名和密码不一致!' });
    }
  });
});

//个人信息
Router.get('/info', (req, res) => {
  //查看用户有没有cookie
  const { userid } = req.cookies;
  if (!userid) {
    return res.json({ code: 1 });
   
  }
  User.findOne({ _id: userid }, function(err, doc) {
    if (err) {
      return res.json({ code: 1, msg: '后端500' });
    }
    if (doc) {
      return res.json({ code: 0, data: doc });
    }
  });
});
//用户完善信息
Router.post('/update',(req,res)=>{
  const {userid}=req.cookies;
  if(!userid){
    return res.json({code:1})
     // retrurn json.dumps({code:1})
  }
  const body=req.body;
  User.findByIdAndUpdate(userid,body,(err,doc)=>{
      if(err){
        return res.json({code:1,msg:'信息保存失败'})
      }
      const data=Object.assign(doc,body);
      return res.json({code:0,data})
  })
})
module.exports = Router;

/**
 * 用于密码加密
 *  */
function MD5Pwd(pwd) {
  const salt = 'imooc-hello-cc@#&cCGrj';
  return utils.md5(utils.md5(pwd + salt));
}
