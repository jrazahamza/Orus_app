import React from 'react'

function HomeBannerTab() {
  return (
    <>
          <div class="banner-table">
            <div class="booking-section">
              <ul class="nav nav-tabs mb-3" id="bookingTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link active"
                    id="flights-tab"
                    data-bs-toggle="tab"
                    href="#flights"
                    role="tab"
                    aria-controls="flights"
                    aria-selected="true"
                  >
                    <i class="fa fa-plane" aria-hidden="true"></i> Flights
                  </a>
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    id="stays-tab"
                    data-bs-toggle="tab"
                    href="#stays"
                    role="tab"
                    aria-controls="stays"
                    aria-selected="false"
                  >
                    <i class="fa fa-bed" aria-hidden="true"></i> Stays
                  </a>
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    id="activities-tab"
                    data-bs-toggle="tab"
                    href="#activities"
                    role="tab"
                    aria-controls="activities"
                    aria-selected="false"
                  >
                    <i class="fas fa-binoculars"></i> Activities
                  </a>
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    id="cabs-tab"
                    data-bs-toggle="tab"
                    href="#cabs"
                    role="tab"
                    aria-controls="cabs"
                    aria-selected="false"
                  >
                    <i class="fa fa-car" aria-hidden="true"></i> Cabs
                  </a>
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    id="offers-tab"
                    data-bs-toggle="tab"
                    href="#offers"
                    role="tab"
                    aria-controls="offers"
                    aria-selected="false"
                  >
                    <i class="fa fa-car" aria-hidden="true"></i> Special Offers
                  </a>
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    id="lorem-tab"
                    data-bs-toggle="tab"
                    href="#lorem"
                    role="tab"
                    aria-controls="lorem"
                    aria-selected="false"
                  >
                    <i class="fa fa-car" aria-hidden="true"></i> Lorem
                  </a>
                </li>
              </ul>

              <div class="tab-content" id="myTabContent">
                <div
                  class="tab-pane flights-tabs fade show active"
                  id="flights"
                  role="tabpanel"
                  aria-labelledby="flights-tab"
                >
                  <div class="row flights-content align-items-center tabs-divider">
                    <div class="col-lg-2 col-sm-6 mb-3">
                      <div class="input-label">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                        From
                      </div>
                      <div class="location-value">Warsaw, Poland</div>
                    </div>
                    <div class="col-lg-2 col-sm-6 mb-3">
                      <div class="input-label">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                        To
                      </div>
                      <div class="location-value">Paris, France</div>
                    </div>
                    <div class="col-lg-2 col-sm-6 mb-3">
                      <div class="input-label">
                        <i class="fa fa-calendar-plus-o" aria-hidden="true"></i>
                        Departure
                      </div>
                      <div class="date-value">12 Jan, 2024</div>
                    </div>
                    <div class="col-lg-2 col-sm-6 mb-3">
                      <div class="input-label">
                        <i class="fa fa-calendar-plus-o" aria-hidden="true"></i>
                        Return
                      </div>
                      <div class="date-value">19 Jan, 2024</div>
                    </div>
                    <div class="col-lg-2 col-sm-6 mb-3 text-lg-end text-sm-start">
                      <span class="promo-code-link">+ Add Promo Code</span>
                    </div>
                    <div class="col-lg-2 col-sm-6 mb-3 text-lg-end text-sm-start">
                      <button class="btn show-hotels-btn">
                        Search Flights
                      </button>
                    </div>
                  </div>
                </div>

                <div
                  class="tab-pane fade tabs-stays"
                  id="stays"
                  role="tabpanel"
                  aria-labelledby="stays-tab"
                >
                  <div class="row align-items-center tabs-divider">
                    <div class="col-lg-2 col-sm-6 mb-3">
                      <div class="input-label">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                        From
                      </div>
                      <div class="location-value">Warsaw, Poland</div>
                    </div>
                    <div class="col-lg-2 col-sm-6 mb-3">
                      <div class="input-label">
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                        Check In
                      </div>
                      <div class="date-value">12 Jan, 2024</div>
                    </div>
                    <div class="col-lg-2 col-sm-6 mb-3">
                      <div class="input-label">
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                        Check Out
                      </div>
                      <div class="date-value">19 Jan, 2024</div>
                    </div>
                    <div class="col-lg-2 col-sm-6 mb-3">
                      <div class="input-label">
                        <i class="fa fa-users" aria-hidden="true"></i>
                        Travelers
                      </div>
                      <div class="travelers-value">
                        2 adults · 0 children · 1 room
                      </div>
                    </div>
                    <div class="col-lg-2 col-sm-6 mb-3 text-lg-end text-sm-start">
                      <span class="promo-code-link">+ Add Promo Code</span>
                    </div>
                    <div class="col-lg-2 col-sm-6 mb-3 text-lg-end text-sm-start">
                      <button class="btn show-hotels-btn">Show Hotels</button>
                    </div>
                  </div>
                </div>

                <div
                  class="tab-pane fade tabs-activities"
                  id="activities"
                  role="tabpanel"
                  aria-labelledby="activities-tab"
                >
                  <div class="row align-items-center tabs-divider">
                    <div class="col-lg-2 col-sm-6 mb-3">
                      <div class="input-label">Location</div>
                      <div class="location-value">Warsaw, Poland</div>
                    </div>
                    <div class="col-lg-2 col-sm-6 mb-3">
                      <div class="input-label">Activity Date</div>
                      <div class="date-value">12 Jan, 2024</div>
                    </div>
                    <div class="col-lg-2 col-sm-6 mb-3">
                      <div class="input-label">Participants</div>
                      <div class="travelers-value">2 adults</div>
                    </div>
                    <div class="col-lg-2 col-sm-6 mb-3 text-lg-end text-sm-start">
                      <span class="promo-code-link">+ Add Promo Code</span>
                    </div>
                    <div class="col-lg-2 col-sm-6 mb-3 text-lg-end text-sm-start">
                      <button class="btn show-hotels-btn">
                        Search Activities
                      </button>
                    </div>
                  </div>
                </div>

                <div
                  class="tab-pane fade tabs-cabs"
                  id="cabs"
                  role="tabpanel"
                  aria-labelledby="cabs-tab"
                >
                  <div class="row align-items-center tabs-divider">
                    <div class="col-lg-2 col-sm-6 mb-3">
                      <div class="input-label">Pick-up Location</div>
                      <div class="location-value">Warsaw, Poland</div>
                    </div>
                    <div class="col-lg-2 col-sm-6 mb-3">
                      <div class="input-label">Drop-off Location</div>
                      <div class="location-value">Krakow, Poland</div>
                    </div>
                    <div class="col-lg-2 col-sm-6 mb-3">
                      <div class="input-label">Pick-up Date</div>
                      <div class="date-value">12 Jan, 2024</div>
                    </div>
                    <div class="col-lg-2 col-sm-6 mb-3 text-lg-end text-sm-start">
                      <span class="promo-code-link">+ Add Promo Code</span>
                    </div>
                    <div class="col-lg-2 col-sm-6 mb-3 text-lg-end text-sm-start">
                      <button class="btn show-hotels-btn">Search Cabs</button>
                    </div>
                  </div>
                </div>

                <div
                  class="tab-pane fade tabs-offers"
                  id="offers"
                  role="tabpanel"
                  aria-labelledby="offers-tab"
                >
                  <div class="row align-items-center tabs-divider">
                    <div class="col-lg-2 col-sm-6 mb-3">
                      <div class="input-label">Offer Location</div>
                      <div class="location-value">Warsaw, Poland</div>
                    </div>
                    <div class="col-lg-2 col-sm-6 mb-3">
                      <div class="input-label">Offer Date</div>
                      <div class="date-value">12 Jan, 2024</div>
                    </div>
                    <div class="col-lg-2 col-sm-6 mb-3 text-lg-end text-sm-start">
                      <span class="promo-code-link">+ Add Promo Code</span>
                    </div>
                    <div class="col-lg-2 col-sm-6 mb-3 text-lg-end text-sm-start">
                      <button class="btn show-hotels-btn">View Offers</button>
                    </div>
                  </div>
                </div>

                <div
                  class="tab-pane fade tabs-lorem"
                  id="lorem"
                  role="tabpanel"
                  aria-labelledby="lorem-tab"
                >
                  <div class="row align-items-center tabs-divider">
                    <div class="col-lg-2 col-sm-6 mb-3">
                      <div class="input-label">Lorem Ipsum</div>
                      <div class="location-value">Dolor Sit Amet</div>
                    </div>
                    <div class="col-lg-2 col-sm-6 mb-3">
                      <div class="input-label">Lorem Date</div>
                      <div class="date-value">12 Jan, 2024</div>
                    </div>
                    <div class="col-lg-2 col-sm-6 mb-3 text-lg-end text-sm-start">
                      <span class="promo-code-link">+ Add Promo Code</span>
                    </div>
                    <div class="col-lg-2 col-sm-6 mb-3 text-lg-end text-sm-start">
                      <button class="btn show-hotels-btn">Search Lorem</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>      
    </>
  )
}

export default HomeBannerTab
