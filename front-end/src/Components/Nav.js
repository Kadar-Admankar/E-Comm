import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  return (
    <div>
        <img  className = 'logo' src="https://t3.ftcdn.net/jpg/04/83/17/70/360_F_483177006_EYf1HAEoA6uGoTVwPMSdstDl8LIRccBp.jpg" alt="K logo" />
      {auth ? (
        <ul className="nav-ul">
          <li>
            <Link to="/">Products</Link>
          </li>

          <li>
            <Link to="/add">add Product</Link>
          </li>
          {/* oonce yoou click on add product, it will open /add endpoint page */}

          <li>
            <Link to="/update">Update Product</Link>
          </li>

          <li>
            <Link to="/profile">Profile</Link>
          </li>

          <li>
            <Link onClick={logout} to="/signup">
              Logout ({ JSON.parse(auth).name })
            </Link>
          </li>

        </ul>
      ) : (
        <ul className="nav-ul nav-right">
          <li>
            <Link to="/signup">SignUp</Link>
          </li>

          <li>
            <Link to="/login">Login</Link>
          </li>

        </ul>
      )}
    </div>
  );
};
export default Nav;
