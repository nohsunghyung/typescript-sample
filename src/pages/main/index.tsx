import React, { Component } from "react";

const data = [
  {
    name: "a",
    sub: [
      {
        name: "sub-a",
      },
      {
        name: "sub-aa",
      },
    ],
  },
  {
    name: "b",
    path: "111",
  },
];
class MainPage extends Component {
  componentDidMount() {
    let array: any = null;
    data.map((item) => {
      if (item.path) {
        // console.log(item, 1);
      } else {
        item.sub?.map((list) => {
          array = list.name;
        });
      }
      // console.log(array);
    });
  }
  render() {
    return <div>메인</div>;
  }
}

export default MainPage;
