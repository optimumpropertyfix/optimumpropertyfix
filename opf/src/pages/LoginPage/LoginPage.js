import { Outlet } from "react-router-dom";
import { UseAuthentication } from "../../AuthenticationManagement/AuthenticationManager";

function LoginPage() {
  let auth = UseAuthentication();

  const submit = (event) => {
    auth.sign_in("test", () => {
      console.log("tested");
    });
    event.preventDefault();
  };

  return (
    <div>
      <p>LoginPage {auth.token}</p>
      <button onClick={submit}></button>
      <Outlet />
    </div>
  );
}

export default LoginPage;
