import React, { PureComponent } from 'react';
import {
  ResponsiveContainer, PieChart, Pie, Legend, Tooltip,
} from 'recharts';

const data01 = [
  { name: 'Value City', value: 400 }, { name: 'Fiji National Rugby League', value: 300 },
  { name: 'NewNet Jobs', value: 300 }, { name: 'St. Pius X Parish  Raiwaqa', value: 200 },
  { name: 'SAUNAKA METHODIST CIRCUIT', value: 278 }, { name: 'Ratu Mara Hostel', value: 189 },
];


export default class SimplePieChart extends PureComponent {
  
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "flex-start", width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <PieChart >
            <Pie dataKey="value" 
                isAnimationActive={false} 
                data={data01} 
                outerRadius={80} fill="#8884d8" label />

            <Tooltip />
            </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
