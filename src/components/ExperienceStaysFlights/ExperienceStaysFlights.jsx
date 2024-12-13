import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ExperienceStaysFlights() {
    const items = Array.from({ length: 7 }, (_, index) => index);
    const settings = {
        dots: false, 
        infinite: true, 
        speed: 500, 
        slidesToShow: 3, 
        slidesToScroll: 1, 
        autoplay: true, 
        autoplaySpeed: 3000, 
      };


  return (
    <>
      <div class="section-3">

<div class="row">
    <div class="col-lg-6">
        <div class="image-section">
            <div class="sec3-single-img-con">
                <h2 class="get-ready">Get ready</h2>
                <p>collection of the most
                    beautiful places
                    and experience </p>
            </div>
        </div>
    </div>

    <div class="col-lg-6 sec3-left-col">

        <div class="search-section">
            <div class="w-full max-w-md">
                <div class="flex items-center">
                    <span class="fa-search-svg search-border-bottom"><svg xmlns="http://www.w3.org/2000/svg"
                            width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path
                                d="M24.6582 21.6152L19.79 16.7471C19.5703 16.5273 19.2725 16.4053 18.96 16.4053H18.1641C19.5117 14.6816 20.3125 12.5137 20.3125 10.1553C20.3125 4.54492 15.7666 -0.000976562 10.1562 -0.000976562C4.5459 -0.000976562 0 4.54492 0 10.1553C0 15.7656 4.5459 20.3115 10.1562 20.3115C12.5146 20.3115 14.6826 19.5107 16.4062 18.1631V18.959C16.4062 19.2715 16.5283 19.5693 16.748 19.7891L21.6162 24.6572C22.0752 25.1162 22.8174 25.1162 23.2715 24.6572L24.6533 23.2754C25.1123 22.8164 25.1123 22.0742 24.6582 21.6152ZM10.1562 16.4053C6.7041 16.4053 3.90625 13.6123 3.90625 10.1553C3.90625 6.70312 6.69922 3.90527 10.1562 3.90527C13.6084 3.90527 16.4062 6.69824 16.4062 10.1553C16.4062 13.6074 13.6133 16.4053 10.1562 16.4053Z"
                                fill="#FE6326" />
                        </svg>
                        <input
                            class="sec3-search-input appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                            type="text" placeholder="Search" aria-label="Search" />
                    </span>
                </div>
            </div>
        </div>

        <ul class="nav nav-tabs mb-3" id="tabMenu" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="tab1" data-bs-toggle="tab" data-bs-target="#content1"
                    type="button" role="tab">Experience</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="tab2" data-bs-toggle="tab" data-bs-target="#content2" type="button"
                    role="tab">Stays</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="tab3" data-bs-toggle="tab" data-bs-target="#content3" type="button"
                    role="tab">Flights</button>
            </li>
        </ul>

        <div class="tab-content">
            <div class="tab-pane fade show active" id="content1" role="tabpanel">
                <div id="carouselTab1" class="carousel slide" data-bs-ride="carousel">
                    <div class="ruk-experience-tabs-carousel">
                       <Slider {...settings}>
                       {items.map((item, idx) => (
                        <div class="carousel-item">
                            <div class="tabs-ruk-carousel-img">
                                <img class="carousel-items-tab-img" src="https://hailogics-ours.netlify.app/images/experience-cart-bg.png" alt="Project 1" />
                                <div class="tabs-carousel-item-content">
                                    <h5>Royal Galaxy</h5>
                                    <p><i class="fa fa-map-marker" aria-hidden="true"></i> Distance 1.2km</p>
                                </div>
                            </div>
                        </div>
                        ))}

                        </Slider>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="content2" role="tabpanel">
                <div id="carouselTab2" class="carousel slide" data-bs-ride="carousel">
                    <div class="ruk-experience-tabs2-carousel">
                    <Slider {...settings}>
                       {items.map((item, idx) => (
                        <div class="carousel-item">
                            <div class="tabs-ruk-carousel-img">
                                <img class="carousel-items-tab-img" src="https://hailogics-ours.netlify.app/images/experience-cart-bg.png" alt="Project 1" />
                                <div class="tabs-carousel-item-content">
                                    <h5>Royal Galaxy</h5>
                                    <p><i class="fa fa-map-marker" aria-hidden="true"></i> Distance 1.2km</p>
                                </div>
                            </div>
                        </div>
                        ))}

                        </Slider>                        
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="content3" role="tabpanel">
                <div id="carouselTab3" class="carousel slide" data-bs-ride="carousel">
                    <div class="ruk-experience-tabs2-carousel">
                    <Slider {...settings}>
                       {items.map((item, idx) => (
                        <div class="carousel-item">
                            <div class="tabs-ruk-carousel-img">
                                <img class="carousel-items-tab-img" src="https://hailogics-ours.netlify.app/images/experience-cart-bg.png" alt="Project 1" />
                                <div class="tabs-carousel-item-content">
                                    <h5>Royal Galaxy</h5>
                                    <p><i class="fa fa-map-marker" aria-hidden="true"></i> Distance 1.2km</p>
                                </div>
                            </div>
                        </div>
                        ))}

                        </Slider>                        
                    </div>
                </div>
            </div>            
        </div>
    </div>
</div>


</div>

    </>
  )
}

export default ExperienceStaysFlights
