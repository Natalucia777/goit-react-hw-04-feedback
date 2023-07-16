import React, { useState } from 'react';
import Sections from './Sections/Sections';
import Feedback from './Feedback/Feedback';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import { Container } from './App.styled';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const onFeedback = state => {
    switch (state) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        throw new Error();
    }
  };   
  
  function countTotalFeedback() {
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage() {
    return Math.round((good / countTotalFeedback()) * 100);
  }

  const options = Object.keys({ good, neutral, bad });
    return (
      <Container>
      <div>
        <Sections title='Please leave feedback'>
          <Feedback
            options={options}
            onFeedback={onFeedback}
          />
        </Sections>
        <Sections title='Statistics'>
          {countTotalFeedback() > 0 ? ( 
            <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()} ></Statistics>
          ) : (<Notification message='There is no feedback'></Notification>) }
        </Sections>
        </div>
        </Container>
    );
}

export default App;