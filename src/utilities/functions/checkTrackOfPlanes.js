export const checkTrackOfPlanes = (flights) => {
  const flyingPlanes = flights.filter(flight => flight.on_ground !== 'False');

  let north = 0;
  let northWest = 0;
  let northEast = 0;
  let south = 0;
  let southWest = 0;
  let southEast = 0;
  let west = 0;
  let east = 0;

  flyingPlanes.forEach(plane => {
    const trueTrack = plane.true_track;
    if (trueTrack < 22.5 || trueTrack > 337.5) {
      north++;
    } else if (trueTrack < 67.5) {
      northEast++;
    } else if (trueTrack < 112.5) {
      east++;
    } else if (trueTrack < 157.5) {
      southEast++;
    } else if (trueTrack < 202.5) {
      south++;
    } else if (trueTrack < 247.5) {
      southWest++;
    } else if (trueTrack < 292.5) {
      west++;
    } else {
      northWest++;
    }
  });

  return [
    {category: 'Północ', value: north},
    {category: 'Północny wschód', value: northEast},
    {category: 'Wschód', value: east},
    {category: 'Południowy wschód', value: southEast},
    {category: 'Południe', value: south},
    {category: 'Południowy zachód', value: southWest},
    {category: 'Zachód', value: west},
    {category: 'Północny zachód', value: northWest},
  ];
};