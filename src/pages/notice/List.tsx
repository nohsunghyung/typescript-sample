import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import NoticeStore from "store/NoticeStore";

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
    return <div>일반공지리스트</div>;
  }
}

export default List;
