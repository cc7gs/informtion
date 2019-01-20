import axios from 'axios';
import {getRedireactPath} from '../utils/index'
//actionTypes

const AUTH_SUCCESS='auth_success'
const LODE_DATA='load_data'
const ERROR_MSG='error_msg';

const initState={
    redirectTo:'',
    isAuth:false,
    user:'',
    type:'', //身份
}
//reducer
export default (state=initState,action)=>{
    switch(action.type){
        case AUTH_SUCCESS:
            return {...state,redirectTo:getRedireactPath(action.payload),isAuth:true,...action.payload}
        case LODE_DATA:
            return {...state,isAuth:true,...action.payload}
        case ERROR_MSG:
            return {...state,isAuth:false,msg:action.msg};
        default:
            return state;
    }
}

//异步action  负责注册请求的函数
export function register({user,password,repeatPwd,type}){
    if(!user||!password){
        return errorMsg('用户名密码不能为空');
    }
    if(password!==repeatPwd){
        return errorMsg('两次密码输入不同');
    }
    return dispatch=>{
        axios.post('/user/register',{user,password,type})
            .then(({status,data})=>{
                if(status===200 && data.code===0){
                    dispatch(authSuccess(data.data));
                }else{
                    dispatch(errorMsg(data.msg))
                }
            })
    }
}
//负责登录请求
export function login({user,password}){
    if(!user||!password){
        return errorMsg('用户名密码不能为空');
    }
    return (dispath)=>{
        axios.post('/user/login',{user,password})
        .then(({status,data})=>{
            if(status===200 && data.code===0){
                dispath(authSuccess(data.data))
            }else{
                dispath(errorMsg(data.msg))
            }
        })
    }
}
export function loadData(userinfo){
    const {password,...data}=userinfo; 
    return {type:LODE_DATA,payload:data};
}
export function update(updateInfo){
    return (dispath)=>{
        axios.post('/user/update',updateInfo)
        .then(({status,data})=>{
            if(status===200 && data.code===0){
                dispath(authSuccess(data.data));
            }else{
                dispath(errorMsg(data.msg));
            }
        })
    }
}
//actioon
function errorMsg(msg){
    return {msg,type:ERROR_MSG};
}

function authSuccess(userinfo){
        //去除密码,即不将密码存放在reducer中
    const {password,...data}=userinfo;    
   return {type:AUTH_SUCCESS,payload:data}
}