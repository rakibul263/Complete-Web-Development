import { X } from 'lucide-react';
import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = [
    {
      "name": "Alice",
      "Math": 85,
      "Science": 78,
      "English": 92
    },
    {
      "name": "Bob",
      "Math": 74,
      "Science": 81,
      "English": 69
    },
    {
      "name": "Charlie",
      "Math": 90,
      "Science": 88,
      "English": 84
    },
    {
      "name": "Diana",
      "Math": 67,
      "Science": 73,
      "English": 77
    },
    {
      "name": "Ethan",
      "Math": 82,
      "Science": 79,
      "English": 85
    },
    {
      "name": "Fiona",
      "Math": 95,
      "Science": 91,
      "English": 89
    },
    {
      "name": "George",
      "Math": 76,
      "Science": 84,
      "English": 72
    },
    {
      "name": "Hannah",
      "Math": 88,
      "Science": 86,
      "English": 90
    },
    {
      "name": "Ian",
      "Math": 70,
      "Science": 68,
      "English": 74
    },
    {
      "name": "Julia",
      "Math": 93,
      "Science": 89,
      "English": 95
    }
  ]
  

const ResultChart = () => {
    return (
        <div>
            <LineChart width={1000} height={500} data={resultData}>
                <XAxis dataKey="name" />
                <YAxis/>
                <Line type="monotone" dataKey="Math" stroke="#8884d8" />
                <Line type="monotone" dataKey="Science" stroke="#82ca9d" />
                <Line type="monotone" dataKey="English" stroke="#ff7300" />
            </LineChart>
        </div>
    );
};

export default ResultChart;