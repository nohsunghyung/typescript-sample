import { observable, action } from 'mobx';
import RootStore from './RootStore';
import History from 'utils/History';
import Api from 'utils/Api';
import { setCookie, getCookie, eraseCookie } from 'utils/Cookie';

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
  isLogin = false || getCookie('userData') ? true : false;

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
        const trimData = JSON.stringify(data);
        setCookie('userData', trimData, 1);
        this.profile = data.admin;
        History.push('/notice');
        this.isLogin = true;

        // localStorage.setItem('profile', JSON.stringify(data));
        // this.profile = data.admin;
        // History.push('/notice');
        // this.isLogin = true;
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
