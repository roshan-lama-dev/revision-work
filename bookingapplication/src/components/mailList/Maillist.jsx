import React from "react";
import "./maillist.scss";
export const Maillist = () => {
  return (
    <div className="mailListContainer">
      <p>Save Time, Save Money !</p>
      <h2>Sign up and we'll send the best deals to you</h2>
      <div className="subscribeField">
        <input type="email" placeholder="Your email Address" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};
