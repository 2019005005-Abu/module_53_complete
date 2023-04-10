
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const ReChart = () => {
    const marksArray = [
        { id: 1, name: "Student 1", math: 90, physics: 85, chemistry: 95 },
        { id: 2, name: "Student 2", math: 80, physics: 75, chemistry: 85 },
        { id: 3, name: "Student 3", math: 70, physics: 65, chemistry: 75 },
        { id: 4, name: "Student 4", math: 60, physics: 55, chemistry: 65 },
        { id: 5, name: "Student 5", math: 80, physics: 75, chemistry: 85 },
        { id: 6, name: "Student 6", math: 70, physics: 65, chemistry: 75 },
        { id: 7, name: "Student 7", math: 60, physics: 55, chemistry: 65 },
        { id: 8, name: "Student 8", math: 85, physics: 80, chemistry: 90 },
        { id: 9, name: "Student 9", math: 75, physics: 70, chemistry: 80 },
        { id: 10, name: "Student 10", math: 65, physics: 60, chemistry: 70 },
      ];
      
  return (
    <div className='md:p-3'>
      <h1 className='text-5xl font-extrabold text-center'>React</h1>
       <LineChart width={800} height={300} data={marksArray}>
       <Line dataKey="math"></Line>
        <Line dataKey="physics"></Line>
        <Line dataKey="chemistry"></Line>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
       </LineChart>
    </div>
  )
}

export default ReChart
