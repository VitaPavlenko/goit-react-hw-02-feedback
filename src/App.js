// import s from "./App.css";
import React, { Component } from "react";
import Statistics from "./Components/Statistics/Statistics";
import Feedback from "./Components/Feedback/Feedback";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handelClick = (event) => {
    console.log(event.target.id);
    console.log([event.target.id]);
    const target = event.target.id;
    this.setState((prevState) => ({ [target]: prevState[target] + 1 }));
  };

  render() {
    return (
      <>
        <h2>Please leave feedback</h2>
        <Feedback click={this.handelClick} />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
      </>
    );
  }
}

export default App;
