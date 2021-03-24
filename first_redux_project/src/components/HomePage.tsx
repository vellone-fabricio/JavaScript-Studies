import { Component } from "react";
import { Button } from "./CounterButton";

interface Props {
  increment: () => void;
  decrement: () => void;
  count: number;
}

export default class HomePage extends Component{
  render(): JSX.Element{
    const { count, increment, decrement } = this.props as Props;
    return (
      <div style={{  textAlign: 'center', margin: '40px', fontSize: '2rem'}}>
        <span>{count}</span>
        <Button color={'lightgreen'} handleClick={increment}>Increment</Button>
        <Button color={'orange'} handleClick={decrement}>Decrement</Button>
      </div>
    );
  }
}