import { useEffect, useState } from 'react';
import getCountries from '../utilities/functions/getCountries';
import PieWrapper from './charts/pie/pie-wrapper';

const CountPlanesByCountries = ({ flights }) => {
  const [countedPlanesByCountries, setCountedPlanesByCountries] = useState(null);

  useEffect(() => {
    setCountedPlanesByCountries(getCountries(flights));
  }, [flights]);

  return (
    <div>
      {countedPlanesByCountries && <PieWrapper data={countedPlanesByCountries.slice(0, 10)}/>}
    </div>
  )
}

export default CountPlanesByCountries;
