import React from 'react'

function Freebie() {
  return (
    <>
        <div class="filter-options">
    <div class="filter-title">Freebies</div>
    <div class="form-check">
        <input class="form-check-input" type="checkbox" id="frontDesk" checked />
        <label class="form-check-label" for="frontDesk">Free breakfast</label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="checkbox" id="airConditioned" checked />
        <label class="form-check-label" for="airConditioned">Free parking</label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="checkbox" id="fitness" />
        <label class="form-check-label" for="fitness">Free internet</label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="checkbox" id="pool" />
        <label class="form-check-label" for="pool">Free airport shuttle</label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="checkbox" id="pool" />
        <label class="form-check-label" for="pool">Free cancellation</label>
    </div>
</div> 
    </>
  )
}

export default Freebie
