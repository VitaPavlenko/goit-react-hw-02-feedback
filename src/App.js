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
    const target = event.target.id;
    this.setState((prevState) => ({ [target]: prevState[target] + 1 }));
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((prev, number) => {
      return prev + number;
    }, 0);

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const good = this.state.good;
    const percentag = total ? +(good * 100) / +total : 0;
    return Math.round(percentag);
  };

  render() {
    const { countTotalFeedback, countPositiveFeedbackPercentage } = this;
    const total = countTotalFeedback();
    const percentage = countPositiveFeedbackPercentage();

    return (
      <>
        <h2>Please leave feedback</h2>
        <Feedback click={this.handelClick} />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={total}
          percentage={percentage}
        />
      </>
    );
  }
}

export default App;
