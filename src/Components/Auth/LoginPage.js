import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Logo from "../../assets/logo.png";
import "./LoginPage.css";

const LoginPage = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="container">
      <div className="card">
        <img className="logo" src={Logo} alt="Logo" />
        <p>Login To Notes-App</p>
        <button className="login_button" onClick={() => loginWithRedirect()}>
          Log In
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
