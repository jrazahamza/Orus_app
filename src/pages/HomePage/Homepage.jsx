import React from "react";
import Header from "../../components/Header/Header";
import FlightCard from "../../components/Card/Flight/FlightCard";
import DifferentPlaces from "../../components/DifferentPlaces/DifferentPlaces";
import Footer from "../../components/Footer/Footer";
import HotelCard from "../../components/Card/Hotel/HotelCard";
import Testimonials from "../../components/Testimonials/Testimonials";
import AboutOrus from "../../components/AboutOrus/AboutOrus";
import ExperienceStaysFlights from "../../components/ExperienceStaysFlights/ExperienceStaysFlights";
function Homepage() {
  return (
    <>
    <Header />
    <FlightCard />
    <DifferentPlaces />
    <ExperienceStaysFlights />
    <AboutOrus />
    <Testimonials />
    <HotelCard />
    <Footer />
    </>
  );
}

export default Homepage;