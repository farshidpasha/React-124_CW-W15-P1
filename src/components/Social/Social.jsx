import { faGithub, faInstagramSquare, faTelegram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './social.css';

function Social() {
  return (
    <div className="social">
      <div className="social__container">
        <FontAwesomeIcon icon={faTelegram} className="social__icon telegram" />
      </div>
      <div className="social__container">
        <FontAwesomeIcon icon={faInstagramSquare} className="social__icon instagram" />
      </div>
      <div className="social__container">
        <FontAwesomeIcon icon={faYoutube} className="social__icon youtube" />
      </div>
      <div className="social__container">
        <FontAwesomeIcon icon={faGithub} className="social__icon github" />
      </div>
    </div>
  );
}

export default Social;
