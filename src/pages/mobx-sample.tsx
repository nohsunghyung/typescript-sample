import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import UserStore from "store/UserStore";

// inject해야되는 store에대해서 정의
interface StoreProps {
  userStore?: UserStore; // 상위컴포넌트에서 내려주는 props가 없어도 에러가 나지않게 ? 처리
}

@inject("userStore")
@observer
class MainPage extends Component<StoreProps> {
  render() {
    console.log(this.props);
    const { username } = this.props.userStore!; // 존재가 불명확한 변수뒤에 ! 처리
    return <div>{username}</div>;
  }
}

export default MainPage;
