import { useEffect, useState } from 'react';
import Chart from './chart';
import * as d3 from 'd3';
import colorGradient from 'javascript-color-gradient';
import Label from './label';

export const Pie = ({ data }) => {
  const [pieData, setPieData] = useState([]);

  const gradientArray = colorGradient.setGradient('#FDA002', '#6F09FC').setMidpoint(data.length).getArray();

  useEffect(() => {
    setPieData(d3.range(data.length).map((item, index) => ({
      date: index,
      value: data[index].value
    })));
  }, [data]);

  return (
    <div>
      <div className={'flex pb-32 pt-20 px-20 flex-row gap-12 justify-around'}>
        <Chart
          data={pieData}
          width={420}
          height={420}
          innerRadius={150}
          outerRadius={210}
          colors={gradientArray}
        />
        <Label data={data} colorPalette={gradientArray}/>
      </div>
    </div>
  );
};
