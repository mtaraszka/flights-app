import React from 'react';
import * as d3 from 'd3';

const Arc = ({ data, index, createArc, colors }) => (
  <g key={index} className="arc">
    <path className="arc" d={createArc(data)} fill={colors(index)}/>
  </g>
);

const Pie = props => {
  const createPie = d3
    .pie()
    .value(d => d.value)
    .sort(null);

  const createArc = d3
    .arc()
    .cornerRadius(7)
    .padAngle(0.015)
    .innerRadius(props.innerRadius)
    .outerRadius(props.outerRadius);

  const colors = d3
    .scaleOrdinal()
    .range(props.colors);

  const data = createPie(props.data);

  return (
    <svg width={props.width} height={props.height}>
      <g transform={`translate(${props.outerRadius} ${props.outerRadius})`}>
        {data.map((d, i) => (
          <Arc
            key={i}
            index={i}
            data={d}
            createArc={createArc}
            colors={colors}
          />
        ))}
      </g>
    </svg>
  );
};

export default Pie;
