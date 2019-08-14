import React from 'react';
import PropTypes from 'prop-types';
import './DwellAlert.css';

const DwellAlert = ({ visible }) => {
  if (!visible) {
    return null;
  }
  return (
    <div className="dwell-alert--container">
      <p className="dwell-alert--text blink">DWELL</p>
    </div>
  )
}

DwellAlert.propTypes = {

};

export default DwellAlert;