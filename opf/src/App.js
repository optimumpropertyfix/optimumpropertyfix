import "./App.css";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import user from "./SessionManager";

function App() {
  useEffect(() => {
    setUser(user);
  }, []);

  const [user, setUser] = useState();

  return (
    <div className="App">
      <Outlet context={[user, setUser]} />
    </div>
  );
}

export default App;
