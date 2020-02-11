import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            NotesApp
          </Link>

          <div className="flex" id="navbarNavAltMarkup">
            <ul className="navbar-nav ml-auto">
              <li>
                <Link className="nav-link" to="/">
                  Notes
                </Link>
              </li>

              <li>
                <Link className="nav-link" to="/create">
                  Create Note
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/user">
                  Create User
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
