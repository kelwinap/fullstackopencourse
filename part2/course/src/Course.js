import React from "react";

const Header = ({ title }) => (
  <p style={{ fontSize: 24, fontWeight: "bold" }}>{title}</p>
);

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const Total = ({ total }) => {
  return <p style={{ fontWeight: "bold" }}>Total of {total} exercises</p>;
};

const Course = ({ course }) => {
  const total = course.parts.reduce((s, p) => {
    return s + p.exercises;
  }, 0);

  const Content = course.parts.map(part => {
    return <Part key={part.id} name={part.name} exercises={part.exercises} />;
  });

  return (
    <div>
      <Header title="Half Stack application development" />
      {Content}
      <Total total={total} />
    </div>
  );
};

export default Course;
