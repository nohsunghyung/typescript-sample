import React, { Fragment, Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { observer, inject } from "mobx-react";
import SideBar from "components/SideBar";
import { ContentsWrapper } from "./styled/LayoutStyled";
import Login from "pages/Login";
import Header from "./components/Header";
import LoginStore from "store/LoginStore";
import routes from "routes";

interface Iprops {
  loginStore?: LoginStore;
}

@inject("loginStore")
@observer
class App extends Component<Iprops> {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path={["/login", "/"]} children={<Login />}></Route>
          {routes.map(({ path, component }, index) => {
            const Pages = component;
            return (
              <Route
                path={path}
                children={(props) => {
                  return <Pages />;
                }}
                key={index}
              ></Route>
            );
          })}
        </Switch>
      </Fragment>
    );
  }
}
export default App;
