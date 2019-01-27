import axios from 'axios';
/**
 * 存放聊天信息
 */
const CHART_LIST='chart_list';
const initState={
    userList:[]
}
 export default (state=initState,action)=>{
    switch(action.type){
        case CHART_LIST:
            return {...state,userList:action.payload}
        default:
            return state
    }    
 }
 
 function userList(userinfo){
    const {password,...data}=userinfo;  
     return {type:CHART_LIST,payload:data};
 }

 //获取用户信息列表的异步函数
 export function getUserList(type){
     return dispatch=>{
         axios.get('/user/list?type='+type)
         .then(({ status, data: { code, data } })=>{
             if(status=== 200 && code === 0){
                 dispatch(userList(data));
             }
         })
     }
 }
