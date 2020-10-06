import React, { Component } from "react";

class MainPage extends Component {
  openModal = () => {
    console.log(1);
  };
  componentDidMount() {}
  render() {
    return (
      <div>
        <button type="button" onClick={this.openModal}>
          팝업열기
        </button>
      </div>
    );
  }
}

export default MainPage;
