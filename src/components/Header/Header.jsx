import React from 'react'
import TopNave from '../NavigationBar/TopNave'
import HomeHomeText from '../Banner/HomeText'
import HomeBannerTab from '../Tabs/HomeBannerTab'
function Header() {
  return (
    <>
    <header class="header">
        <div class="container banner-section">
            <TopNave />
            <HomeHomeText />
            <HomeBannerTab />
        </div>
    </header>
    </>
  )
}

export default Header
