import React from 'react'

function PriceFilter() {
  return (
    <>
    <div class="filter-options">
    <div class="filter-title">Price</div>
    <input type="range" class="form-range price-slider" id="priceRange" min="50" max="1200" step="10" value="50" />
    <div class="price-range">
    <span>$50</span>
    <span>$1200</span>
    </div>
    </div>                         
    </>
  )
}

export default PriceFilter
