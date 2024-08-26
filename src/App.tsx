import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages";
import GeneratorPage from "./pages/generator";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generator" element={<GeneratorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
