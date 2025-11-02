import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QRCodePage from "./components/QRCodePage";
import ConnectPage from "./components/ConnectPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QRCodePage />} />
        <Route path="/connect" element={<ConnectPage />} />
      </Routes>
    </Router>
  );
};

export default App;
