import React from 'react';
import { List, InputItem, Radio, WhiteSpace, Button } from 'antd-mobile';
import Logo from '../../component/logo/logo';
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {register} from '../../redux/user.redux'
const RadioItem = Radio.RadioItem;

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'boss',
      user:'',
      password:'',
      repeatPwd:'',

    };
  }
  handleRegister = () => {
    const {register}=this.props;
    register(this.state);
    
  };
  handleChange = (key, v) => {
    this.setState({
      [key]: v
    });
  };
  render() {
    const {msg,redirectTo}=this.props;
    return (
      <>
      {redirectTo?<Redirect to={redirectTo}></Redirect>:null}
        <Logo />
        <List>
          {msg?<p className="error-msg">{msg}</p>:''}
          <InputItem
              onChange={(v) => this.handleChange('user',v)}
          >用户名</InputItem>
          <InputItem
            type="password"
            placeholder="请输入密码"
            onChange={(v) => this.handleChange('password',v)}
          >密码</InputItem>
          <InputItem
            type='password'
            onChange={(v) => this.handleChange('repeatPwd',v)}
          >确认密码</InputItem>
          <RadioItem
            checked={this.state.type === 'cow'}
            onChange={() => this.handleChange('type', 'cow')}
          >
            {' '}
            牛人
          </RadioItem>
          <RadioItem
            checked={this.state.type === 'boss'}
            onChange={() => this.handleChange('type', 'boss')}
          >
            Boss
          </RadioItem>
        </List>
        <WhiteSpace />
        <Button type="primary" onClick={this.handleRegister}>
          注册
        </Button>
      </>
    );
  }
}
const mapStateProps=(state)=>{
  return {...state.user};
}
const mapDispathProps={
  register:register
}
export default connect(mapStateProps,mapDispathProps)(Register);
