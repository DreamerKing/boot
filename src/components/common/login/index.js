import React, {Component, PropTypes} from 'react';
import {Input, Button} from 'antd';
import './login.less'
class Login extends Component {
 constructor(props) {
    super(props);
    this.state = {
      name: '',
      pwd: ''
    }
  }

  onChangeUserName(e) {
   this.setState({name: e.target.value});
  }

  onChangePwd(e) {
   this.setState({pwd: e.target.value});
  }

  render() {
    return (
      <div className="login">
        <label className="login-label">{this.props.loginName}</label>
        <Input.Group>
          <Input
            className="login-name"
            type="text"
            placeholder="用户名"
            onChange={this.onChangeUserName.bind(this)}
            />
          <Input
            className="login-pwd"
            type="password"
            placeholder="请输入密码"
            onChange= {this.onChangePwd.bind(this)}
            />
        </Input.Group>
        <Button
          className="login-btn"
          onClick={() => this.props.login.call(this, this.state.name, this.state.pwd)}>
          登录
        </Button>
      </div>
    );
  }
}

Login.propTypes = {
  loginName: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired
};

export default Login;
