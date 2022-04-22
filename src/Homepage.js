import { useEffect, useState } from 'react';
import Spinner from './components/Spinner';
import { PlanesOnGroundCompare } from './components/planes-on-ground-compare';
import WorldMap from './components/WorldMap/WorldMap';
import CountPlanesByCountries from './components/count-planes-by-countries';
import VerticalRateOfPlanes from './components/vertical-rate-of-planes';
import CheckTrackOfPlanes from './components/CheckTrackOfPlanes';
import { BarometricLatitude } from './components/BarometricLatitude';
import Section from './components/section';
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
    return <Spinner loading={true}/>;
  }

  return (
    <div className="text-center text-[#EEEEEE] bg-[#222831]">
      <div className={'container bg-[#393E46] py-8'}>

        <Section>
          <h1 className={'mb-16 text-4xl'}>
            Flights analysis application
          </h1>

          <h2>
            Current planes positions
          </h2>
          <WorldMap flights={flights}/>
        </Section>

        <Section>
          <HeatMap flights={flights}/>
        </Section>

        <Section>
          <h2>
            Amount of planes by countries
          </h2>
          <CountPlanesByCountries flights={flights}/>
        </Section>

        <Section>
          <h2>
            Planes on the ground / in the air
          </h2>
          <PlanesOnGroundCompare flights={flights}/>
        </Section>

        <Section>
          <h2>
            Planes sorted by barometric height
          </h2>
          <BarometricLatitude flights={flights}/>
        </Section>

        <Section>
          <h2>
            Kraje pochodzenia samolotów bez podania ostatniej pozycji przez 15 sekund
          </h2>
          <CountPlanesByCountries flights={(flights).filter(({ time_position }) => time_position === '')}/>
        </Section>

        <Section>
          <h2>
            Planes flight directions
          </h2>
          <CheckTrackOfPlanes flights={flights}/>
        </Section>

        <Section>
          <h2>
            Current status of plane
          </h2>
          <VerticalRateOfPlanes flights={flights}/>
        </Section>


      </div>
    </div>
  );
};

export default Homepage;
