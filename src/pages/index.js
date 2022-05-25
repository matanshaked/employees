import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Employees from "./Employees";
import View from "./View";

export const Index = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/employees" element={<Employees />} />
        <Route exact path="/view" element={<View />} />
      </Routes>
    </Router>
  );
};

export default Index;
