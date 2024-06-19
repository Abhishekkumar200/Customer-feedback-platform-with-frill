import React from "react";

class ChangingProgressProvider extends React.Component {
  static defaultProps = {
    interval: 1000
  };

  state = {
    valuesIndex: 0
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      if (this.state.valuesIndex < this.props.values.length - 1) {
        this.setState({
          valuesIndex: this.state.valuesIndex + 1
        });
      } else {
        clearInterval(this.intervalId); // Stop the interval when the sequence is complete
      }
    }, this.props.interval);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId); // Clear the interval when the component unmounts
  }

  render() {
    return this.props.children(this.props.values[this.state.valuesIndex]);
  }
}

export default ChangingProgressProvider;
