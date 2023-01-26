import React from "react";
import Header from "../components/Header";
import Logo from "../components/Logo";
import Shorty from "../components/Shorty";
import Made from "../components/Made";
import HowItWorks from "../components/HowItWorks";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="homeContainer">
      <div className="headerContainer">
        <Link className="history" to="/History">
          History
        </Link>
        <HowItWorks />
        <Header />
      </div>
      <div className="bodyContainer">
        <Logo />
        <Shorty />
      </div>
      <div className="footerContainer">
        <Made />
      </div>
    </div>
  );
}

export default Home;
