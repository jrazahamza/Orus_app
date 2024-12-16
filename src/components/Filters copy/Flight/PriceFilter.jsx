import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPrice } from '../../../Redux/Slice/PriceSlice';
import { filterActivitiesByPrice } from '../../../Redux/Slice/ActivitiesSlice'; 

function PriceFilter() {
  const dispatch = useDispatch();
  const price = useSelector((state) => state.price.price);

  const handlePriceChange = (event) => {
    const newPrice = Number(event.target.value);
    dispatch(setPrice(newPrice)); 
    dispatch(filterActivitiesByPrice(newPrice)); 
    console.log(newPrice);
  };

  return (
    <>
      <div className="filter-options">
        <div className="filter-title">Price</div>
        <input
          type="range"
          className="form-range price-slider"
          id="priceRange"
          min="50"
          max="1200"
          step="10"
          value={price} 
          onChange={handlePriceChange} 
        />
        <div className="price-range">
          <span>$50</span>
          <span>$1200</span>
        </div>
        <div>Selected Price: ${price}</div>
      </div>
    </>
  );
}

export default PriceFilter;
