import { observable } from "mobx";

class UserStore {
  rootStore: any;
  constructor(rootStore: any) {
    this.rootStore = rootStore;
  }
  @observable
  username = "노성형";

  @observable
  fetchList = [];
}

export default UserStore;
