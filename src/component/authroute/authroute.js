import React from 'react';
import {withRouter} from 'react-router-dom'
import axios from 'axios';

 class AuthRoute extends React.Component{
    componentDidMount(){
        const {history,location}=this.props;
        axios.get('/user/info')
        .then(({data,status})=>{
            if(status===200){
               if(data.code===0){
                   //登录成功
               }else{
                   //登录失败
                    history.push('/login');        
               }
            }
        })
    }
    render(){
        return null;
    }
}
export default withRouter(AuthRoute);