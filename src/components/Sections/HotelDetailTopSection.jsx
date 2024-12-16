import React from 'react'

function HotelDetailTopSection() {
  return (
    <>
        <div className="container">
        <section class="hotel-detail-section-1">
                {/* <!-- Breadcrumb --> */}
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Turkey</a></li>
                        <li class="breadcrumb-item"><a href="#">Istanbul</a></li>
                        <li class="breadcrumb-item active" aria-current="page">CVK Park Bosphorus Hotel Istanbul</li>
                    </ol>
                </nav>
                <div class="row">
                    <div class="col-lg-8">
                    {/* <!-- Hotel Header --> */}
                    <div class="hotel-header">
                        <div>
                            <h1>CVK Park Bosphorus Hotel Istanbul</h1>
                            <span class="star-rating">★★★★★ 5 Star Hotel</span>
                            <p class="hotel-address">Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437</p>
                        </div>
                        <div class="hotel-rating">
                            <div class="rating-badge">4.2</div>
                            <div class="rating-text">Very Good <span>(371 reviews)</span></div>
                        </div>
                        </div>                        
                    </div>
                    <div class="col-lg-4">
                        
                        {/* <!-- Price and Book Button --> */}
                        <div class="hotel-price-book mt-3">
                            <div class="price">$240/night</div>
                            <a href="#" class="btn btn-book">Book Now</a>
                        </div>

                    </div>
                </div>

                 {/* Hotel Detail Top Images  */}
                <div class="row gallery mt-4">
                    <div class="col-lg-6 col-sm-12 mb-3">
                        <img src="https://hailogics-ours.netlify.app/images/hotel-detail-1.png" alt="Main Image" class="main-image" />
                    </div>
                    <div class="col-lg-3 col-sm-12">
                        <div class="row">
                            <div class="col-12 mb-3">
                                <img src="https://hailogics-ours.netlify.app/images/hotel-detail-2.png" alt="Room Image 1" class="small-image" />
                            </div>
                            <div class="col-12 mb-3">
                                <img src="https://hailogics-ours.netlify.app/images/hotel-detail-3.png" alt="Room Image 2" class="small-image" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-12">
                        <div class="row">
                            <div class="col-12 mb-3">
                                <img src="https://hailogics-ours.netlify.app/images/hotel-detail-4.png" alt="Room Image 1" class="small-image" />
                            </div>
                            <div class="col-12 mb-3">
                                <img src="https://hailogics-ours.netlify.app/images/hotel-detail-5.png" alt="Room Image 2" class="small-image" />
                            </div>
                        </div>
                    </div>
                </div>

            </section> 
        </div>
    </>
  )
}

export default HotelDetailTopSection
