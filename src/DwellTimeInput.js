import React from 'react';
import PropTypes from 'prop-types';
import './DwellTimeInput.css'


const DwellTimeInput = ({ dwellingTime, setDwellingTime }) => {
  return (
    <div>
      <input
        className="dwell-time-input--input"
        type="text"
        onChange={e => {
          const { value } = e.target;
          const time = value === '' ? 0 : parseInt(e.target.value);
          if (!isNaN(time)) {
            setDwellingTime(time);}
          }
        }
        onClick={() => { document.execCommand("selectall",null,false); }}
        value={dwellingTime}
        maxLength="4"
      />
      <span className="dwell-time-input--units-label">milliseconds</span>
    </div>
  )
}

DwellTimeInput.propTypes = {
  dwellingTime: PropTypes.string.isRequired,
  setDwellingTime: PropTypes.func.isRequired
}

export default DwellTimeInput;