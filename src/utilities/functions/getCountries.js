const getCountries = (flights) => {
  let countries = [];

  flights.forEach(flight => {
    console.log(flight)

    if (countries.includes(flight.origin_country)) {
      return;
    }
    countries.push(flight.origin_country)
  });

  return countries;
};

export default getCountries;
