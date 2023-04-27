import { Component } from 'react';
class Counter extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
    render() {
      return (
        <div>
          <p>You clicked {this.state.count} times</p>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            increment
          </button>
          <button onClick={() => this.setState({ count: this.state.count - 1 })}>
            decrement
          </button>
          <button onClick={() => this.setState({ count: this.state.count = 0})}>
            reset
          </button>
        </div>
      );
    }
  }
export default Counter;
