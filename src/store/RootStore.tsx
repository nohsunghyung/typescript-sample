import UserStore from './UserStore';
import NoticeStore from './NoticeStore';
import LoginStore from './LoginStore';
import ModalStore from './ModalStore';
import UiStore from './UiStore';

class RootStore {
  userStore: UserStore;
  modalStore: ModalStore;
  uiStore: UiStore;
  noticeStore: NoticeStore;
  loginStore: LoginStore;
  constructor() {
    this.userStore = new UserStore(this);
    this.modalStore = new ModalStore(this);
    this.uiStore = new UiStore(this);
    this.noticeStore = new NoticeStore(this);
    this.loginStore = new LoginStore(this);
  }
}

export default RootStore;
