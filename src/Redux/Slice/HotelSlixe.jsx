// src/Redux/Slice/HotelAmenitiesSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  amenities: {
    frontDesk: false,
    airConditioned: false,
    fitness: false,
    pool: false,
  },
};

const hotelAmenitiesSlice = createSlice({
  name: 'hotelAmenities',
  initialState,
  reducers: {
    toggleAmenity(state, action) {
      const { amenity } = action.payload;
      state.amenities[amenity] = !state.amenities[amenity];
    },
  },
});

export const { toggleAmenity } = hotelAmenitiesSlice.actions;
export default hotelAmenitiesSlice.reducer;
