import Image from "next/image";
import Link from "next/link";
import React from "react";

export const mainLinks = [
  {
    link: "acceuil",
    label: "Accueil",
    className: `active text-decoration-none`,
  },
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
  return (
    <header
      id="header"
      className="header d-none d-md-flex align-items-center fixed-top"
    >
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <Link
          href="/"
          className="logo d-flex align-items-center me-auto text-decoration-none"
        >
          <Image width={769} height={546} src="/img/logo.png" alt="logo" />
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
          </ul>
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
