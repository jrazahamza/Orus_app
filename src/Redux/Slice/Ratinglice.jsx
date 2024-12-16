import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedRating: 0,
};

const ratingSlice = createSlice({
  name: 'rating',
  initialState,
  reducers: {
    setRating(state, action) {
      state.selectedRating = action.payload; 
    },
  },
});

export const { setRating } = ratingSlice.actions;
export default ratingSlice.reducer;
