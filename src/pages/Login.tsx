import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import LoginStore from "store/LoginStore";

// inject 하는 store에 대해서 명시
interface Iprops {
  loginStore?: LoginStore;
}

@inject("loginStore")
@observer
class Login extends Component<Iprops> {
  // input 값 받아오기
  onChangeUserInfo = (e: any) => {
    const { loginStore } = this.props;
    const _target = e.target;
    loginStore!.onChangeUserInfo(_target.name, _target.value);
  };

  // 로그인
  onSubmitLogin = (e: any) => {
    e.preventDefault();
    const { loginStore } = this.props;
    loginStore!.onSubmitLogin();
  };

  render() {
    console.log(1);
    return (
      <div>
        <form onSubmit={this.onSubmitLogin}>
          <div>
            <input
              type="text"
              name="aid"
              placeholder="id"
              onChange={this.onChangeUserInfo}
            />
          </div>
          <div>
            <input
              type="text"
              name="password"
              placeholder="password"
              onChange={this.onChangeUserInfo}
            />
          </div>
          <button type="submit">로그인</button>
        </form>
      </div>
    );
  }
}

export default Login;
