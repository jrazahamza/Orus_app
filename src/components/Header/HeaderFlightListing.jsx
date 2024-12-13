import React from 'react'
import TopNave from '../NavigationBar/TopNave'
import HotelListText from '../Banner/HotelListText'
import HomeBannerTab from '../Tabs/HomeBannerTab'
function HeaderFlightListing() {
  return (
    <>
    
    <header class="hotel-listing flight-listing">
        <div class="container banner-section">
            <TopNave />
            <HotelListText />
            <HomeBannerTab />
        </div>
    </header>



    </>
  )
}

export default HeaderFlightListing
