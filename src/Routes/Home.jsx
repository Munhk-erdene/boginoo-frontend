import React from "react";
import Header from "../components/Header";
import Logo from "../components/Logo";
import Shorty from "../components/Shorty";
import Made from "../components/Made";

import HowItWorks from "../components/HowItWorks";
import { Recent } from "../components/Recent";
function Home() {
  return (
    <div className="homeContainer">
      <div className="headerContainer">
        <HowItWorks />
        <Header />
      </div>
      <div className="bodyContainer">
        <Logo />
        <Shorty />
      </div>
      <Recent />
      <div className="footerContainer">
        <Made />
      </div>
    </div>
  );
}

export default Home;
