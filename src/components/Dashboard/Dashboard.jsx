import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
    let students = [
        {
          registrationNo: "202101",
          name: "John Doe",
          physics: 90,
          chemistry: 85,
          biology: 92,
          math: 95
        },
        {
          registrationNo: "202102",
          name: "Jane Doe",
          physics: 92,
          chemistry: 88,
          biology: 86,
          math: 90
        },
        {
          registrationNo: "202103",
          name: "Bob Smith",
          physics: 85,
          chemistry: 90,
          biology: 88,
          math: 92
        },
        {
          registrationNo: "202104",
          name: "Alice Lee",
          physics: 95,
          chemistry: 92,
          biology: 90,
          math: 85
        },
        {
          registrationNo: "202105",
          name: "David Wang",
          physics: 88,
          chemistry: 85,
          biology: 95,
          math: 90
        },
        {
          registrationNo: "202106",
          name: "Samantha Kim",
          physics: 90,
          chemistry: 92,
          biology: 88,
          math: 85
        },
        {
          registrationNo: "202107",
          name: "Alex Chen",
          physics: 92,
          chemistry: 90,
          biology: 85,
          math: 88
        },
        {
          registrationNo: "202108",
          name: "Emily Zhang",
          physics: 85,
          chemistry: 88,
          biology: 92,
          math: 90
        },
        {
          registrationNo: "202109",
          name: "Jacky Liu",
          physics: 95,
          chemistry: 90,
          biology: 85,
          math: 92
        },
        {
          registrationNo: "202110",
          name: "Lily Wang",
          physics: 88,
          chemistry: 92,
          biology: 90,
          math: 85
        },
        {
          registrationNo: "202111",
          name: "Tommy Chen",
          physics: 90,
          chemistry: 85,
          biology: 92,
          math: 88
        },
        {
          registrationNo: "202112",
          name: "Grace Liu",
          physics: 92,
          chemistry: 88,
          biology: 85,
          math: 90
        }
      ];
      
    return (
        <div>
           <LineChart 
           width={1000} 
           height={300} 
           data={students}
           > 
           <Line dataKey='biology'></Line>
           <Line dataKey='chemistry'></Line>
           <XAxis dataKey="name" />
           <YAxis></YAxis>
           <Tooltip></Tooltip>
           </LineChart> 
           
        </div>
    );
};

export default Dashboard;