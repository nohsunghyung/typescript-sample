import { observable, action } from 'mobx';
import RootStore from './RootStore';
import Api from '../utils/api';

class NoticeStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable
  list = [];

  @action
  fetchList() {
    Api.get('/costs').then((response) => {
      console.log(response);
    });
  }
}

export default NoticeStore;
