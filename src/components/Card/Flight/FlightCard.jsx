import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import CardItem from './CardItem';

function FlightCard() {
    const items = Array.from({ length: 7 }, (_, index) => index);
    
    const settings = {
        dots: false, 
        infinite: true, 
        speed: 500, 
        slidesToShow: 4, 
        slidesToScroll: 1, 
        autoplay: true, 
        autoplaySpeed: 3000, 
      };

    return (
    <>
         <div class="section-1">        
        <div class="carousel-section">
                <div class="carousel-header">
                    <h2>Lorem Ipsum</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                </div>
                <div class="ruk-first-carousel">
                    <Slider {...settings}>
                        {/* <CardItem /> */}
                        {items.map((item, idx) => (
                        <div class="carousel-item">
                            <div class="ruk-carousel-img">
                                <img src="https://hailogics-ours.netlify.app/images/cart-img-3.png" alt="Project 1" />
                                <span class="circle-arrow-bg">
                                    <img src="images/slider-arrow.png" alt="Project 1" class="slide-icon-img" />
                                </span>                    
                            </div>
                            <div class="ruk-carousel-text">
                                <div class="ruk-cart-header">
                                    <h5>Lorem Ipsum</h5>
                                    <span class="price">$450</span>
                                </div>
                                <div class="paragraph">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                                </div>
                                <div class="ruk-cart-star">                                                
                                    <span class="svg-star"><svg xmlns="http://www.w3.org/2000/svg" width="101" height="20" viewBox="0 0 101 20" fill="none">
                                        <path d="M9.6705 0L11.8412 6.6808H18.8658L13.1828 10.8098L15.3535 17.4906L9.6705 13.3616L3.98747 17.4906L6.1582 10.8098L0.475165 6.6808H7.49978L9.6705 0Z" fill="#DDD507"/>
                                        <path d="M29.9752 0L32.1459 6.6808H39.1705L33.4875 10.8098L35.6582 17.4906L29.9752 13.3616L24.2922 17.4906L26.4629 10.8098L20.7799 6.6808H27.8045L29.9752 0Z" fill="#DDD507"/>
                                        <path d="M50.2779 0L52.4486 6.6808H59.4733L53.7902 10.8098L55.961 17.4906L50.2779 13.3616L44.5949 17.4906L46.7656 10.8098L41.0826 6.6808H48.1072L50.2779 0Z" fill="#DDD507"/>
                                        <path d="M70.5826 0L72.7533 6.6808H79.7779L74.0949 10.8098L76.2656 17.4906L70.5826 13.3616L64.8996 17.4906L67.0703 10.8098L61.3873 6.6808H68.4119L70.5826 0Z" fill="#DDD507"/>
                                        <path d="M90.8853 0L93.0561 6.6808H100.081L94.3976 10.8098L96.5684 17.4906L90.8853 13.3616L85.2023 17.4906L87.373 10.8098L81.69 6.6808H88.7146L90.8853 0Z" fill="#DDD507"/>
                                        </svg></span>
                                    <span class="ruk-reviews"><b>4.3</b> (11,458 Reviews)</span>
                                </div>
                            </div>
                        </div>                    
                        ))}
                    </Slider>             
                </div>

        </div>
    </div> 
    </>
  )
}

export default FlightCard
