import BarChart from './bar-chart';
import { useState } from 'react';

export const Bar = ({props}) => {
  const [limit, setLimit] = useState(3);
  return (
    <div className="App">
      <h2>Graphs with React</h2>
      <select onChange={e => setLimit(e.target.value)}>
        <option value={'3'}>3</option>
        <option value={'5'}>5</option>
        <option value={'10'}>10</option>
        <option value={props.length}>All</option>
      </select>
      <BarChart data={props.slice(0, limit)} columnsColor={'#B6A'}/>
    </div>
  );
};
