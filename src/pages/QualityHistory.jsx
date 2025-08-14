import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
  { day: "Mon", PH: 7.00 },
  { day: "Tue", PH: 5.80 },
  { day: "Wed", PH: 5.50 },
  { day: "Thu", PH: 4.00 },
  { day: "Fri", PH: 7.20 },
  { day: "Sat", PH: 9.10 },
  { day: "Sun", PH: 7.2 },
];

const QualityHistory = () => {
  return (
    <div className="p-4">

      <h1 className="text-2xl font-bold mb-4">Water Quality Last week</h1>
      <LineChart width={700} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="PH" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </div>
  );
};

export default QualityHistory;
