import React, { Component } from "react";

interface Iprops {
  age: string;
  onClick: (value: number) => void;
}

interface Istate {
  name: string;
  counter: number;
}

class Greetings extends Component<Iprops, Istate> {
  state: Istate = {
    name: "노성형",
    counter: 0,
  };
  onClick = (e: any) => {
    this.props.onClick(e.currentTarget.value);
  };
  render() {
    return (
      <div>
        이름: {this.state.name}
        {this.props.age}살 입니다.
        <div>카운터 : {this.state.counter}</div>
        <button value={33} onClick={this.onClick}>
          3
        </button>
        <button>-</button>
      </div>
    );
  }
}

export default Greetings;
