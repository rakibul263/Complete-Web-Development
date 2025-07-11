import React from 'react';
import { use } from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const ResultChart = ({ resultPromise }) => {
  const result = use(resultPromise)
  return (
    <div>
      <LineChart width={2000} height={500} data={result}>
        <XAxis dataKey={'name'}></XAxis>
        <YAxis></YAxis>
        <Line dataKey='math' stroke='red'></Line>
        <Line dataKey='chemistry' stroke='blue'></Line>
        <Line dataKey='physics' stroke='yellow'></Line>
      </LineChart>
    </div>
  );
};

export default ResultChart;
