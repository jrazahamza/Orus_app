import { configureStore } from '@reduxjs/toolkit';
import freebieReducer from '../Slice/Slice';
import hotelAmenitiesReducer from '../Slice/HotelSlixe';
import ratingReducer from '../Slice/Ratinglice';
import priceReducer from '../Slice/PriceSlice';
import activitiesReducer from '../Slice/ActivitiesSlice'
import flightTimesReducer from '../Slice/FlightSlice/FlightDepartureFilter';
import freebieFlightReducer from '../Slice/FlightSlice/FlightFreebee';
import selectedFlightReducer from '../Slice/FlightSlice/SelectedFlights';



const store = configureStore({
  reducer: {
    freebies: freebieReducer,
    hotelAmenities: hotelAmenitiesReducer,
    rating: ratingReducer, 
    price: priceReducer,
    activities: activitiesReducer,
    flightTimes: flightTimesReducer,
    freebiesFlight: freebieFlightReducer,
    selectedFlight:selectedFlightReducer,
   

  },
});

export default store;
