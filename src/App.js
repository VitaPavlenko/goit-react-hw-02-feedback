// import s from "./App.css";
import React, { Component } from "react";
import Statistics from "./Components/Statistics/Statistics";
import FeedbackOptions from "./Components/Feedback/FeedbackOptions";
import Section from "./Components/Section/Section";
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handelClick = (event) => {
    const target = event.target.name;
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
    const keys = Object.keys(this.state);

    return (
      <>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions options={keys} onLeaveFeedback={this.handelClick} />
          {total ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={percentage}
            />
          ) : (
            <Section title={"No feedback given"}></Section>
          )}
        </Section>
      </>
    );
  }
}

export default App;
