import React from 'react'

function Freebie() {
  return (
    <>
        <div class="filter-options">
    <div class="filter-title">Cabin Class</div>
    <div class="form-check">
        <input class="form-check-input" type="checkbox" id="frontDesk" />
        <label class="form-check-label" for="frontDesk">Economy</label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="checkbox" id="airConditioned" checked />
        <label class="form-check-label" for="airConditioned">Bussiness</label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="checkbox" id="fitness" />
        <label class="form-check-label" for="fitness">Mixed</label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="checkbox" id="pool" />
        <label class="form-check-label" for="pool">1st Class</label>
    </div>
    <div class="form-check">
        <input class="form-check-input" type="checkbox" id="pool" />
        <label class="form-check-label" for="pool">Economy Plus</label>
    </div>
</div> 
    </>
  )
}

export default Freebie
