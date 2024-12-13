import React from 'react'

function TopNave() {
  return (
    <>
               <nav class="navbar navbar-expand-lg navbar-custom">
            <div class="container-fluid">
              <a class="navbar-brand" href="/">
                <img src="https://hailogics-ours.netlify.app/images/ours-logo.png" alt="Logo" />
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarContent"
                aria-controls="navbarContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarContent">
                <ul class="navbar-nav mx-auto me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link" href="/hotel-listing.html">
                      Create Your Trip
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/hotel-details.html">
                      Discover
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/hotel-checkout.html">
                      About
                    </a>
                  </li>
                  <li class="dropdown">
                    <a
                      class="btn dropdown-toggle drop-down-more"
                      href="#"
                      role="button"
                      id="languageDropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      More
                    </a>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="languageDropdown"
                    >
                      <li>
                        <a class="dropdown-item" href="/FlightsListing">
                          Flights Listing
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/HotelListing">
                          Hotel Listing
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/ActivitiesListing">
                          Activities Listing
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div class="d-flex align-items-center">
                  <div class="dropdown">
                    <a
                      class="btn dropdown-toggle"
                      href="#"
                      role="button"
                      id="languageDropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span class="flag-icon">
                        <img src="https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png" alt="Flag" height="20" />
                      </span>
                      English
                    </a>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="languageDropdown"
                    >
                      <li>
                        <a class="dropdown-item" href="#">
                          English
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Español
                        </a>
                      </li>
                    </ul>
                  </div>
                  <span class="drop-devider">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="3"
                      height="21"
                      viewBox="0 0 3 21"
                      fill="none"
                    >
                      <rect
                        x="0.919922"
                        y="0.494629"
                        width="2"
                        height="19.8"
                        fill="white"
                        fill-opacity="0.3"
                      />
                    </svg>
                  </span>

                  <div class="dropdown currency-dropdown">
                    <a
                      class="btn dropdown-toggle"
                      href="#"
                      role="button"
                      id="currencyDropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      USD
                    </a>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="currencyDropdown"
                    >
                      <li>
                        <a class="dropdown-item" href="#">
                          USD
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          EUR
                        </a>
                      </li>
                    </ul>
                  </div>
                  <span class="drop-devider">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="3"
                      height="21"
                      viewBox="0 0 3 21"
                      fill="none"
                    >
                      <rect
                        x="0.919922"
                        y="0.494629"
                        width="2"
                        height="19.8"
                        fill="white"
                        fill-opacity="0.3"
                      />
                    </svg>
                  </span>

                  <div class="user-avatar me-3">
                    <a href="/customer-profile.html">
                      <img src="https://hailogics-ours.netlify.app/images/user-icon.png" alt="User Avatar" />
                    </a>
                  </div>

                  <a class="btn btn-custom" href="/activities-listing.html">
                    Get The App
                  </a>
                </div>
              </div>
            </div>
          </nav> 
    </>
  )
}

export default TopNave
