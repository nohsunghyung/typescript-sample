import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import ModalStore from 'store/ModalStore';
import ModalType from 'config/ModalType';
import DoubleModal from '../DoubleModal';

// props 셋팅
interface Iprops {
  // 상위컴포넌트에서 내려주는 props가 없어도 에러가 나지않게 ? 처리
  modalData?: {
    // props가 객체일경우
    title?: string; // 팝업 제목
    body?: string; // 팝업 내용
    completeLabel?: string; // 확인버튼 텍스트
    cancelLabel?: string; // 취소버튼 텍스트
    handleCancel?(): void; // 취소버튼 핸들러
    // handleComplete?: Function; // 확인버튼 핸들러
  };
}

// store 셋팅
interface StoreProps {
  modalStore?: ModalStore; // 상위컴포넌트에서 내려주는 props가 없어도 에러가 나지않게 ? 처리
}

@inject('modalStore')
@observer
class SamplePopup extends Component<Iprops & StoreProps> {
  handleComplete = () => {
    console.log('완료');
  };
  handleCancel = () => {
    const { modalData } = this.props;
    const { modalStore } = this.props;
    if (modalData!.handleCancel) {
      modalData!.handleCancel!();
    } else {
      modalStore!.handleCloseModal();
    }
  };
  openModal = () => {
    const { modalStore } = this.props;
    modalStore!.handleOpenModal(ModalType.DOUBLE_POPUP, {
      title: '이중팝업'
    });
  };
  render() {
    const { title, body, completeLabel, cancelLabel } = this.props.modalData!;
    return (
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
        <div>
          <button onClick={this.handleCancel}>{cancelLabel || '취소'}</button>
          <button onClick={this.handleComplete}>
            {completeLabel || '완료'}
          </button>
        </div>
        <div>
          <button onClick={this.openModal}>이중팝업열기</button>
        </div>
      </div>
    );
  }
}

export default SamplePopup;
