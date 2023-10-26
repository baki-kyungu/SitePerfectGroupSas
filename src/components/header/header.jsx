import "./../../styles/sass/style.scss";
import mylogo from "./../../images/logo/logo.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="main_menu home_menu">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg navbar-light">
              <NavLink className="navbar-brand" to="/home">
                <img src={mylogo} alt="logo" />
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="menu_icon">
                  <ion-icon name="menu-outline"></ion-icon>
                </span>
              </button>

              <div
                className="collapse navbar-collapse main-menu-item"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/home">
                      Accueil
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/apropos">
                      A propos
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/services">
                      Services
                    </NavLink>
                  </li>
                  {/* Vous pouvez également utiliser NavLink pour les autres liens */}
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      to="/blog"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Blog
                    </NavLink>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <NavLink className="dropdown-item" to="/blog">
                        Blog
                      </NavLink>
                      <NavLink className="dropdown-item" to="/single-blog">
                        Single blog
                      </NavLink>
                    </div>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="dropdown cart">
                <a
                  className="dropdown-toggle"
                  href="#h"
                  id="navbarDropdown3"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <ion-icon name="person-outline"></ion-icon>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
