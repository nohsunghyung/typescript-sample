import { observable, action, runInAction } from "mobx";
import RootStore from "./RootStore";
import Api from "../utils/api";

class NoticeStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable
  lists = [];

  @action
  fetchLists() {
    Api.get("/costs").then(({ data }) => {
      runInAction(() => {
        this.lists = data.list;
      });
    });
  }
}

export default NoticeStore;
