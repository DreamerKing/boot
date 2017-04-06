import React, {Component, PropTypes} from 'react';
import axios from 'axios';
import Login from '../common/login';
import STUDENT_API from '../../contants/student';
import qs from 'qs';
import Cookie from 'js-cookie';

class StudentLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "offline", // offline:离线, online:在线
      realname: '', //真实姓名
    }
  }

  login(name, pwd) {
    axios
      .get(STUDENT_API.getCrsf)
      .then(response => {
        let csrfToken = Cookie.get("csrftoken");
        if (response.data == 'ok') {
          return Promise.resolve(csrfToken);
        }
      })
      .then(csrfToken => {
        axios({
          url: STUDENT_API.login,
          method: 'post',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'X-Requested-With': 'XMLHttpRequest',
            'X-CSRFToken': csrfToken
          },
          data: qs.stringify({
            username: name,
            password: pwd
          })
        }).then(res => {
          if (res.data.retcode == 0) {
            console.log("登录成功！", res.data.retcode, res.data.realname);
          } else if (res.data.retcode == 1) {
            console.log("登录失败！", res.data.retcode, res.data.msg);
          }
        })
      }).catch(err => {
      console.log("获取token出错")
    })
  }

  render() {
    return (
      <div className="student-login">
        <Login loginName="学生登陆" login={this.login}/>
      </div>
    )
  }
}

export default StudentLogin;
