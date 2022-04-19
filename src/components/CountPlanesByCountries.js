import { useEffect, useState } from 'react';
import getCountries from '../utilities/functions/getCountries';
import PieWrapper from './charts/pie/pie-wrapper';

const CountPlanesByCountries = ({ flights }) => {
  const [countedPlanesByCountries, setCountedPlanesByCountries] = useState(0);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    setCountedPlanesByCountries(getCountries(flights));
  }, [flights]);

  return (
    <div>
      <div className={'w-fit mx-auto'}>
        <select onChange={e => setLimit(e.target.value)}>
          <option value={'10'}>10</option>
          <option value={'15'}>15</option>
          <option value={'30'}>30</option>
          <option value={'50'}>50</option>
          <option value={countedPlanesByCountries.length}>All</option>
        </select>
      </div>
      {countedPlanesByCountries && <PieWrapper data={countedPlanesByCountries.slice(0, limit)}/>}
    </div>
  )
}

export default CountPlanesByCountries;
