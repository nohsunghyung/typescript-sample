import { observable, action, runInAction } from "mobx";
import RootStore from "./RootStore";
import Api from "../utils/api";

class NoticeStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable
  list = [];

  @action
  fetchList() {
    Api.get("/costs").then(({ data }) => {
      console.log(data);
    });
  }
}

export default NoticeStore;
