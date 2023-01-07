/* eslint-disable react/button-has-type */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/page-title.scss';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found__container">
      <div className="not-found__message message">
        <p className="message__main">
          There are no phones here. You should
          <button className="button is-danger" onClick={() => navigate(-1)}>
            Go back
          </button>
          or
          <button className="button is-link" onClick={() => navigate('/')}>
            Go home
          </button>
          to get out of this sticky situation!
        </p>

        <a
          // eslint-disable-next-line max-len
          href="https://www.freepik.com/free-vector/funny-error-404-background-design_1161579.htm#query=404%20background&position=35&from_view=keyword"
          className="message__copyright"
        >
          Image by bamdewanto on Freepik
        </a>
      </div>

    </div>
  );
};
