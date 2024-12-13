import React from 'react'

function SuggestedCard() {
  return (
    <>
        <div class="card flight-card">

            <div class="right-card-header d-flex justify-content-between">
                <div class="text-end d-flex">
                    <p class="m-0 stops-info">2 Stops <span class="travel-time">2h 12m</span></p>
                    <span class="badge fastest-badge">Fastest</span>
                </div>
            </div>                                        
            <div class="route-section mt-3">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="text-start">
                        <p class="city-name m-0">Cairo<br /><small class="flight-time">02:00 am</small></p>                                                        
                    </div>
                    <div class="plane-icon flight-icon-between">
                        <i class="fas fa-plane-departure bet-line">                                                        
                            <img class="flight-suggest-btw" src="http://127.0.0.1:8080/images/right-side-card-flight-between.png" alt="" />                                                                
                        </i>
                    </div>                                                    
                    <div class="text-end">
                        <p class="city-name m-0">Los Angeles<br /><small class="flight-time">02:00 am</small></p>                                                        
                    </div>
                </div>        
            </div>                            
            <div class="flight-price-detai-select d-flex justify-content-between align-items-center mt-4">
                <div class="flight-detail">
                    <p class="flight-details">Wed 12 | Economy </p>
                </div>                                                                                                    
                <div class="flight-price">
                    <h4 class="price-right">$130.95</h4>
                </div>
            </div>
        </div>      
    </>
  )
}

export default SuggestedCard
