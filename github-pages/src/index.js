import React, { useState } from "react";
import ReactDOM from "react-dom";
import Unicafe from "./Unicafe";
import Anecdotes from "./Anecdotes";
import CourseExample from "./Course";

const linkStyle = {
  color: "blue",
  textDecorationLine: "underline"
};

const App = () => {
  const [value, setValue] = useState(0);

  const handleClick = valueClicked => {
    setValue(valueClicked);
  };

  const Render = () => {
    console.log(value);
    if (value == 0) {
      return (
        <div>
          <ul>
            <li style={linkStyle} onClick={() => handleClick(1)} data-id="1">
              Unicafe
            </li>
            <li style={linkStyle} onClick={() => handleClick(2)} data-id="1">
              Anecdotes
            </li>
            <li style={linkStyle} onClick={() => handleClick(3)} data-id="1">
              Course
            </li>
          </ul>
        </div>
      );
    } else if (value == 1) {
      return <Unicafe />;
    } else if (value == 2) {
      return <Anecdotes />;
    } else if (value == 3) {
      return <CourseExample />;
    }
  };

  return <div>{Render()}</div>;
};

ReactDOM.render(<App />, document.getElementById("root"));
