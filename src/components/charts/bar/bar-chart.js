import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const BarChart = ({ data }) => {
  const chart = useRef()

  useEffect(() => {
    const margin = {top: 50, right: 0, bottom: 30, left: 60}

    const chartWidth = parseInt(d3.select('#chart-wrapper').style('width')) - margin.left -margin.right
    const chartHeight = parseInt(d3.select('#chart-wrapper').style('height')) - margin.top -margin.bottom

    const svg =  d3.select(chart.current)
      .attr('width', chartWidth + margin.left + margin.right)
      .attr('height', chartHeight + margin.top + margin.bottom)

    const x = d3.scaleBand()
      .domain(d3.range(data.length))
      .range([margin.left, chartWidth - margin.right])
      .padding(0.1)

    svg.append('g')
      .attr('transform', 'translate(0,' + chartHeight + ')')
      .call(d3.axisBottom(x).tickFormat(i => data[i].category).tickSizeOuter(0))

    const max =d3.max(data, function (d){return d.value})

    const y = d3.scaleLinear()
      .domain([0, max])
      .range([chartHeight, margin.top])

    svg.append('g')
      .attr('transform', 'translate(' + margin.left + ',0)')
      .call(d3.axisLeft(y))

    svg.append('g')
      .attr('fill', '#65f0eb')
      .selectAll('rect')
      .data(data)
      .join('rect')
        .attr('x', (d,i) => x(i))
        .attr('y', d => y(d.value))
        .attr('height', d => y(0)-y(d.value))
        .attr('width', x.bandwidth())

  }, [data])

  return (
    <div id={'chart-wrapper'} className={'bg-[#555555] w-full h-96'}>
      <svg ref={chart}/>
    </div>
  )
};

export default BarChart;
