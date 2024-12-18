import React from "react";

function CardItem() {
  return (    
      <div class="carousel-item">
        <div class="ruk-carousel-img">
          {/* <img src="images/slide-item-img.png" alt="Project 1"> */}
          <span class="circle-arrow-bg">
            {/* <img src="images/slider-arrow.png" alt="Project 1" class="slide-icon-img"> */}
          </span>
        </div>
        <div class="ruk-carousel-text">
          <div class="ruk-cart-header">
            <h5>Lorem Ipsum</h5>
            <span class="price">$450</span>
          </div>
          <div class="paragraph">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod{" "}
            </p>
          </div>
          <div class="ruk-cart-star">
            <span class="svg-star">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="101"
                height="20"
                viewBox="0 0 101 20"
                fill="none"
              >
                <path
                  d="M9.6705 0L11.8412 6.6808H18.8658L13.1828 10.8098L15.3535 17.4906L9.6705 13.3616L3.98747 17.4906L6.1582 10.8098L0.475165 6.6808H7.49978L9.6705 0Z"
                  fill="#DDD507"
                />
                <path
                  d="M29.9752 0L32.1459 6.6808H39.1705L33.4875 10.8098L35.6582 17.4906L29.9752 13.3616L24.2922 17.4906L26.4629 10.8098L20.7799 6.6808H27.8045L29.9752 0Z"
                  fill="#DDD507"
                />
                <path
                  d="M50.2779 0L52.4486 6.6808H59.4733L53.7902 10.8098L55.961 17.4906L50.2779 13.3616L44.5949 17.4906L46.7656 10.8098L41.0826 6.6808H48.1072L50.2779 0Z"
                  fill="#DDD507"
                />
                <path
                  d="M70.5826 0L72.7533 6.6808H79.7779L74.0949 10.8098L76.2656 17.4906L70.5826 13.3616L64.8996 17.4906L67.0703 10.8098L61.3873 6.6808H68.4119L70.5826 0Z"
                  fill="#DDD507"
                />
                <path
                  d="M90.8853 0L93.0561 6.6808H100.081L94.3976 10.8098L96.5684 17.4906L90.8853 13.3616L85.2023 17.4906L87.373 10.8098L81.69 6.6808H88.7146L90.8853 0Z"
                  fill="#DDD507"
                />
              </svg>
            </span>
            <span class="ruk-reviews">
              <b>4.3</b> (11,458 Reviews)
            </span>
          </div>
        </div>
      </div>
  );
}

export default CardItem;
