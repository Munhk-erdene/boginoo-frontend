import React from "react";
export const Resent = ({ data, shortLink, longLink }) => {
  return (
    <div>
      <div>
        <div>Өгөгдсөн холбоос:</div>
        <div>{data}</div>
      </div>
      <div>
        <div>Богино холбоос:</div>
        <div>
          <div>{`localhost:3000/${shortLink}`}</div>
          <button>Хуулж авах</button>
        </div>
      </div>
    </div>
  );
};
