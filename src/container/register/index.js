import React from 'react';
import { List, InputItem, Radio, WhiteSpace, Button } from 'antd-mobile';
import Logo from '../../component/logo/login';

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
    console.log(this.state);
    
  };
  handleChange = (key, v) => {
    this.setState({
      [key]: v
    });
  };
  render() {
    return (
      <>
        <Logo />
        <List>
          <InputItem
              onChange={(v) => this.handleChange('user',v)}
          >用户名</InputItem>
          <InputItem
            onChange={(v) => this.handleChange('password',v)}
          >密码</InputItem>
          <InputItem
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
export default Register;
