import React, { useState } from "react";

const Title = props => (
  <p style={{ fontWeight: "bold", fontSize: 30 }}>{props.text}</p>
);

const Button = ({ onClick, title }) => (
  <button onClick={onClick}>{title}</button>
);

const Statistics = ({ good, neutral, bad }) => {
  var total = good + neutral + bad;
  var totalPositives = good + neutral;
  var average = total / 3;
  var positive = (100 * totalPositives) / total;

  if (total === 0)
    return (
      <div>
        <a>No Feedback Given! </a>
      </div>
    );

  return (
    <div>
      <Title text="Statistics" />
      <table>
        <tbody>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="average" value={average} />
          <Statistic text="positive" value={positive} />
        </tbody>
      </table>
    </div>
  );
};

const Statistic = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Unicafe = props => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <div>
        <Title text="Give Feedback" />
        <Button title="good" onClick={handleGoodClick} />
        <Button title="neutral" onClick={handleNeutralClick} />
        <Button title="bad" onClick={handleBadClick} />
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    </div>
  );
};

export default Unicafe;
