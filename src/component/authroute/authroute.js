import React from 'react';
import {withRouter} from 'react-router-dom'
import axios from 'axios';
import {loadData} from '../../redux/user.redux'
import {connect} from 'react-redux'
 class AuthRoute extends React.Component{
    componentDidMount(){
        const {history}=this.props;
        axios.get('/user/info')
        .then(({data,status})=>{
            if(status===200){
               if(data.code===0){
                   //登录成功
                   //将用户信息写入 redux
                   this.props.loadData(data.data);
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
const mapDispathProps={
    loadData
}
export default connect(null,mapDispathProps)(withRouter(AuthRoute));