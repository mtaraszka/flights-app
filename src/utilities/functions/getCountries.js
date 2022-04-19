const getCountries = (flights) => {
  let counts = {};

  let countries = [];
  flights.forEach(flight => countries.push(flight.origin_country));

  countries.forEach(country => counts[country] = (counts[country] || 0) + 1);

  return Object.keys(counts).map(key => {
    return { label: key, value: counts[key] };
  }).sort((a,b) => a.value - b.value).reverse();
};

export default getCountries;
