import React from "react";
import yespage from "../assets/yespage.gif";
import RenderingDelay from "../components/RenderingDelay";

const YessPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <RenderingDelay text={`Yaayyyyyy, Let's Go.`} delay={100} sizeFont={25} />

      <img src={yespage} className="App-logoc" alt="cap" />
    </div>
  );
};
export default YessPage;
