import React from 'react'
import Footer from '../../components/Footer/Footer'
import TopNave from '../../components/NavigationBar/TopNave'
import PayFullPart from '../../components/Form/PayFullPart'
import BillingInformation from '../../components/Form/BillingInformation'
import PaymentOption from '../../components/Form/PaymentOption'
import CheckoutHeader from '../../components/Sections/CheckoutHeader'
import HotelChckoutLeft from '../../components/Sections/HotelChckoutLeft'

function HotelCheckout() {
  return (
    <>
      <header class="header-detail">
        <div class="container banner-section">
            <TopNave />
        </div>
    </header>    
    <div className="hotel-checkout-main">
        <div class="container">
            {/* <!-- hotel detail section 1 --> */}
            <section class="hotel-checkout-section">
                {/* <!-- Breadcrumb --> */}
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Turkey</a></li>
                        <li class="breadcrumb-item"><a href="#">Istanbul</a></li>
                        <li class="breadcrumb-item active" aria-current="page">CVK Park Bosphorus Hotel Istanbul</li>
                    </ol>
                </nav>                  
            </section>
            {/* <HotelChckoutLeft /> */}
            <section class="checkout-cards-cont">
            <div class="row">
                {/* <!-- Left Section --> */}
                <div class="col-md-8">
                    <CheckoutHeader />
                    <PayFullPart />
                    <BillingInformation />
                    <PaymentOption />
                </div>
    
                {/* <!-- Right Section --> */}
                <HotelChckoutLeft />
                
            </div>
        </section> 

        </div>
    </div>
    <Footer /> 
    </>
  )
}

export default HotelCheckout
