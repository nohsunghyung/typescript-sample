import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import NoticeStore from "store/NoticeStore";

// store에 관련된
interface Iprops {
  noticeStore?: NoticeStore;
}

@inject("noticeStore")
@observer
class List extends Component<Iprops> {
  componentDidMount() {
    const { noticeStore } = this.props;
    noticeStore!.fetchLists();
  }
  render() {
    interface ListKeys {
      id: number;
      subject: string;
      registDatetime: string;
    }
    const { lists } = this.props.noticeStore!;
    console.log(lists);
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>날짜</th>
            </tr>
          </thead>
          <tbody>
            {lists.length
              ? lists.map((item: ListKeys, index) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.subject}</td>
                      <td>{item.registDatetime}</td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
    );
  }
}

export default List;
