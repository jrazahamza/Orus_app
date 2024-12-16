import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  freebies: {
    breakfast: false,
    parking: false,
    internet: false,
    airportShuttle: false,
    cancellation: false,
  },
};

const freebieSlice = createSlice({
  name: 'freebies',
  initialState,
  reducers: {
    toggleFreebie(state, action) {
      const { freebie } = action.payload;
      state.freebies[freebie] = !state.freebies[freebie];
    },
  },
});




export const { toggleFreebie } = freebieSlice.actions;
export default freebieSlice.reducer;

