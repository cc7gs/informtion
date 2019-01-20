import React from 'react';
import { Button, InputItem,List, WingBlank, WhiteSpace } from 'antd-mobile';
import Logo from '../../component/logo/logo';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../redux/user.redux';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: ''
    };
  }
  handleRegister = () => {
    this.props.history.push('/register');
  };
  handleLogin = () => {
    const {login}=this.props;
    login(this.state);
  };
  handleChange = (type, value) => {
    this.setState({
      [type]: value
    });
  };
  render() {
    const { msg, redirectTo } = this.props;
    return (
      <>
        {redirectTo ? <Redirect to={redirectTo} /> : null}
        <Logo />
        <List>
          {msg?<p className="error-msg">{msg}</p>:null}
          <WingBlank>
            <InputItem type="user" onChange={v => this.handleChange('user', v)}>
              用户
            </InputItem>
            <WhiteSpace />
            <InputItem
              type="password"
              onChange={v => this.handleChange('password', v)}
            >
              密码
            </InputItem>
          </WingBlank>
          <WhiteSpace />
          <Button type="primary" onClick={this.handleLogin}>
            登录
          </Button>
          <WhiteSpace />
          <Button type="primary" onClick={this.handleRegister}>
            注册
          </Button>
        </List>
      </>
    );
  }
}
const mapStateProps = state => {
  return { ...state.user };
};
const mapDispathProps = {
  login
};
export default connect(
  mapStateProps,
  mapDispathProps
)(Login);
