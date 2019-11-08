import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 2
    }
    this.increment = this.increment.bind(this)
  }

  increment() {
    const newCount = this.state.count + 1;
    this.setState({ count: newCount });
  }

  render() {
    const count = this.state.count
    return (
      <div>
        <Header headerText={'bananas ' + count} increment={this.increment}/>
        <Header headerText={'cherries ' + count} increment={this.increment}/>
      </div>
    );
  }
}

export default App;
