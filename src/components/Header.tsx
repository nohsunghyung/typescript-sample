import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import LoginStore from "store/LoginStore";

// inject 하는 store에 대해서 명시
interface Iprops {
  loginStore?: LoginStore;
}

@inject("loginStore")
@observer
class Header extends Component<Iprops> {
  handleLogout = () => {
    const { loginStore } = this.props;
    loginStore?.handleLogout();
  };
  render() {
    return (
      <nav>
        <ul>
          <li>
            <button type="button" onClick={this.handleLogout}>
              로그아웃
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
