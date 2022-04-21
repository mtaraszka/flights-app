import { useEffect, useState } from 'react';
import Spinner from './components/Spinner';
import { Bar } from './components/charts';
import { PlanesOnGroundCompare } from './components/planes-on-ground-compare';
import WorldMap from './components/WorldMap/WorldMap';
import CountPlanesByCountries from './components/count-planes-by-countries';

const Homepage = () => {
  const [flights, setFlights] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://gothic459.pythonanywhere.com/api/flights')
      .then(response => response.json())
      .then(data => {
        console.log(data.length)
        setIsLoading(false);
        setFlights(data);
      });
  }, []);

  if (isLoading) {
    return <Spinner loading={true} />
  }

  return (
    <div className="container text-center flex-auto h-fit w-full text-4xl bg-[#666666] py-16">
      <CountPlanesByCountries flights={flights}/>
      <PlanesOnGroundCompare flights={flights}/>
      <Bar/>
      <WorldMap flights={flights} />
    </div>
  );
};

export default Homepage;
