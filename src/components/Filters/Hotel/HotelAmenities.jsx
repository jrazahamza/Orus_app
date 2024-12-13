import React from 'react'

function HotelAmenities() {
  return (
    <>
    <div class="filter-options">
        <div class="filter-title">Amenities</div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" id="frontDesk" checked /> 
            <label class="form-check-label" for="frontDesk">24hr front desk</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" id="airConditioned" checked />
            <label class="form-check-label" for="airConditioned">Air-conditioned</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" id="fitness" />
            <label class="form-check-label" for="fitness">Fitness</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" id="pool" />
            <label class="form-check-label" for="pool">Pool</label>
        </div>
        <div class="show-more">+24 more</div>
    </div>      
    </>
  )
}

export default HotelAmenities
