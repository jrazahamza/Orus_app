import React from 'react'
import PriceFilter from './Flight/PriceFilter'
import FlightTimes from './Flight/FlightTimes'
import SearchAirline from './Flight/SearchAirline'
import AirlineStops from './Flight/AirlineStops'
import Freebie from './Flight/Freebie'
function FlightFilter() {
  return (
    <>
      <PriceFilter />
      <FlightTimes />
      <SearchAirline />
      <AirlineStops />
      <Freebie />
    </>
  )
}

export default FlightFilter
