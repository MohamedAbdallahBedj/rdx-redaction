import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <Link href="index.html" className="logo d-flex align-items-center me-auto text-decoration-none">
          {/* <img src="assets/img/logo.png" alt="" /> */}
          {/* Uncomment the line below if you also wish to use an text logo */}
          <h1 className="sitename">RDX Rédaction</h1> 
        </Link>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <Link href="#hero" className="active text-decoration-none">
                Acceuil
                <br />
              </Link>
            </li>
            <li>
              <Link className="text-decoration-none" href="#speakers">Nos Artists</Link>
            </li>
            <li>
              <Link className="text-decoration-none" href="#schedule">Evénements</Link>
            </li>
            {/* <li>
              <Link className="text-decoration-none" href="#venue">Venue</Link>
            </li>
            <li>
              <Link className="text-decoration-none" href="#hotels">Hotels</Link>
            </li>
            <li>
              <Link className="text-decoration-none" href="#gallery">Gallery</Link>
            </li>
            <li className="dropdown">
              <Link className="text-decoration-none" href="#">
                <span>Dropdown</span>{" "}
                <i className="bi bi-chevron-down toggle-dropdown" />
              </Link>
              <ul>
                <li>
                  <Link className="text-decoration-none" href="#">Dropdown 1</Link>
                </li>
                <li className="dropdown">
                  <Link className="text-decoration-none" href="#">
                    <span>Deep Dropdown</span>{" "}
                    <i className="bi bi-chevron-down toggle-dropdown" />
                  </Link>
                  <ul>
                    <li>
                      <Link className="text-decoration-none" href="#">Deep Dropdown 1</Link>
                    </li>
                    <li>
                      <Link className="text-decoration-none" href="#">Deep Dropdown 2</Link>
                    </li>
                    <li>
                      <Link className="text-decoration-none" href="#">Deep Dropdown 3</Link>
                    </li>
                    <li>
                      <Link className="text-decoration-none" href="#">Deep Dropdown 4</Link>
                    </li>
                    <li>
                      <Link className="text-decoration-none" href="#">Deep Dropdown 5</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link className="text-decoration-none" href="#">Dropdown 2</Link>
                </li>
                <li>
                  <Link className="text-decoration-none" href="#">Dropdown 3</Link>
                </li>
                <li>
                  <Link className="text-decoration-none" href="#">Dropdown 4</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className="text-decoration-none" href="#contact">Contact</Link>
            </li> */}
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list" />
        </nav>
        <Link className="cta-btn d-none d-sm-block text-decoration-none" href="#buy-tickets">
          Contactez Nous
        </Link>
      </div>
    </header>
  );
};

export default Navigation;
