import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFreebie } from '../../../Redux/Slice/FlightSlice/FlightFreebee'; 

function Freebie() {
  const dispatch = useDispatch();
  const freebies = useSelector((state) => state.freebiesFlight.freebies);

  const handleToggle = (freebie) => {
    dispatch(toggleFreebie({ freebie })); 
    console.log(freebie); 
  };

  return (
    <>
      <div className="filter-options">
        <div className="filter-title">Cabin Class</div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="economy"
            checked={freebies.economy}
            onChange={() => handleToggle('economy')}
          />
          <label className="form-check-label" htmlFor="economy">Economy</label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="bussiness"
            checked={freebies.bussiness}
            onChange={() => handleToggle('bussiness')}
          />
          <label className="form-check-label" htmlFor="bussiness">Bussiness</label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="mixed"
            checked={freebies.mixed}
            onChange={() => handleToggle('mixed')}
          />
          <label className="form-check-label" htmlFor="mixed">Mixed</label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="firstClass"
            checked={freebies.firstClass}
            onChange={() => handleToggle('firstClass')}
          />
          <label className="form-check-label" htmlFor="firstClass">1st Class</label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="economyPlus"
            checked={freebies.economyPlus}
            onChange={() => handleToggle('economyPlus')}
          />
          <label className="form-check-label" htmlFor="economyPlus">Economy Plus</label>
        </div>
      </div>
    </>
  );
}

export default Freebie;
