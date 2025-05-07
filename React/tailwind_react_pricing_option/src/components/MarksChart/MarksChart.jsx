import React, { use } from 'react';

const MarksChart = ({marksPromise}) => {
    const marksDataRes = use(marksPromise);
    const marksData = marksDataRes.data;
    // const marksChartData = marksData.map(studentData => {
    //     const student ={
    //         id: studentData.student_id,
    //         name: studentData.name,
    //         math: studentData.marks.math,
    //         science: studentData.marks.science,
    //         english: studentData.marks.english,
    //     }
    //     return student;
    // })
    return (
        <div>
            
        </div>
    );
};

export default MarksChart;