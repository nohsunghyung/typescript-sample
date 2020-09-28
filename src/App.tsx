import React, { Fragment, Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import SideBar from "components/SideBar";
import { ContentsWrapper } from "./styled/LayoutStyled";
import Login from "pages/Login";
import Header from "./components/Header";
import ErrorPage from "./pages/ErrorPage";
import routes from "routes";
import { observer, inject } from "mobx-react";
import LoginStore from "./store/LoginStore";

// 로그인 store
interface Istore {
  loginStore?: LoginStore;
}

@inject("loginStore")
@observer
class App extends Component<Istore> {
  render() {
    const { loginStore } = this.props;
    const isLogin = loginStore!.isLogin;
    console.log(isLogin);
    return (
      <Fragment>
        <Switch>
          <Route
            exact
            path={["/login", "/"]}
            children={() => {
              // 로그인 안되어있을경우 로그인페이지로
              if (!isLogin) {
                return <Login />;
              } else {
                // 로그인 되어있을경우 메인페이지로
                return <Redirect to="/main" />;
              }
            }}
          ></Route>
          {routes.map((route, index) => {
            const Pages = route.component;
            return (
              <Route
                exact
                path={route.path}
                children={(props) => {
                  if (!isLogin) {
                    // 로그인 안되어있을경우 로그인페이지로
                    alert("로그인이 필요합니다.");
                    return <Redirect to="/login" />;
                  } else {
                    // 로그인 되어있을경우 메인페이지로
                    return <Pages {...props} />;
                  }
                }}
                key={index}
              ></Route>
            );
          })}
          <Route path="*" exact component={ErrorPage} />
        </Switch>
      </Fragment>
    );
  }
}
export default App;
