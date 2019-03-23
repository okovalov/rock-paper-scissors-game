import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">
        <img
          src="/dist/images/RPS-ICONS.png"
          alt="This is the game"
          width="120"
          height="28"
        />
      </Link>

      <button
        type="button"
        className="button navbar-burger burger is-primary"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample">
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>

    </div>
    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start" />

      <div className="navbar-end">

        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">More</a>

          <div className="navbar-dropdown">
            <Link className="navbar-item" to="/">About</Link>
            <Link className="navbar-item" to="/contact-us">Contact</Link>
            <hr className="navbar-divider" />
            <Link className="navbar-item" to="/contact-us">Report an issue</Link>
          </div>
        </div>

        <div className="navbar-item">
          <div className="buttons">
            <Link className="button is-info is-rounded" to="/game">GO TO THE GAME</Link>
          </div>
        </div>

      </div>
    </div>
  </nav>
)

export default Header
