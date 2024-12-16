// src/components/Freebie.jsx

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFreebie } from '../../../Redux/Slice/Slice'; 

function Freebie() {
  const dispatch = useDispatch();
  const freebies = useSelector((state) => state.freebies.freebies);

  const handleFreebieChange = (freebie) => {
    dispatch(toggleFreebie({ freebie }));
    console.log(freebie);
  };

  return (
    <div className="filter-options">
      <div className="filter-title">Freebies</div>
      
      {/* Free breakfast */}
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="frontDesk"
          checked={freebies.breakfast}
          onChange={() => handleFreebieChange('breakfast')}
        />
        <label className="form-check-label" htmlFor="frontDesk">
          Free breakfast
        </label>
      </div>

      {/* Free parking */}
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="airConditioned"
          checked={freebies.parking}
          onChange={() => handleFreebieChange('parking')}
        />
        <label className="form-check-label" htmlFor="airConditioned">
          Free parking
        </label>
      </div>

      {/* Free internet */}
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="fitness"
          checked={freebies.internet}
          onChange={() => handleFreebieChange('internet')}
        />
        <label className="form-check-label" htmlFor="fitness">
          Free internet
        </label>
      </div>

      {/* Free airport shuttle */}
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="pool"
          checked={freebies.airportShuttle}
          onChange={() => handleFreebieChange('airportShuttle')}
        />
        <label className="form-check-label" htmlFor="pool">
          Free airport shuttle
        </label>
      </div>

      {/* Free cancellation */}
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="pool"
          checked={freebies.cancellation}
          onChange={() => handleFreebieChange('cancellation')}
        />
        <label className="form-check-label" htmlFor="pool">
          Free cancellation
        </label>
      </div>
    </div>
  );
}

export default Freebie;
