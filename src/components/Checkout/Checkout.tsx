/* eslint-disable consistent-return */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(seconds - 1);
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <div className="checkout__container">
      <div className="checkout__message message">
        <div className="message__img" />

        <div className="message__main">
          <h1 className="message__main-thanks">THANK YOU FOR YOUR ORDER!</h1>
        </div>

        <div className="message__confirmation">
          <>
            <h2 className="confirmation">
              A confirmation with your order details has been sent to your
              email.
            </h2>
            {seconds === 0 ? (
              navigate('/')
            ) : (
              <h3 className="redirect">
                You will be redirected to Home page in &nbsp;
                {seconds}
                &nbsp; seconds.
              </h3>
            )}
          </>
        </div>
      </div>
    </div>
  );
};
