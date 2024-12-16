import React from 'react';
import { useSelector } from 'react-redux';

const ActivitiesListCard = () => {
  const filteredActivities = useSelector((state) => state.activities.filteredActivities);

  return (
    <>
      {filteredActivities.length === 0 ? (
        <p>No activities available for the selected filters.</p>
      ) : (
        filteredActivities.map((activity) => (
          <div className="card" key={activity.id}>
            <div className="row g-0 ruk-card-content">
              <div className="col-md-4 hotel-img">
                <img
                  src="https://hailogics-ours.netlify.app/images/activities-card-img.png"
                  className="img-fluid rounded-start"
                  alt="Activity Image"
                />
              </div>
              <div className="col-md-8">
                <div className="card-content-right">
                  <div className="card-body">
                    <h5 className="card-title">{activity.name}</h5>
                    <p className="card-description">Location: {activity.location}</p>
                    <p className="card-description">Date: {activity.date}</p>
                    <p className="card-description">Participants: {activity.participants}</p>
                  </div>
                  <div className="card-buttom d-flex justify-content-between">
                    <p className="card-text">
                      <span className="Start-from">
                        Starting from{' '}
                        <span className="text-danger">${activity.price}/night</span>
                      </span>
                    </p>
                    <p className="card-rating">
                      Rating: {activity.rating} ⭐
                    </p>
                    <button className="btn btn-book">Book Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default ActivitiesListCard;
