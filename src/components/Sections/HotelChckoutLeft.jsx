import React from 'react'

function HotelChckoutLeft() {
  return (
    <>
        <div class="col-md-4">
            <div class="card">
                <div class="card-headerr d-flex">
                    <div class="head-lef"><img src="images/cvk-right-img.png" alt="" /></div>
                    <div class="head-right">
                    <div class="sub-title"><h6>CVK Park Bosphorus...</h6></div>
                    <div class="title"><h5>Superior room - 1 double bed or 2 twin beds</h5></div>
                    <span class="very-go">Very Good 54 reviews</span>
                    </div>
                    <hr />  
                </div>
                <div class="card-body">
                    <h6>Your booking is protected by <span class="color-orus"> ORUS</span></h6>
                    <hr />
                    <p><strong>Price Details</strong></p>
                    <p>Base Fare: $240</p>
                    <p>Discount: $0</p>
                    <p>Taxes: $20</p>
                    <p>Service Fee: $5</p>
                    <hr />
                    <h4>Total: $265</h4>
                    <button class="btn cvk-book" fdprocessedid="k55ub8">Book now</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default HotelChckoutLeft
