import React from 'react';
import PropTypes from 'prop-types';
import './HoverAlert.css';

const HoverAlert = ({ visible }) => {
  if (!visible) {
    return null;
  }
  return (
    <div className="hover-alert--container">
      <p className="hover-alert--text">mouseover</p>
    </div>
  )
}

HoverAlert.propTypes = {

};

export default HoverAlert;