import { useEffect, useState } from 'react';
import CountPlanesByCountries from './components/CountPlanesByCountries';
import Spinner from './components/Spinner';

const Homepage = () => {
  const [flights, setFlights] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const getFlights = async () => {
      await fetch('https://gothic459.pythonanywhere.com/api/flights')
        .then(response => response.json())
        .then(data => {
          console.log(data.length)
          setIsLoading(false);
          setFlights(data);
        });
    };

    getFlights();
  }, []);

  return (
    <div className="container text-center flex-auto text-4xl bg-[#666666] py-16">
      <Spinner loading={isLoading} />
      <CountPlanesByCountries flights={flights}/>
    </div>
  );
};

export default Homepage;
