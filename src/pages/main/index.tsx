import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import ModalStore from 'store/ModalStore';
import ModalContainer from 'components/modal/ModalContainer';
import ModalType from 'config/ModalType';

// props 셋팅
interface Iprops {}

// store 셋팅
interface StoreProps {
  modalStore?: ModalStore; // 상위컴포넌트에서 내려주는 props가 없어도 에러가 나지않게 ? 처리
}

@inject('modalStore')
@observer
class MainPage extends Component<Iprops & StoreProps> {
  constructor(props: Iprops) {
    super(props);
  }
  openModal = () => {
    const { modalStore } = this.props;
    modalStore!.handleOpenModal(ModalType.CONFIRM_POPUP, {
      title: 'confirm 팝업',
      body: '내용입니다',
      completeLabel: '확인이요',
      cancelLabel: '닫기',
      handleCancel() {
        console.log('닫기 버튼');
        modalStore!.handleCloseModal();
      }
    });
  };
  componentDidMount() {}
  render() {
    return (
      <div>
        <button type="button" onClick={this.openModal}>
          confirm 팝업
        </button>

        <ModalContainer />
      </div>
    );
  }
}

export default MainPage;
