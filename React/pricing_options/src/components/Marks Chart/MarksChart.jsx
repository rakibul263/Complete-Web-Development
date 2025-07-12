import React from 'react';
import { use } from 'react';

const MarksChart = ({ marksPromise }) => {
  const marksData = use(marksPromise);
  // console.log(marks.data);
  const marksChatData = marksData.map(studentData => {
    const student = {
      id: studentData.id,
      name: studentData.name,
      Physics: studentData.marks.physics,
      chemistry: studentData.marks.chemistry,
      math: studentData.marks.chemistry,
    }
    return student;
  })
  console.log(marksChatData);
  return <div></div>;
};

export default MarksChart;
