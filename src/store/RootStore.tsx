import UserStore from "./UserStore";
import NoticeStore from "./NoticeStore";
import LoginStore from "./LoginStore";
import ModalStore from "./ModalStore";

class RootStore {
  userStore: UserStore;
  noticeStore: NoticeStore;
  loginStore: LoginStore;
  modalStore: ModalStore;
  constructor() {
    this.userStore = new UserStore(this);
    this.noticeStore = new NoticeStore(this);
    this.loginStore = new LoginStore(this);
    this.modalStore = new ModalStore(this);
  }
}

export default RootStore;
