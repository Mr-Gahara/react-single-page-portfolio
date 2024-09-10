import React, { useState } from 'react';
import LandingPage from './LandingPage';
import Intro from './Intro';

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  const handleAnimationEnd = () => {
    setShowIntro(false); // Hide intro once animation ends
  };

  return (
    <div>
      {showIntro ? <Intro onAnimationEnd={handleAnimationEnd} /> : <LandingPage />}
    </div>
  );
};

export default App;
