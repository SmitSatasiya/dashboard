import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar1 from "./pages/Sidebar1";
import Default from "./componentes/Dashboard/Default";

function App() {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar1 />
        <div style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Default />} />
            {/* <Route path="/crypto" element={<Crypto />} />
            <Route path="/saas" element={<Saas />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/account" element={<Account />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
