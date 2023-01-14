import React, { useState } from "react";
import HowItWorks from "../components/HowItWorks";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import Made from "../components/Made";
import { instance } from "../App";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const email = useRef();
  const password = useRef();
  const [data, setData] = useState();
  const navigate = useNavigate();

  const SuccesfullLogin = async () => {
    try {
      const res = await instance.post("/Data", {
        mail: email.current.value,
        password: password.current.value,
      });
      setData(res.data.data);
      if (
        data.mail === email.current.value &&
        data.password === password.current.value
      ) {
        alert("Amjilttai orlo");
        navigate("/");
      }
    } catch (error) {}
  };
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
              ref={email}
              className="input"
              type="text"
              placeholder="name@mail.domain"
            />
          </div>
          <div className="two">
            <div className="text">Нууц үг</div>
            <input
              ref={password}
              className="input"
              type="text"
              placeholder="••••••••••"
            />
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 20 }}>
          <div>Намайг сана</div>
          <Link to="/Forget">Нууц үгээ мартсан</Link>
        </div>
        <div
          onClick={SuccesfullLogin}
          style={{ width: 381, marginTop: 20 }}
          className="signUpDiv"
        >
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
