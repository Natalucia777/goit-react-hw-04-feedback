import React, { Component } from 'react';
import Sections from './Sections/Sections';
import Feedback from './Feedback/Feedback';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import { Container } from './App.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onFeedback = (state) => {
    this.setState(prevState => ({
      [state]: prevState[state] + 1,
    }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  }
  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    return (
      <Container>
      <div>
        <Sections title='Please leave feedback'>
          <Feedback
            options={options}
            onFeedback={this.onFeedback}
          />
        </Sections>
        <Sections title='Statistics'>
          {this.countTotalFeedback() > 0 ? ( 
            <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()} ></Statistics>
          ) : (<Notification message='There is no feedback'></Notification>) }
        </Sections>
        </div>
        </Container>
    );
  }
}

export default App;