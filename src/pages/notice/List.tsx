import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import NoticeStore from "store/NoticeStore";

interface Store {
  noticeStore?: NoticeStore;
}

@inject("noticeStore")
@observer
class List extends Component<Store> {
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
