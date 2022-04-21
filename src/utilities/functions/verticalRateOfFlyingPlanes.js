export const verticalRateOfFlyingPlanes = (flights) => {
  const flyingPlanes = flights.filter(flight => flight.on_ground !== 'False');
  let zeroRate = 0;
  let positiveRate = 0;
  let negativeRate = 0;

  flyingPlanes.forEach(plane => {
    if (plane.vertical_rate < 0) {
      negativeRate++
    } else if (plane.vertical_rate > 0) {
      positiveRate++
    } else {
      zeroRate++
    }
  })

  return [
    {label: 'Amount of descending airplanes', value: negativeRate},
    {label: 'Amount of regular position airplanes', value: zeroRate},
    {label: 'Amount of climbing airplanes', value: positiveRate},
  ]
};