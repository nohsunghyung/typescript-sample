import React, { Component } from 'react';
import Modal from 'react-modal';
import ModalStore from 'store/ModalStore';
import { inject, observer } from 'mobx-react';
import ModalType from 'config/ModalType';
import ConfirmModal from './common/ConfirmModal';
import FullModal from './common/FullModal';
import DoubleModal from './DoubleModal';

// store 셋팅
interface StoreProps {
  modalStore?: ModalStore; // 상위컴포넌트에서 내려주는 props가 없어도 에러가 나지않게 ? 처리
}

@inject('modalStore')
@observer
// modal 컨테이너
class ModalContainer extends Component<StoreProps> {
  render() {
    const { isModalOpen, modalType, modalData } = this.props.modalStore!;
    let modalComponent: any = null, // 모달 컴포넌트
      modalClassName: string = '';
    switch (modalType) {
      case ModalType.CONFIRM_POPUP:
        modalComponent = <ConfirmModal modalData={modalData} />;
        modalClassName = 'confirm-popup';
        break;
      case ModalType.FULL_POPUP:
        modalComponent = <FullModal modalData={modalData} />;
        modalClassName = 'full-popup';
        break;
      case ModalType.DOUBLE_POPUP:
        modalComponent = <DoubleModal modalData={modalData} />;
        break;
      default:
        break;
    }

    return (
      <Modal
        isOpen={isModalOpen}
        ariaHideApp={false}
        className={modalClassName}
      >
        {modalComponent}
      </Modal>
    );
  }
}

export default ModalContainer;
