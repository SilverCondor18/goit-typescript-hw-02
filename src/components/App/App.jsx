import Description from '../Description/Description'
import Options from '../Options/Options'
import Feedback from '../Feedback/Feedback'
import Notification from '../Notification/Notification'
import { useState, useEffect } from 'react';

function App() {
  const feedbackState = localStorage.getItem("feedback-state");
  const [feedback, setFeedback] = useState(feedbackState !== null ? JSON.parse(feedbackState) : {
    good: 0,
    bad: 0,
    neutral: 0
  });
  useEffect(() => {
    localStorage.setItem("feedback-state", JSON.stringify(feedback))
  }, [feedback]);

  const updateFeedback = feedbackType => {
    const currentState = {
      ...feedback
    };
    currentState[feedbackType] = currentState[feedbackType] + 1;
    setFeedback(currentState);
  };
  const resetFeedback = () => {
    setFeedback({
      good: 0,
      bad: 0,
      neutral: 0
    });
  };
  const totalFeedback = feedback.good + feedback.bad + feedback.neutral;
  return (
    <>
      <Description title="Sip Happens Cafe" content="Please leave your feedback about our service by selecting one of the options below." />
      <Options feedbackHandler={updateFeedback} resetHandler={resetFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? <Feedback feedback={feedback} totalFeedback={totalFeedback} positiveFeedback={Math.round((feedback.good / totalFeedback) * 100)} /> : <Notification message="No feedback yet" />}
    </>
  )
}

export default App
