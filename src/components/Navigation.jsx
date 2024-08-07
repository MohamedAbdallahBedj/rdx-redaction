"use client";
import Link from "next/link";
import React, { useEffect } from "react";

const Navigation = () => {
  useEffect(() => {
    function toggleScrolled() {
      const selectBody = document.querySelector("body");
      const selectHeader = document.querySelector("#header");
      if (
        !selectHeader.classList.contains("scroll-up-sticky") &&
        !selectHeader.classList.contains("sticky-top") &&
        !selectHeader.classList.contains("fixed-top")
      )
        return;
      window.scrollY > 100
        ? selectBody.classList.add("scrolled")
        : selectBody.classList.remove("scrolled");
    }

    document.addEventListener("scroll", toggleScrolled);
    window.addEventListener("load", toggleScrolled);
  });
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <Link
          href="index.html"
          className="logo d-flex align-items-center me-auto text-decoration-none"
        >
          <img src="/img/logo.png" alt="logo" />
          {/* Uncomment the line below if you also wish to use an text logo */}
          {/* <h1 className="sitename">RDX Rédaction</h1>  */}
        </Link>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <Link href="#Accueil" className="active text-decoration-none">
                Acceuil
                <br />
              </Link>
            </li>
            <li>
              <Link className="text-decoration-none" href="#qui-somme-nous">
                Qui somme nous?
              </Link>
            </li>
            <li>
              <Link className="text-decoration-none" href="#artistes">
                Artistes
              </Link>
            </li>
            <li>
              <Link className="text-decoration-none" href="#événements">
                Événements
              </Link>
            </li>
            <li>
              <Link className="text-decoration-none" href="#boutique">
                Boutique
              </Link>
            </li>

            {/* <li className="dropdown">
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
        <Link
          className="cta-btn d-none d-sm-block text-decoration-none"
          href="#contact"
        >
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Navigation;
