import React from 'react'

function HotelListTab() {
  return (
    <>
                    <div class="col-lg-9 col-md-9">
                        <div class="row">
                            <div class="col-12">
                                <div class="hotel-list-tabs">
                                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                                        <li class="nav-item">
                                            <a class="nav-link active" id="hotels-tab" data-bs-toggle="tab" href="#hotels"
                                                role="tab" aria-controls="hotels" aria-selected="true">
                                                Hotels <br /><span class="sub-tabs">257 places</span>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="motels-tab" data-bs-toggle="tab" href="#motels" role="tab"
                                                aria-controls="motels" aria-selected="false">
                                                Motels <br /><span class="sub-tabs">51 places</span>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="resorts-tab" data-bs-toggle="tab" href="#resorts" role="tab"
                                                aria-controls="resorts" aria-selected="false">
                                                Resorts <br /><span class="sub-tabs">72 places</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="row my-4">
                            <div class="col-md-6">
                                <p>Showing 4 of 257 places</p>
                            </div>
                            <div class="col-md-6 text-md-end">
                                <div class="dropdown">
                                    <button class="btn btn-outline-secondary dropdown-toggle" type="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Sort by Price
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Low to High</a></li>
                                        <li><a class="dropdown-item" href="#">High to Low</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="tab-content" id="myTabContent">
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

                            <div class="tab-pane fade" id="motels" role="tabpanel" aria-labelledby="motels-tab">
                                <div class="row">
                                    <div class="col-md-8">
                                        <div class="hotel-listing-card">
                                            <HotelListCard />                                          
                                            <HotelListCard />                                          
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

                            <div class="tab-pane fade" id="resorts" role="tabpanel" aria-labelledby="resorts-tab">
                                <div class="row">
                                    <div class="col-md-8">
                                      <div class="hotel-listing-card">
                                              <HotelListCard />                                          
                                              <HotelListCard />                                          
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
                        </div>
                    </div>      
    </>
  )
}

export default HotelListTab
