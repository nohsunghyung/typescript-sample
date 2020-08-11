import UserStore from "./UserStore";
import NoticeStore from "./NoticeStore";
import LoginStore from "./LoginStore";

class RootStore {
  userStore: UserStore;
  noticeStore: NoticeStore;
  loginStore: LoginStore;
  constructor() {
    this.userStore = new UserStore(this);
    this.noticeStore = new NoticeStore(this);
    this.loginStore = new LoginStore(this);
  }
}

export default RootStore;
