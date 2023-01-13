/* eslint-disable react/button-has-type */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/page-title.scss';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found__container">
      <div className="not-found__message message">
        <div className="message__directions directions">
          <p className="directions">
            There are no phones here. You should&nbsp;
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
            &nbsp;to get out of this sticky situation!
          </p>
        </div>
      </div>
    </div>
  );
};
