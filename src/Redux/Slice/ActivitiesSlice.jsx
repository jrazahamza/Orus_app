import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activities: [
    { id: 1, name: 'CVK Park Bosphorus Hotel Istanbul A', price: 240, rating: 4, location: 'Istanbul', date: '2024-12-20', participants: 2, freebies: { breakfast: true, parking: false, internet: true, airportShuttle: false, cancellation: true } },
    { id: 2, name: 'CVK Park Bosphorus Hotel Istanbul B', price: 180, rating: 3, location: 'Istanbul', date: '2024-12-21', participants: 3, freebies: { breakfast: true, parking: true, internet: true, airportShuttle: true, cancellation: true } },
    { id: 3, name: 'CVK Park Bosphorus Hotel Istanbul C', price: 350, rating: 5, location: 'Istanbul', date: '2024-12-22', participants: 4 },
    { id: 4, name: 'CVK Park Bosphorus Hotel Istanbul D', price: 500, rating: 4, location: 'Istanbul', date: '2024-12-23', participants: 5 },
    { id: 5, name: 'CVK Park Bosphorus Hotel Istanbul E', price: 100, rating: 2, location: 'Ankara', date: '2024-12-19', participants: 1 },
  ],
  filteredActivities: [],
  location: '',
  date: '',
  participants: 0,
};

const activitiesSlice = createSlice({
  name: 'activities',
  initialState,
  reducers: {
    filterActivitiesByPrice(state, action) {
      const price = action.payload;
      state.filteredActivities = state.activities.filter(
        (activity) => activity.price <= price
      );
    },
    filterActivitiesByLocation(state, action) {
      const location = action.payload;
      if (location) {
        state.filteredActivities = state.filteredActivities.filter(
          (activity) => activity.location === location
        );
      }
    },
    filterActivitiesByDate(state, action) {
      const date = action.payload;
      if (date) {
        state.filteredActivities = state.filteredActivities.filter(
          (activity) => activity.date === date
        );
      }
    },
    filterActivitiesByParticipants(state, action) {
      const participants = action.payload;
      if (participants > 0) {
        state.filteredActivities = state.filteredActivities.filter(
          (activity) => activity.participants <= participants
        );
      }
    },
    resetFilters(state) {
      state.filteredActivities = state.activities;
    },
  },
});

export const { filterActivitiesByPrice, filterActivitiesByLocation, filterActivitiesByDate, filterActivitiesByParticipants, resetFilters } = activitiesSlice.actions;
export default activitiesSlice.reducer;
