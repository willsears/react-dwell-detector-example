import React, { useState } from 'react';
import DwellDetector from 'react-dwell-detector';
import DwellTimeInput from './DwellTimeInput';
import DwellAlert from './DwellAlert';
import HoverAlert from './HoverAlert';
import logo from './logo.svg';
import './App.css';

import Confetti from 'react-dom-confetti';

const config = {
  angle: 90,
  spread: 100,
  startVelocity: 45,
  elementCount: 200,
  dragFriction: 0.1,
  duration: 3000,
  stagger: 0,
  width: "10px",
  height: "10px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
};

function App() {
  const [ dwellingTime, setDwellingTime ] = useState(333);
  const [ dwellAlertActive, setDwellAlertActive ] = useState(false);
  const [ hoverAlertActive, setHoverAlertActive ] = useState(false);

  const handleDwell = (e, elemProps) => {
    setDwellAlertActive(true);
    setTimeout(() => {
      setDwellAlertActive(false);
    }, 3000)
  }

  const handleHover = () => {
    setHoverAlertActive(true);
    setTimeout(() => {
      setHoverAlertActive(false);
    }, 100)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <p className="heading">
          Hover fast and slow over the spinning logo, and tinker with the dwelling
          time to see the difference between a mouseover and a dwell.
        </p>
        <DwellTimeInput
          dwellingTime={dwellingTime}
          setDwellingTime={setDwellingTime}
        />
        <div className="logoContainer">
          <Confetti active={dwellAlertActive} config={ config }/>
          <DwellAlert visible={dwellAlertActive}/>
          <HoverAlert visible={!dwellAlertActive && hoverAlertActive}/>
          <DwellDetector
            onDwell={handleDwell}
            dwellingTime={dwellingTime}
          >
            <img src={logo} className="App-logo" alt="logo" onMouseOver={handleHover} />
          </DwellDetector>
        </div>
      </header>
    </div>
  );
}

export default App;
