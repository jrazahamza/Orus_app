import React from 'react'

function HotelTabContent() {
  return (
    <>
    <div class="tab-pane fade show active" id="hotels" role="tabpanel" aria-labelledby="hotels-tab">
        <div class="row">
            <div class="col-md-8">
                <div class="hotel-listing-card">
                    <HotelListCard />                                          
                    <HotelListCard />                                          
                    <HotelListCard />                                          
                    <HotelListCard />                                          
                    <HotelListCard />                                          
                    <div class="view-more">
                        <a href="#" class="btn btn-warning btn-lg">View More<span class="ms-2"><img src="images/under-btn-icon.png" alt="" /></span></a>
                    </div>                                                                                                                                                                                                                             
                </div>
            </div>
            <div class="col-md-4">
                <div class="suggested-section">
                    <h6 class="sugested-h6">Suggested By ORUS</h6>
                    <div class="suggested-box">
                        <SuggestedCard />
                        <ShowDetailsCard />
                        <SuggestedCard /> 
                        <AiAssistant />                                   
                    </div>                                    
                </div>
            </div>    
        </div>
    </div>      
    </>
  )
}

export default HotelTabContent
