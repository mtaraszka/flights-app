import { useEffect, useState } from 'react';
import CountPlanesByCountries from './components/CountPlanesByCountries';

const Homepage = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const getFlights = async () => {
      await fetch('https://gothic459.pythonanywhere.com/api/flights')
        .then(response => response.json())
        .then(data => {
          setFlights(data);
        });
    };

    getFlights();
  }, []);

  return (
    <div className="container text-4xl bg-[#666666]">

      Working!
      <CountPlanesByCountries flights={flights}/>
    </div>
  );
};

export default Homepage;