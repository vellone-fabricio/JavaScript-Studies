import HomePage from "./components/HomePage";
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppState } from './store/rootStore';
import { incrementCount, decrementCount } from './store/counter/CounterAction';
import { Component } from "react";

interface AppProps {
  increment: () => void;
  decrement: () => void;
}

const mapStateProps = (state: AppState) => ({
  count: state.counterReducer.count
})

const mapDispatchProps = (dispatch: Dispatch): AppProps =>({
  increment: () => dispatch(incrementCount()),
  decrement: () => dispatch(decrementCount()),
});

class App extends Component<AppProps, AppState> {
  render(): JSX.Element {
    return <HomePage {...this.props}/>
  }
}

export default connect(mapStateProps, mapDispatchProps)(App);
