import React from "react";
// import {} from './style'

export const Quotes = ({quote, speaker}) => {
  return (
    <div>
      <p>{quote}</p>
      <p>- {speaker}</p>
      <button>Quote No Jutsu</button>
    </div>
  );
};
