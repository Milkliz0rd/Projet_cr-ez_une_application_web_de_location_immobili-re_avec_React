import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
        <ul className="nav-page">
          <NavLink to={"/"} className={'nav-link'}>
            <li>Acceuil</li>
          </NavLink>

          <NavLink to={"/about"} className={'nav-link'}>
            <li>A Propos</li>
          </NavLink>
        </ul>
    </div>
  );
};

export default Navigation;
