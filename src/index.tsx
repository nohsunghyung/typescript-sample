import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter as Router } from "react-router-dom";
import GlobalStyle from "./styled/GlobalStyled";
import { Provider } from "mobx-react";
import RootStore from "./store/RootStore";

const rootStore = new RootStore();

ReactDOM.render(
  <Provider {...rootStore}>
    <Router>
      <GlobalStyle />
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
