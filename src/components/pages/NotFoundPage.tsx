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
            <button className="button is-danger" onClick={() => navigate(-1)}>
              Go back
            </button>
            &nbsp;or&nbsp;
            <button className="button is-link" onClick={() => navigate('/')}>
              Go home
            </button>
            &nbsp;to get out of this sticky situation!
          </p>
        </div>

        <div className="message__copyright">
          <a
            id="copyright"
            // eslint-disable-next-line max-len
            href="https://www.freepik.com/free-vector/funny-error-404-background-design_1161579.htm#query=404%20background&position=35&from_view=keyword"
            className="copyright"
          >
            Image by bamdewanto on Freepik
          </a>
        </div>
      </div>
    </div>
  );
};
