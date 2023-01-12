import React from "react";
import HowItWorks from "../components/HowItWorks";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import Made from "../components/Made";

function Login() {
  return (
    <div className="Login">
      <div className="headerContainer">
        <HowItWorks />
      </div>

      <div className="bodyContainer">
        <Logo />
        <div style={{ width: 130 }} className="title">
          Нэвтрэх
        </div>
        <div>
          <div className="two">
            <div className="text">Цахим хаяг</div>
            <input
              className="input"
              type="text"
              placeholder="name@mail.domain"
            />
          </div>
          <div className="two">
            <div className="text">Нууц үг</div>
            <input className="input" type="text" placeholder="••••••••••" />
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 20 }}>
          <div>Намайг сана</div>
          <Link to="/Forget">Нууц үгээ мартсан</Link>
        </div>
        <div style={{ width: 381, marginTop: 20 }} className="signUpDiv">
          Нэвтрэх
        </div>
        <Link className="SwitchRegister" to="/Register">
          Шинэ хэрэглэгч бол энд дарна уу?
        </Link>
      </div>

      <div className="footerContainer">
        <Made />
      </div>
    </div>
  );
}

export default Login;
