import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import NoticeStore from "store/NoticeStore";
import Modal from "react-modal";

// props 셋팅
interface Iprops {}

// store 셋팅
interface StoreProps {
  noticeStore?: NoticeStore; // 상위컴포넌트에서 내려주는 props가 없어도 에러가 나지않게 ? 처리
}

interface Istate {
  isModalOpen: boolean;
}

@inject("noticeStore")
@observer
class List extends Component<Iprops & StoreProps, Istate> {
  constructor(props: Iprops) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }
  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };
  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };
  handleComplete = () => {
    console.log("확인");
  };
  componentDidMount() {
    const { fetchList } = this.props.noticeStore!;
    fetchList();
  }
  render() {
    const { list } = this.props.noticeStore!;
    const { isModalOpen } = this.state;
    return (
      <div>
        <button type="button" onClick={this.openModal}>
          confirm 팝업
        </button>
        <Modal
          isOpen={isModalOpen}
          shouldCloseOnOverlayClick={true}
          ariaHideApp={false}
        >
          <div>
            <h1>팝업</h1>
            <p>confirm 팝업</p>
            <button onClick={this.closeModal}>닫기</button>
            <button onClick={this.handleComplete}>확인</button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default List;
