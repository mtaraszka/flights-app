export const isPlaneOnGround = (flights) => {
  let planesOnGround = 0;
  let planesFlying = 0;

  flights.forEach(flight => flight.on_ground === 'False' ? planesFlying++ : planesOnGround++)

  return [
    {label: 'Planes on ground', value: planesOnGround},
    {label: 'Planes flying', value: planesFlying},
  ]
}