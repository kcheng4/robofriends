import React, {PureComponent, Component} from 'react';

class CounterButton extends Component {
  constructor(){
    super();
    this.state = {
      count:0
    };
  }

  shouldComponentUpdate(nextProps, nextState)  {
    if(this.state.count !== nextState.count){
      return true;
    }
    return false;
    // console.log(nextProps, nextState);
    // return true;
  }

  updateCount = () => {
    this.setState((state) => {
      return {count:state.count+1};
    });
  }
  render(){
    console.log(this.props.color);
    return (
      <button color={this.props.color} onClick={this.updateCount}>Count: {this.state.count}
      </button>
    )
  }
}

export default CounterButton;
