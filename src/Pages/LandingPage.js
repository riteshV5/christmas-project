import React from "react";
import RenderingDelay from "../components/RenderingDelay";
import homepage from "../assets/homepage.gif";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const handleMouseOver = (e) => {
    e.target.style.right = `${Math.ceil(Math.random() * 90)}%`;
    e.target.style.top = `${Math.ceil(Math.random() * 90)}%`;
  };

  const handleYesClick = () => {
    navigate("/yess");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* <div
        style={{
          border: "1px solid",
          width: "40%",
          height: "400px",
          padding: "10px",
          margin: "2px",
          borderRadius: "0 450px 450px 450px",
          background: "#83000c",
        }}
      ></div> */}
      <div style={{ width: "400px" }}>
        {/* <img src={cap} className="App-logo" alt="cap" /> */}
        {/* <img src={backgroundGif} className="App-logo" alt="cafp"></img> */}
      </div>
      <span style={{ color: "white", fontSize: "20px" }}>
        Merry Christmas!!
      </span>
      <RenderingDelay
        text={`Will you hangout with me?`}
        delay={100}
        sizeFont={25}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={homepage} className="App-logoc" alt="cap" />
      </div>
      <div
        style={{
          marginTop: "10px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            position: "absolute",
            transition: ".5s",
            padding: "10px",
            height: "40px",
            width: "80px",
            border: "1px solid white",
            borderRadius: "10px",
            backgroundColor: "#da6b79",
            marginLeft: "-100px",
          }}
          onMouseOver={handleMouseOver}
          onClick={handleMouseOver}
        >
          No
        </button>
        <button
          style={{
            position: "absolute",
            padding: "10px",
            height: "40px",
            width: "80px",
            border: "1px solid white",
            borderRadius: "10px",
            backgroundColor: "transparent",
            marginRight: "-70px",
          }}
          onClick={handleYesClick}
        >
          Yes
        </button>
      </div>
    </div>
  );
};
export default LandingPage;
