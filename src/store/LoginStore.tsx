import { observable, action, runInAction, computed } from "mobx";
import RootStore from "./RootStore";
import History from "../utils/history";
import Api from "../utils/api";

class LoginStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable
  aid = null;

  @observable
  password = null;

  @observable
  profile = {};

  @observable
  isLogin = false || localStorage.getItem("profile") ? true : false;

  @action
  onChangeUserInfo(name: any, value: string): void {
    this[name] = value;
  }

  @action
  onSubmitLogin() {
    const apiParams = {
      aid: this.aid,
      password: this.password,
    };
    Api.post("admin/login", apiParams)
      .then(({ data }) => {
        localStorage.setItem("profile", JSON.stringify(data));
        this.profile = data.admin;
        History.push("/notice");
        this.isLogin = true;
      })
      .catch((err) => console.log(err));
  }

  @action
  handleLogout() {
    Api.get("admin/logout").then((res) => {
      History.push("/");
      this.isLogin = false;
      localStorage.removeItem("profile");
    });
  }
}

export default LoginStore;
