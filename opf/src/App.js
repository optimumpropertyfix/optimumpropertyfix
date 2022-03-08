import { Outlet } from "react-router-dom";
import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
