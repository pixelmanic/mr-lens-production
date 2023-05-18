import React from "react";
import { Link } from "react-router-dom";

export default function Aside() {
  return (
    <aside
      style={{ height: "200px" }}
      className="main-sidebar sidebar-dark-primary elevation-4"
    >
      {/* Brand Logo */}
      <Link
        to="/dashboard"
        className="brand-link"
        style={{ textDecoration: "none" }}
      >
        <img
          src="\Images\logo.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">Mr Lens Dashboard</span>
      </Link>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon pr-1 bi bi-film"></i>
                <p>
                  Works
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/dashboard/addwork" className="nav-link">
                    <i class="nav-icon pr-1 bi bi-plus-square-fill"></i>
                    <p>Add work</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/dashboard/viewworks" className="nav-link">
                    <i class="nav-icon pr-1 bi bi-eye-fill"></i>
                    <p>View works</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i class="nav-icon pr-1 bi bi-credit-card-2-front-fill"></i>
                <p>
                  Admins
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/dashboard/addadmin" className="nav-link">
                    <i class="nav-icon pr-1 bi bi-plus-square-fill"></i>
                    <p>Add an Admin</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/dashboard/viewadmins" className="nav-link">
                    <i class="nav-icon pr-1 bi bi-eye-fill"></i>
                    <p>View Admins</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/dashboard/viewcontacts" className="nav-link">
                <i class="nav-icon pr-1 bi bi-eye-fill"></i>
                <p>Contacts</p>
              </Link>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
}
