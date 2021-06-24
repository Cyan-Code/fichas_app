import React from "react";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Fichas App
      </Link>
      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/Create"
          >
            Crear
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
