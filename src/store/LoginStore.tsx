import { observable, action } from 'mobx';
import RootStore from './RootStore';
import History from '../utils/history';
import Api from '../utils/api';

// 로그인 관련 store
class LoginStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  // id
  @observable
  aid = null;

  // password
  @observable
  password = null;

  // 프로필정보
  @observable
  profile = {};

  // 로그인체크
  @observable
  isLogin = false || localStorage.getItem('profile') ? true : false;

  // input값 가져오기
  @action
  onChangeUserInfo(name: any, value: string): void {
    this[name] = value;
  }

  // 로그인
  @action
  onSubmitLogin() {
    const apiParams = {
      aid: this.aid,
      password: this.password
    };
    Api.post('admin/login', apiParams)
      .then(({ data }) => {
        localStorage.setItem('profile', JSON.stringify(data));
        this.profile = data.admin;
        History.push('/notice');
        this.isLogin = true;
      })
      .catch((err) => console.log(err));
  }

  // 로그아웃
  @action
  handleLogout() {
    Api.get('admin/logout').then((res) => {
      History.push('/');
      this.isLogin = false;
      localStorage.removeItem('profile');
    });
  }
}

export default LoginStore;
