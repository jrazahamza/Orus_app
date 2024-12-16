import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  freebies: {
    economy: false,
    bussiness: false,
    mixed: false,
    firstClass: false,
    economyPlus: false,
  },
  stops: {
    frontDesk: false,
    airConditioned: false,
    fitness: false,
    pool: false,
  },
  
};

const freebieFlightSlice = createSlice({
  name: 'freebiesFlight',
  initialState,
  reducers: {
    toggleFreebie(state, action) {
      const { freebie } = action.payload;
      state.freebies[freebie] = !state.freebies[freebie];
    },
    toggleStop(state, action) {
      const { stop } = action.payload;
      state.stops[stop] = !state.stops[stop];
    },
  },
});

export const { toggleFreebie, toggleStop } = freebieFlightSlice.actions;
export default freebieFlightSlice.reducer;
