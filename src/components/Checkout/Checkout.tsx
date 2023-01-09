import React from 'react';

export const Checkout: React.FC = () => {
  return (
    <div className="checkout__container">
      <div className="checkout_message message">
        <div className="message__main">
          <h1 className="message__main-thanks">THANK YOU!</h1>
        </div>

        <div className="message__confirmation">
          <h2 className="confirmation">
            A confirmation has been sent to your email
          </h2>
        </div>
      </div>
    </div>
  );
};
