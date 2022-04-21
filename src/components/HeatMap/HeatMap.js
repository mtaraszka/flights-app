import React, { useEffect, useState } from "react";
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import WorldMap from "react-svg-worldmap";

const HeatMap = ({flights}) => {

    const parsedData = [
        { country: "cn", value: 1 }, // china
    ]
   const [isLoaded, setIsLoaded] = useState(false);
        useEffect(() => {
                fetch('https://gothic459.pythonanywhere.com/api/flights/airspaces')
                    .then(response => response.json())
                    .then(data => {
                        Object.keys(data).map(function(key, index) {
                            parsedData.push({
                                country: key.toLowerCase(),
                                value: data[key].amount
                            });
                        });
                        console.log(parsedData);
                        setIsLoaded(true);

                    });
        }, []);
   return (
       <>
           {isLoaded ? <WorldMap color="green"
                                  backgroundColor="#555555"
                                  frame="true"
                                  title="Heat Map"
                                  size="lg"
                                  data={parsedData} /> :
               <div>Loading...</div>}
       </>
   );
}

export default HeatMap;