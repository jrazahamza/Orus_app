// selectedFlightSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedFlight: null,
};

const selectedFlightSlice = createSlice({
  name: 'selectedFlight',
  initialState,
  reducers: {
    setSelectedFlight(state, action) {
      state.selectedFlight = action.payload;
    },
  },
});

export const { setSelectedFlight } = selectedFlightSlice.actions;
export default selectedFlightSlice.reducer;
