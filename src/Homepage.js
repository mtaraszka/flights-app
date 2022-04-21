import { useEffect, useState } from 'react';
import Spinner from './components/Spinner';
import { PlanesOnGroundCompare } from './components/planes-on-ground-compare';
import WorldMap from './components/WorldMap/WorldMap';
import CountPlanesByCountries from './components/count-planes-by-countries';
import VerticalRateOfPlanes from './components/vertical-rate-of-planes';
import CheckTrackOfPlanes from './components/CheckTrackOfPlanes';
import HeatMap from './components/HeatMap/HeatMap';

const Homepage = () => {
  const [flights, setFlights] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://gothic459.pythonanywhere.com/api/flights')
      .then(response => response.json())
      .then(data => {
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
      <WorldMap flights={flights} />
      <CountPlanesByCountries
        title={'Kraje pochodzenia samolotów bez podania ostatniej pozycji przez 15 sekund'}
        flights={(flights).filter(({time_position}) => time_position === '')}
      />
      <VerticalRateOfPlanes flights={flights}/>
      <CheckTrackOfPlanes flights={flights}/>
      <HeatMap flights={flights}/>
    </div>
  );
};

export default Homepage;
