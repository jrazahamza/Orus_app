import React from 'react'

function FlightTimes() {
  return (
    <>
    <div class="time-filter">
        <div class="filter-options">
            <div class="filter-title">Times</div>
            <label for="time">Departure 00:00 - 24:00</label>
            <input type="range" class="form-range price-slider" id="priceRange" min="50" max="1200" step="10" value="50" />
            <div class="price-range">
                <span>00:00</span>
                <span>24:00</span>
            </div>
        </div>
        <div class="filter-options">
              <label for="time">Arrival 00:00 - 24:00</label>
              <input type="range" class="form-range price-slider" id="priceRange" min="50" max="1200" step="10" value="50" />
              <div class="price-range">
                  <span>00:00</span>
                  <span>24:00</span>
              </div>
          </div>           
    </div>
    </>
  )
}

export default FlightTimes
