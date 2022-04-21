import React, { useEffect, useState } from "react";
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import WorldMap from "react-svg-worldmap";

const HeatMap = ({flights}) => {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

        useEffect(() => {
                fetch('https://gothic459.pythonanywhere.com/api/flights/airspaces')
                    .then(response => response.json())
                    .then(responseJson => {
                        Object.keys(responseJson).forEach(key => {
                            setData(data => [...data, {
                                "country": key,
                                value: responseJson[key].amount
                            }]);
                        });
                        setIsLoaded(true);
                    });
        }, []);

        console.log(data)
        
   return (
       <>
           {isLoaded ? <WorldMap color="green"
                                  backgroundColor="#555555"
                                  frame="true"
                                  title="Heat Map"
                                  size="lg"
                                  data={data} /> :
               <div>Loading...</div>}
       </>
   );
}

export default HeatMap;