import "./App.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({
    net_id: "net_id",
    name: "name",
  });

  return (
    <div className="App">
      <Outlet context={[user, setUser]} />
    </div>
  );
}

export default App;
