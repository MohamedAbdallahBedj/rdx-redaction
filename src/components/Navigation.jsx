"use client";
import Link from "next/link";
import React, { useEffect } from "react";
const mainLinks = [
  { link: "acceuil", label: "Accueil", className: `active text-decoration-none` },
  {
    link: "qui-somme-nous",
    label: "Qui somme nous?",
    className: `text-decoration-none`,
  },
  { link: "artistes", label: "Artistes", className: `text-decoration-none` },
  {
    link: "evenements",
    label: "Événements",
    className: `text-decoration-none`,
  },
  { link: "boutique", label: "Boutique", className: `text-decoration-none` },
];

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
    let navmenulinks = document.querySelectorAll(".navmenu a");

    function navmenuScrollspy() {
      navmenulinks.forEach((navmenulink) => {
        if (!navmenulink.hash) return;
        let section = document.querySelector(navmenulink.hash);
        if (!section) return;
        let position = window.scrollY + 200;
        if (
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
          document
            .querySelectorAll(".navmenu a.active")
            .forEach((link) => link.classList.remove("active"));
          navmenulink.classList.add("active");
        } else {
          navmenulink.classList.remove("active");
        }
      });
    }
    window.addEventListener("load", navmenuScrollspy);
    document.addEventListener("scroll", navmenuScrollspy);

    document.addEventListener("scroll", toggleScrolled);
    window.addEventListener("load", toggleScrolled);
  });
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <Link
          href="/"
          className="logo d-flex align-items-center me-auto text-decoration-none"
        >
          <img src="/img/logo.png" alt="logo" />
        </Link>
        <nav id="navmenu" className="navmenu">
          <ul>
            {mainLinks.map(({ link, label, className }, index) => (
              <li key={`link - ${link}`}>
                <Link href={`/#${link}`} className={className}>
                  {label}
                </Link>
              </li>
            ))}
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
          className="cta-btn d-none d-xl-block text-decoration-none"
          href="/#contact"
        >
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Navigation;
