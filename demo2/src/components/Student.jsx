import React from 'react';
import students from "../data/students";
const Student = () => {
  return (
    <div>
      {students.map((student) => (
        <div key={student.stdno}>
          <h3>Name: {student.stdname}</h3>
          <h3>Address: {student.stdadd}</h3>
          <h3>Number: {student.stdno}</h3>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Student;