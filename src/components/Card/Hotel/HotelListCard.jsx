import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function HotelListCard() {
    const filteredActivities = useSelector((state) => state.activities.filteredActivities);
    const selectedFreebies = useSelector((state) => state.freebies.freebies);
    const selectedRating = useSelector((state) => state.rating.selectedRating); 

    const filteredByFreebies = filteredActivities.filter((activity) => {
      const hasSelectedFreebies = Object.keys(selectedFreebies).every((freebie) => {
        if (selectedFreebies[freebie]) {
          return activity.freebies && activity.freebies[freebie] === true;
        }
        return true;
      });
      return hasSelectedFreebies;
    });
  
    const filteredByRating = filteredByFreebies.filter((activity) => {
      if (selectedRating > 0) {
        return activity.rating >= selectedRating; 
      }
      return true; 
    });
  return (
    <>
        {filteredByRating.length === 0 ? (
        <p>No Hotels available for the selected price range and rating.</p>
      ) : (
        filteredByRating.map((activity) => (
          <div className="card" key={activity.id}>
    <div class="row g-0 ruk-card-content">
        <div class="col-md-4 hotel-img">
            <img src="images/hotel-img.png" class="img-fluid rounded-start"
                alt="Hotel Image" />
        </div>
        <div class="col-md-8">
            <div class="card-content-right">
                <div class="card-body">
                <h5 className="card-title">{activity.name}</h5>
                    <span class="sh-on-map"><a href="#">Show On Map</a></span>
                    <p class="card-text">
                        <span class="text-muted cart-list"><span class="svg-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9.5C5.59095 9.5 6.17611 9.3836 6.72208 9.15746C7.26804 8.93131 7.76412 8.59984 8.18198 8.18198C8.59984 7.76412 8.93131 7.26804 9.15746 6.72208C9.3836 6.17611 9.5 5.59095 9.5 5C9.5 4.40905 9.3836 3.82389 9.15746 3.27792C8.93131 2.73196 8.59984 2.23588 8.18198 1.81802C7.76412 1.40016 7.26804 1.06869 6.72208 0.842542C6.17611 0.616396 5.59095 0.5 5 0.5C3.80653 0.5 2.66193 0.974106 1.81802 1.81802C0.974106 2.66193 0.5 3.80653 0.5 5C0.5 6.19347 0.974106 7.33807 1.81802 8.18198C2.66193 9.02589 3.80653 9.5 5 9.5ZM4.884 6.82L7.384 3.82L6.616 3.18L4.466 5.7595L3.3535 4.6465L2.6465 5.3535L4.1465 6.8535L4.5335 7.2405L4.884 6.82Z" fill="#007F5F"/>
                            </svg></span>    Free Cancellation anytime{' '} <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5 9.5C5.59095 9.5 6.17611 9.3836 6.72208 9.15746C7.26804 8.93131 7.76412 8.59984 8.18198 8.18198C8.59984 7.76412 8.93131 7.26804 9.15746 6.72208C9.3836 6.17611 9.5 5.59095 9.5 5C9.5 4.40905 9.3836 3.82389 9.15746 3.27792C8.93131 2.73196 8.59984 2.23588 8.18198 1.81802C7.76412 1.40016 7.26804 1.06869 6.72208 0.842542C6.17611 0.616396 5.59095 0.5 5 0.5C3.80653 0.5 2.66193 0.974106 1.81802 1.81802C0.974106 2.66193 0.5 3.80653 0.5 5C0.5 6.19347 0.974106 7.33807 1.81802 8.18198C2.66193 9.02589 3.80653 9.5 5 9.5ZM4.884 6.82L7.384 3.82L6.616 3.18L4.466 5.7595L3.3535 4.6465L2.6465 5.3535L4.1465 6.8535L4.5335 7.2405L4.884 6.82Z" fill="#007F5F"/>
                                </svg></span> No
                            Upfront <br />                                                                
                    </p>
                    <p class="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                </div>
                <div class="card-buttom d-flex justify-content-between">
                    <p class="card-text"><span class="Start-from">
                    Starting from{' '}
                    <span className="text-dangerr">${activity.price}/night</span></span>
                    </p>
                    <p className="card-rating">
                      Rating: {activity.rating} ⭐
                    </p>
                  <Link><button class="btn btn-book">Book Now</button></Link>
                </div>
            </div>
        </div>
    </div>
</div> 
))
)}
    </>
  )
}

export default HotelListCard
