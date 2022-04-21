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
    {label: 'Liczba samolotów opadających', value: negativeRate},
    {label: 'Liczba samolotów na stałej wysokości', value: zeroRate},
    {label: 'Liczba samolotów wznoszących się', value: positiveRate},
  ]
};