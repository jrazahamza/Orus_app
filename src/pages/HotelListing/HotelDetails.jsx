import React from 'react'
import TopNave from '../../components/NavigationBar/TopNave'
import Footer from '../../components/Footer/Footer'
import HotelDetailTopSection from '../../components/Sections/HotelDetailTopSection'
import HotelDetailOverview from '../../components/Tabs/HotelDetailOverview'
import ReviewsAmenities from '../../components/Sections/ReviewsAmenities'
import AvailableRooms from '../../components/Sections/AvailableRooms'
import Reviews from '../../components/Sections/Reviews'
import HotelCard from '../../components/Card/Hotel/HotelCard'
import HotelDetailMap from '../../components/Map/HotelDetailMap'
function HotelDetails() {
  return (
    <>
      <header class="header-detail">
        <div class="container banner-section">
            <TopNave />
        </div>
    </header>
    <HotelDetailTopSection />
    <HotelDetailOverview />
    <ReviewsAmenities />
    <AvailableRooms />
    <HotelCard />
    <HotelDetailMap />
    <Reviews />
    <Footer /> 
    </>
  )
}

export default HotelDetails
