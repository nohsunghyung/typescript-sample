import RootStore from './RootStore';
import { observable, action } from 'mobx';
import { timingSafeEqual } from 'crypto';

// modal팝업 관련 store
class ModalStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  // 모달 창 open 여부
  @observable isModalOpen: boolean = false;

  // 모달 type
  @observable modalType: string = '';

  // 모달 data
  @observable modalData: any = {};

  // 모달 관리
  @observable modalHistory: any[] = [];

  // 모달 창 open 핸들러
  @action
  handleOpenModal(modalType: string, modalData: object) {
    this.isModalOpen = true;
    modalData['modalType'] = modalType;
    this.modalType = modalType;
    this.modalData = modalData;
    this.modalHistory.push(modalData);
    console.log(this.modalHistory);
  }

  // 모달 창 close 핸들러
  @action
  handleCloseModal() {
    if (this.modalHistory.length <= 1) {
      this.isModalOpen = false;
      this.modalType = '';
      this.modalHistory = [];
    } else {
      this.modalData = this.modalHistory[this.modalHistory.length - 2];
      this.modalType = this.modalData.modalType;
      this.modalHistory.splice(-1, 1);
    }
  }
}

export default ModalStore;
