/* eslint-disable max-len */
/* eslint-disable react/button-has-type */
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found__container">
      <div className="not-found__message message">
        <div className="message__directions directions">
          <p className="directions">
            To get rid of Elon:&nbsp;
            <button
              className="directions__button-back"
              onClick={() => navigate(-1)}
            >
              Go back
            </button>
            &nbsp;or&nbsp;
            <button
              className="directions__button-home"
              onClick={() => navigate('/')}
            >
              Go home
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};
