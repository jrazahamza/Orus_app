import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  departure: 0, 
  arrival: 0,   
};

const flightTimesSlice = createSlice({
  name: 'flightTimes',
  initialState,
  reducers: {
    setDeparture(state, action) {
      state.departure = action.payload; 
    },
    setArrival(state, action) {
      state.arrival = action.payload; 
    },
  },
});

export const { setDeparture, setArrival } = flightTimesSlice.actions;
export default flightTimesSlice.reducer;
