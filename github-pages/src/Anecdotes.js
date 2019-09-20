import React, { useState } from "../node_modules/react";

const Votes = ({ value }) => {
  if (value == undefined) return null;
  else return <div>has {value} votes</div>;
};

const MostVoted = ({ points, anecdotes }) => {
  let maxValue = -1;
  let maxIndex = -1;

  Object.entries(points).forEach(function([key, value]) {
    if (value > maxValue) {
      maxValue = value;
      maxIndex = key;
    }
  });

  if (maxValue <= 0 || maxValue == undefined) return null;

  return (
    <div>
      <Title text={"Anecdote most voted"} /> <br />
      <div>{anecdotes[maxIndex]}</div>
    </div>
  );
};

const Title = ({ text }) => {
  return (
    <div>
      <a style={{ fontSize: 25, fontWeight: "bold" }}>{text}</a>
    </div>
  );
};

const Anecdotes = props => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState({});

  const handleClick = () => {
    const lastIndex = anecdotes.length - 1;
    const nextSelected = selected + 1;

    console.log(lastIndex);
    console.log(nextSelected);

    if (nextSelected > lastIndex) setSelected(0);
    else setSelected(nextSelected);
  };

  const handleClickVote = () => {
    var copy = { ...points };
    var value;

    if (copy[selected] == undefined) {
      copy[selected] = 1;
    } else {
      value = copy[selected];
      copy[selected] = value + 1;
    }

    setPoints(copy);
    console.log(points);
  };

  const selectedValue = points[selected];

  return (
    <div>
      <Title text="Anecdote of the day" /> <br />
      <div>{anecdotes[selected]}</div>
      <Votes value={selectedValue} />
      <br />
      <button onClick={handleClick}>Next anecdote</button>
      <button onClick={handleClickVote}>Vote</button>
      <br />
      <br />
      <MostVoted points={points} anecdotes={anecdotes} />
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

export default Anecdotes;
