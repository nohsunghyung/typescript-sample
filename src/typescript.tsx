import React, { Component } from "react";

interface Shape {
  getArea(): number;
}

class Circle implements Shape {
  // width: number;
  // height: number;
  constructor(public width: number, public height: number) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width + this.height;
  }
}

const result = new Circle(10, 2);

interface Person {
  name: string;
  age: number;
}

interface Skill extends Person {
  name: string;
  skill?: string;
}

const person: Person = {
  name: "노성형",
  age: 34,
};

const skill: Skill = {
  name: "노군",
  skill: "dev",
  age: 33,
};

function merge<A, B>(a: A, b: B): A & B {
  return {
    ...a,
    ...b,
  };
}

const merged = merge({ foo: 1 }, { bar: 2 });

interface Items<T, C> {
  list: T[];
  item?: C;
}

const items: Items<string, number> = {
  list: ["가", "나", "다"],
  item: 33,
};

class Queue<T> {
  list: T[] = [];
  get length() {
    return this.list.length;
  }
  enqueue(item: T) {
    this.list.push(item);
  }
  dequeue() {
    return this.list.shift();
  }
}

const QueResult = new Queue<number>();

QueResult.enqueue(1);
QueResult.enqueue(2);
QueResult.enqueue(3);

interface Iprops {
  name: string;
  mark: string;
  age?: number;
  printName: (name: string) => void;
}

interface Istate {
  isActive: boolean;
  number?: number;
}

// function MainPage({ name, mark, age, printName }: Iprops) {
//   const handleClick = () => printName(name);
//   return (
//     <div>
//       {mark}
//       {age}
//       <button onClick={handleClick}>이름가져오기</button>
//     </div>
//   );
// }

class MainPage extends Component<Iprops, Istate> {
  static defaultProps = {
    name: "노루",
  };
  state: Istate = {
    isActive: true,
  };
  handleClick = () => {
    const { printName, name } = this.props;
    printName(name);
  };
  render() {
    const { name, mark, age } = this.props;
    return (
      <div>
        {name}
        {mark}
        {age}
        <button onClick={this.handleClick}>이름가져오기</button>
      </div>
    );
  }
}

export default MainPage;
