// src/components/HotelRating.jsx

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRating } from '../../../Redux/Slice/Ratinglice'; 

function HotelRating() {
  const dispatch = useDispatch();
  const selectedRating = useSelector((state) => state.rating.selectedRating); 

  const handleRatingClick = (rating) => {
    dispatch(setRating(rating)); 
    console.log(rating)
  };

  return (
    <>
      <div className="filter-options">
        <div className="filter-title">Rating</div>
        <div className="rating-buttons">
          <button
            className={`btn btn-sm ${selectedRating === 0 ? 'active' : ''}`}
            onClick={() => handleRatingClick(0)}
          >
            0
          </button>
          <button
            className={`btn btn-sm ${selectedRating === 1 ? 'active' : ''}`}
            onClick={() => handleRatingClick(1)}
          >
            1+
          </button>
          <button
            className={`btn btn-sm ${selectedRating === 2 ? 'active' : ''}`}
            onClick={() => handleRatingClick(2)}
          >
            2+
          </button>
          <button
            className={`btn btn-sm ${selectedRating === 3 ? 'active' : ''}`}
            onClick={() => handleRatingClick(3)}
          >
            3+
          </button>
          <button
            className={`btn btn-sm ${selectedRating === 4 ? 'active' : ''}`}
            onClick={() => handleRatingClick(4)}
          >
            4+
          </button>
        </div>
      </div>
    </>
  );
}

export default HotelRating;
