import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => (
  <nav className="navbar bs-navbar">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <h1 className="title">BabyStyler</h1>
        </Link>
      </div>
      <div className="navbar-start">
      </div>
      <div className="navbar-end">
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/products">
          Products
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar
