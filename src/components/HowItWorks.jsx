import React from "react";

function HowItWorks() {
  const Remove = () => {
    window.localStorage.clear();
  };
  return (
    <div onClick={Remove} style={{ marginRight: 10 }} className="howItWorks">
      Хэрхэн ажилладаж вэ?
    </div>
  );
}

export default HowItWorks;
