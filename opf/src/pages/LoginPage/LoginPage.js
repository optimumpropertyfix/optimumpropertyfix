import { Outlet } from "react-router-dom";
import { UseAuthentication } from "../../AuthenticationManagement/AuthenticationManager";

function LoginPage() {
  let auth = UseAuthentication();

  const submit = (event) => {
    event.preventDefault();
    auth.sign_in(
      {
        net_id: "net_id",
        password: "password",
      },
      () => {}
    );
  };

  const del = (event) => {
    event.preventDefault();
    auth.sign_out(() => {
      console.log("logged out");
    });
  };

  return (
    <div>
      <p>LoginPage {auth.token}</p>
      <button onClick={submit}>generate</button>
      <button onClick={del}>revoke</button>
      <Outlet />
    </div>
  );
}

export default LoginPage;
