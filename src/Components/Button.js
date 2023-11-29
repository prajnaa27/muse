// LetsGoButton.js
import React from 'react';
import { Link } from 'react-router-dom';

const LetsGoButton = ({ to, videoId }) => {
  return (
    <Link to={to}>
      <button>Let's go</button>
    </Link>
  );
};

export default LetsGoButton;
