import React from 'react'
import { NavBar } from 'antd-mobile';
import {connect} from 'react-redux'
import {Route,Switch} from 'react-router-dom'
import {NavLinkBar} from '../../component'
class DashBoard extends React.Component{
    
    render(){
        const {user}=this.props;
        console.log(user);
        
        const {pathname}=this.props.location;
        const navList=[
            {
				path:'/boss',
				text:'牛人',
				icon:'boss',
				title:'牛人列表',
				component:Cow,
				hide:user.type==='cow'
            },
            {
				path:'/cow',
				text:'Boss',
				icon:'job',
				title:'Boss列表',
				component:Boss ,
				hide:user.type==='boss'
            },
            {
				path:'/msg',
				text:'消息',
				icon:'msg',
				title:'消息列表',
				component:Msg
            },
            {
				path:'/me',
				text:'我',
				icon:'user',
				title:'个人中心',
				component:User
			}
        ]
        return(
            <div>
                <NavBar className='fixd-header'>{navList.find(v=>v.path===pathname).title}</NavBar>
                <div style={{marginTop:45}}>
                    <Switch>
                        {
                            navList.map(item=>(
                                <Route path={item.path} key={item.path} component={item.component}></Route>
                            ))
                        }
                    </Switch>
                </div>
                <NavLinkBar navList={navList}></NavLinkBar>
            </div>
        )
    }
}
const mapStateProps=(state)=>({
    user:state.user
})
export default connect(mapStateProps,null)(DashBoard);

function Boss(){
    return 'boss'
}
function Cow(){
    return 'cow'
}
function Msg(){
    return 'msg'
}
function User(){
    return 'user'
}