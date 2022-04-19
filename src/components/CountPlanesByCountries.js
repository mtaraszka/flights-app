import { useEffect, useState } from 'react';
import getCountries from '../utilities/functions/getCountries';

const CountPlanesByCountries = ({ flights }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(getCountries(flights));
  }, [flights]);


  return (
    <div>
      {console.log(countries)}
    </div>
  )
}

export default CountPlanesByCountries;
