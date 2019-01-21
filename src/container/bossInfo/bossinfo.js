import React from 'react';
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile';
import { Redirect } from 'react-router-dom';
import {AvatarSelector} from '../../component'
import {update} from '../../redux/user.redux' 
import {connect} from 'react-redux'
class BossInfo extends React.Component {
  constructor(props){
    super(props);
    this.state={
      title:'',
			desc:'',
			company:'',
			money:''
    };
  }
  handlechange=(key,value)=>{
    this.setState({
      [key]:value
    })
  }
  //保存用户选择的图片
  selectAvatar=(text)=>{
    this.setState({
      avatar:text
    })
  }
  //保存用户完善的信息
  saveBossInfo=()=>{
    const {update}=this.props
    update(this.state);
  }
  render() {
    const {redirectTo}=this.props;
    const {pathname}=this.props.location;
    return (
      <div>
       {redirectTo&&pathname!==redirectTo ? <Redirect to={redirectTo} /> : null}
       
        <NavBar mode="dark">Boss信息页面</NavBar>
        <AvatarSelector selectAvatar={this.selectAvatar}></AvatarSelector>
        <InputItem onChange={v => this.handlechange('title', v)}>
          招聘职位
        </InputItem>
        <InputItem onChange={v => this.handlechange('company', v)}>
          公司名称
        </InputItem>
        <InputItem onChange={v => this.handlechange('money', v)}>
          职位薪资
        </InputItem>
        <TextareaItem
          onChange={v => {
            this.handlechange('desc', v);
          }}
          title='职位描述'
         autoHeight
         rows={4}
        />
        <Button 
        onClick={this.saveBossInfo}
        type='primary'>保存</Button>
      </div>
    );
  }
}
const mapStateProps=(state)=>({...state.user})

const mapDispatchProps={
  update
}
export default connect(mapStateProps,mapDispatchProps)(BossInfo);
