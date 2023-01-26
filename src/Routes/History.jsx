import React from "react";
import Made from "../components/Made";
import Logo from "../components/Logo";
import HowItWorks from "../components/HowItWorks";
function History() {
  return (
    <div>
      <div className="headerContainer">
        <HowItWorks />
      </div>
      <div className="bodyContainer">
        <Logo />
      </div>
      <div className="footerContainer">
        <Made />
      </div>
    </div>
  );
}

export default History;
