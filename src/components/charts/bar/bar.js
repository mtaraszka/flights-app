import BarChart from './bar-chart';
import { useState } from 'react';

const data = [
  { category: 'A', value: 40 },
  { category: 'A', value: 40 },
  { category: 'A', value: 40 },
  { category: 'B', value: 151 },
  { category: 'C', value: 89 },
  { category: 'C', value: 89 },
  { category: 'C', value: 89 },
  { category: 'D', value: 124 },
  { category: 'D', value: 124 },
  { category: 'D', value: 124 },
  { category: 'D', value: 124 },
  { category: 'D', value: 124 },
  { category: 'D', value: 124 },
];

export const Bar = () => {
  const [limit, setLimit] = useState(3);

  return (
    <div className="App">
      <h2>Graphs with React</h2>
      <select onChange={e => setLimit(e.target.value)}>
        <option value={'3'}>3</option>
        <option value={'5'}>5</option>
        <option value={'10'}>10</option>
        <option value={data.length}>All</option>
      </select>
      <BarChart data={data.slice(0, limit)} columnsColor={'#B6A'}/>
    </div>
  );
};
