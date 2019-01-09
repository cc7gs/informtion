import React from 'react';
import { Button, InputItem, WingBlank, WhiteSpace } from 'antd-mobile';
import Logo from '../../component/logo/login';
class Login extends React.Component {
  handleRegister = () => {
    this.props.history.push('/register');
  };
  render() {
    return (
      <>
        <Logo />
        <WingBlank>
          <InputItem>用户</InputItem>
          <WhiteSpace />
          <InputItem>密码</InputItem>
        </WingBlank>
        <WhiteSpace />
        <Button type="primary">登录</Button>
        <WhiteSpace />
        <Button type="primary" onClick={this.handleRegister}>
          注册
        </Button>
      </>
    );
  }
}
export default Login;
