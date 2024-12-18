import React from 'react'

function SuggestedCard() {
  return (
    <>
    <div class="hotel-card-right">
    <img src="http://127.0.0.1:8080/images/right-side-card-img.png" alt="Hotel Image" />
    <div class="hotel-card-body">
        <div class="d-flex justify-content-between align-items-center">
            <div class="suggested">Suggested</div>
            <div class="hotel-rating">4.8 <span class="text-danger">★</span></div>
        </div>
        <div class="hotel-name">CVK Park Bosphorus Hotel Istanbul</div>
        <div class="hotel-features">
            <small class="text-muted cart-list"><span class="svg-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9.5C5.59095 9.5 6.17611 9.3836 6.72208 9.15746C7.26804 8.93131 7.76412 8.59984 8.18198 8.18198C8.59984 7.76412 8.93131 7.26804 9.15746 6.72208C9.3836 6.17611 9.5 5.59095 9.5 5C9.5 4.40905 9.3836 3.82389 9.15746 3.27792C8.93131 2.73196 8.59984 2.23588 8.18198 1.81802C7.76412 1.40016 7.26804 1.06869 6.72208 0.842542C6.17611 0.616396 5.59095 0.5 5 0.5C3.80653 0.5 2.66193 0.974106 1.81802 1.81802C0.974106 2.66193 0.5 3.80653 0.5 5C0.5 6.19347 0.974106 7.33807 1.81802 8.18198C2.66193 9.02589 3.80653 9.5 5 9.5ZM4.884 6.82L7.384 3.82L6.616 3.18L4.466 5.7595L3.3535 4.6465L2.6465 5.3535L4.1465 6.8535L4.5335 7.2405L4.884 6.82Z" fill="#007F5F"></path>
                </svg></span> Free Cancellation anytime <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9.5C5.59095 9.5 6.17611 9.3836 6.72208 9.15746C7.26804 8.93131 7.76412 8.59984 8.18198 8.18198C8.59984 7.76412 8.93131 7.26804 9.15746 6.72208C9.3836 6.17611 9.5 5.59095 9.5 5C9.5 4.40905 9.3836 3.82389 9.15746 3.27792C8.93131 2.73196 8.59984 2.23588 8.18198 1.81802C7.76412 1.40016 7.26804 1.06869 6.72208 0.842542C6.17611 0.616396 5.59095 0.5 5 0.5C3.80653 0.5 2.66193 0.974106 1.81802 1.81802C0.974106 2.66193 0.5 3.80653 0.5 5C0.5 6.19347 0.974106 7.33807 1.81802 8.18198C2.66193 9.02589 3.80653 9.5 5 9.5ZM4.884 6.82L7.384 3.82L6.616 3.18L4.466 5.7595L3.3535 4.6465L2.6465 5.3535L4.1465 6.8535L4.5335 7.2405L4.884 6.82Z" fill="#007F5F"></path>
                    </svg> No Upfront</small>                                                                
        </div>
        <div class="d-flex justify-content-between align-items-center">
            <div class="hotel-price">
                <span class="st-from">Starting from </span><span class="text-dangerr">$240/night</span>
                
            </div>
            <a href="#" class="view-details">View Details</a>
        </div>
    </div>
    </div>      
    </>
  )
}

export default SuggestedCard
