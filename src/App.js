import "./App.css";
import LandingPage from "./Pages/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import YessPage from "./Pages/YessPage";

function App() {
  return (
    <Router>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F48A94",
          height: "100vh",
        }}
      >
        <Routes>
          <Route path="/christmasday" element={<LandingPage />}></Route>
          <Route path="/yess" element={<YessPage />}></Route>
        </Routes>
        <span
          style={{
            position: "absolute",
            bottom: "1px",
            fontSize: "8px",
            textDecoration: "underline",
          }}
        >
          Created by Ritesh
        </span>
      </div>
    </Router>
  );
}

export default App;
