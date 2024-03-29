import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import "./Logout.css";

const Logout = () => {
  const { logout } = useAuth0();

  return (
    <div>
      <button
        className="logout_button"
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Log Out
      </button>
    </div>
  );
};

export default Logout;
