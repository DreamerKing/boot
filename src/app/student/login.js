import React, {Component, PropTypes} from 'react';
import Login from '../common/login';
import 'whatwg-fetch';

class StudentLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  login(name, pwd){
    let loginUrl = "http://yjyx.com:9000/api/student/loginreq",
        csrfUrl = "http://yjyx.com:9000/api/getcsrftoken";

      fetch(csrfUrl, {
        method: "GET",
        mode: "cors",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'X-Requested-With':'XMLHttpRequest'
        }
      }).then(function(res) {
        console.log(res);
        //return res.json();
        })
        // .then(function(json){
        //   console.log("csrf:", json);
        //   fetch(loginUrl,{
        //     method: "POST",
        //     username:name,
        //     password:pwd
        //   }).then(function(res){
        //     console.log(res);
        //   }).catch((err) => {
        //     console.log(err);
        //   })
        // })
        .catch(function(error){
          console.log("csrf:".error);
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
