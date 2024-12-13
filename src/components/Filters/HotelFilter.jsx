import React from 'react'
import PriceFilter from './Hotel/PriceFilter'
import HotelRating from './Hotel/HotelRating'
import SearchHotel from './Hotel/SearchHotel'
import HotelAmenities from './Hotel/HotelAmenities'
import Freebie from './Hotel/Freebie'
function HotelFilter() {
  return (
    <>
      <PriceFilter />
      <HotelRating />
      <SearchHotel />
      <HotelAmenities />
      <Freebie />
    </>
  )
}

export default HotelFilter
