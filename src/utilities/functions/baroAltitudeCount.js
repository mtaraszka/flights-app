export const baroAltitudeCount = (flights) => {
    return [
        { category: 'No height', value: (flights).filter(({baro_altitude}) => parseInt(baro_altitude) > 0 && parseInt(baro_altitude) <= 2000).length },
        { category: '0 - 2000 meters', value: (flights).filter(({baro_altitude}) => parseInt(baro_altitude) > 0 && parseInt(baro_altitude) <= 2000).length },
        { category: '2000 - 4000 meters', value: (flights).filter(({baro_altitude}) => parseInt(baro_altitude) > 2000 && parseInt(baro_altitude) <= 4000).length },
        { category: '4000 - 6000 meters', value: (flights).filter(({baro_altitude}) => parseInt(baro_altitude) > 4000 && parseInt(baro_altitude) <= 6000).length },
        { category: '6000 - 8000 meters', value: (flights).filter(({baro_altitude}) => parseInt(baro_altitude) > 6000 && parseInt(baro_altitude) <= 8000).length },
        { category: '8000 - 10000 meters', value: (flights).filter(({baro_altitude}) => parseInt(baro_altitude) > 8000 && parseInt(baro_altitude) <= 10000).length },
        { category: '10000 - 12000 meters', value: (flights).filter(({baro_altitude}) => parseInt(baro_altitude) > 10000 && parseInt(baro_altitude) <= 12000).length },
        { category: '12000 - 14000 meters', value: (flights).filter(({baro_altitude}) => parseInt(baro_altitude) > 12000 && parseInt(baro_altitude) <= 14000).length },
        { category: '14000 - 16000 meters', value: (flights).filter(({baro_altitude}) => parseInt(baro_altitude) > 14000 && parseInt(baro_altitude) <= 16000).length },
    ]
}

// (flights).filter(({baro_altitude}) => parseInt(baro_altitude) > 0 && parseInt(baro_altitude) <= 2000).length()