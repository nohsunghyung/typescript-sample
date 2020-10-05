import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import NoticeStore from "store/NoticeStore";

// store 초기 설정
interface Istore {
  noticeStore?: NoticeStore;
}

@inject("noticeStore")
@observer
class List extends Component<Istore> {
  componentDidMount() {
    const { fetchList } = this.props.noticeStore!;
    fetchList();
  }
  render() {
    const { list } = this.props.noticeStore!;
    return <div>일반공지</div>;
  }
}

export default List;
