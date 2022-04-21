import React, { useEffect, useState } from "react";
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

   return (
       <div style={{display: 'flex', justifyContent: 'center'}}>
           {isLoaded ? <WorldMap color="green"
                                  backgroundColor="#666666"
                                  frame="true"
                                  title="Heat Map"
                                  size="xxl"
                                  data={data} /> :
               <div>Loading...</div>}
       </div>
   );
}

export default HeatMap;