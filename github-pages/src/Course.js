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

const CourseExample = (props) => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2
        }
      ]
    }
  ];

  const handleBack = value => {
    props.onClick(0);
  };

  const course = courses.map(course => {
    return <Course key={course.id} course={course} />;
  });

  return (
    <div>
      {course}
      <br />
      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default CourseExample;
