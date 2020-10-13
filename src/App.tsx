import React, { Fragment, Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SideBar from 'components/SideBar';
import { ContentsWrapper } from './styled/LayoutStyled';
import Login from 'pages/Login';
import Header from './components/Header';
import ErrorPage from './pages/ErrorPage';
import Routes from 'routes';
import { observer, inject } from 'mobx-react';
import LoginStore from './store/LoginStore';
import ModalContainer from './components/modal/ModalContainer';

// 로그인 store
interface Istore {
  loginStore?: LoginStore;
}

@inject('loginStore')
@observer
class App extends Component<Istore> {
  render() {
    const { loginStore } = this.props;
    const isLogin = loginStore!.isLogin;
    let routeComponent: any = [];
    Routes.forEach((route, index) => {
      if (route.path) {
        // 1뎁스에 path가 있을경우
        routeComponent.push(routeComponets(route, index));
      } else {
        // 2뎁스 이상
        route.subMenu!.forEach((menu: object) => {
          routeComponent.push(routeComponets(menu, index));
        });
      }
    });

    function routeComponets(route: any, index: number) {
      return (
        <Route
          path={route.path}
          key={index}
          children={(props) => {
            if (!isLogin) {
              // 로그인 안되어있을경우 로그인페이지로
              alert('로그인이 필요합니다.');
              return <Redirect to="/login" />;
            } else {
              // 로그인 되어있을경우 해당 page
              return (
                <Fragment>
                  <div className="contents">
                    <SideBar />
                    <ContentsWrapper>
                      <route.component {...props} />
                    </ContentsWrapper>
                  </div>
                </Fragment>
              );
            }
          }}
        ></Route>
      );
    }

    return (
      <Fragment>
        <Switch>
          <Route
            exact
            path={['/login', '/']}
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
          {routeComponent}
          <Route path="*" exact component={ErrorPage} />
        </Switch>
        <ModalContainer />
      </Fragment>
    );
  }
}
export default App;
