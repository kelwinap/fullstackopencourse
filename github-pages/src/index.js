import React, { useState } from "react";
import ReactDOM from "react-dom";
import Unicafe from "./Unicafe";
import Anecdotes from "./Anecdotes";
import CourseExample from "./Course";

const linkStyle = {
  color: "blue",
  textDecorationLine: "underline"
};

const Menu = ({ onClick }) => {

  const handle = value => {
    onClick(value);
  };

  return (
    <div>
      <ul>
        <li style={linkStyle} onClick={() => handle(1)} data-id="1">
          Unicafe
        </li>
        <li style={linkStyle} onClick={() => handle(2)} data-id="1">
          Anecdotes
        </li>
        <li style={linkStyle} onClick={() => handle(3)} data-id="1">
          Course
        </li>
      </ul>      
    </div>
  );
};

const App = () => {
  const [value, setValue] = useState(0);

  const handleClick = valueClicked => {
    setValue(valueClicked);
  };

  const Render = () => {
    console.log(value);
    if (value == 0) {
      return <Menu onClick={handleClick} />;
    } else if (value == 1) {
      return <Unicafe onClick={handleClick} />;
    } else if (value == 2) {
      return <Anecdotes onClick={handleClick} />;
    } else if (value == 3) {
      return <CourseExample onClick={handleClick} />;
    }
  };

  return <div>{Render()}</div>;
};

ReactDOM.render(<App />, document.getElementById("root"));
