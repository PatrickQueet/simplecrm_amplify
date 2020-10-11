import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, 
  YAxis, CartesianGrid, Tooltip, 
  Legend, ResponsiveContainer
} from 'recharts';

const data = [
  {
    name: 'Suva', IVR: 4000, SC: 2400, amt: 2400,
  },
  {
    name: 'Lami', IVR: 3000, SC: 1398, amt: 2210,
  },
  {
    name: 'Nausori', IVR: 2000, SC: 9800, amt: 2290,
  },
  {
    name: 'Lautoka', IVR: 2780, SC: 3908, amt: 2000,
  },
  {
    name: 'Nadi', IVR: 1890, SC: 4800, amt: 2181,
  },
  {
    name: 'Others', IVR: 2390, SC: 3800, amt: 2500,
  }
];

export default class SimpleLineChart extends PureComponent {
  
  render() {
    return (
      <div style={{ display: "flex", 
                    alignItems: "center", justifyContent: "center", 
                    width: '100%', height: 300 }}>
       <ResponsiveContainer>
        <LineChart          
          data={data}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="IVR" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="SC" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
    );
  }
}
