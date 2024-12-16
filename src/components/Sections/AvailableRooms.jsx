import React from 'react'

function AvailableRooms() {
  return (
    <>
     <div className="container">

     <section class="section-4">
                <h3>Available Rooms</h3>
                
                {/* <!-- Room Item 1 --> */}
                <div class="row room-item align-items-center py-3 border-bottom" bis_skin_checked="1">
                <div class="col-lg-8 col-md-6 d-flex align-items-center" bis_skin_checked="1">
                    <img src="https://hailogics-ours.netlify.app/images/room.png" alt="Room Image" class="room-img me-3" />
                    <p>Superior room - 1 double bed or 2 twin beds</p>
                </div>
                <div class="col-lg-2 col-md-3 text-end" bis_skin_checked="1">
                    <p class="price">$240/night</p>
                </div>
                <div class="col-lg-2 col-md-3 text-end" bis_skin_checked="1">
                    <button class="btn btn-warning">Book now</button>
                </div>
                </div>
                
                {/* <!-- Room Item 2 --> */}
                <div class="row room-item align-items-center py-3 border-bottom" bis_skin_checked="1">
                <div class="col-lg-8 col-md-6 d-flex align-items-center" bis_skin_checked="1">
                    <img src="https://hailogics-ours.netlify.app/images/room.png" alt="Room Image" class="room-img me-3" />
                    <p>Superior room - City view - 1 double bed or 2 twin beds</p>
                </div>
                <div class="col-lg-2 col-md-3 text-end" bis_skin_checked="1">
                    <p class="price">$280/night</p>
                </div>
                <div class="col-lg-2 col-md-3 text-end" bis_skin_checked="1">
                    <button class="btn btn-warning">Book now</button>
                </div>
                </div>
                
                {/* <!-- Room Item 3 --> */}
                <div class="row room-item align-items-center py-3 border-bottom" bis_skin_checked="1">
                <div class="col-lg-8 col-md-6 d-flex align-items-center" bis_skin_checked="1">
                    <img src="https://hailogics-ours.netlify.app/images/room.png" alt="Room Image" class="room-img me-3" />
                    <p>Superior room - City view - 1 double bed or 2 twin beds</p>
                </div>
                <div class="col-lg-2 col-md-3 text-end" bis_skin_checked="1">
                    <p class="price">$320/night</p>
                </div>
                <div class="col-lg-2 col-md-3 text-end" bis_skin_checked="1">
                    <button class="btn btn-warning">Book now</button>
                </div>
                </div>
                
                {/* <!-- Room Item 4 --> */}
                <div class="row room-item align-items-center py-3" bis_skin_checked="1">
                <div class="col-lg-8 col-md-6 d-flex align-items-center" bis_skin_checked="1">
                    <img src="https://hailogics-ours.netlify.app/images/room.png" alt="Room Image" class="room-img me-3" />
                    <p>Superior room - City view - 1 double bed or 2 twin beds</p>
                </div>
                <div class="col-lg-2 col-md-3 text-end" bis_skin_checked="1">
                    <p class="price">$350/night</p>
                </div>
                <div class="col-lg-2 col-md-3 text-end" bis_skin_checked="1">
                    <button class="btn btn-warning">Book now</button>
                </div>
                </div>
                
            </section> 

     </div>
    </>
  )
}

export default AvailableRooms
