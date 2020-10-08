import RootStore from "./RootStore";
import { observable, action } from "mobx";

// modal팝업 관련 store
class ModalStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  // 모달 창 open 여부
  @observable isModalOpen: boolean = false;

  // 모달 type
  @observable modalType = "";

  // 모달 data
  @observable modalData = {};

  // 모달 창 open 핸들러
  @action
  handleOpenModal(modalType: string, modalData: object) {
    this.isModalOpen = true;
    this.modalType = modalType;
    this.modalData = modalData;
  }

  // 모달 창 close 핸들러
  @action
  handleCloseModal() {
    this.isModalOpen = false;
  }
}

export default ModalStore;
