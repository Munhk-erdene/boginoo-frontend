import React from "react";
import { instanceTwo } from "../App";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Shorty() {
  const uri = useRef();

  const clickHandler = async () => {
    await instanceTwo
      .post("", {
        longLink: uri.current.value,
      })
      .catch((e) => toast.error(e.response.data.data));
  };
  return (
    <div className="shortyContainer">
      <input
        ref={uri}
        className="boginooInput"
        type="text"
        placeholder="https://www.web-huudas.mn"
      />
      <button onClick={clickHandler} className="boginooButton">
        Богиносгох
      </button>
      <ToastContainer />
    </div>
  );
}

export default Shorty;
