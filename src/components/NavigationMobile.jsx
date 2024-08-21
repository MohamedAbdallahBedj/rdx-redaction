"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
  { link: "contact", label: "Contact", className: `text-decoration-none` },
];

const NavigationMobile = () => {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const handleClick = (e) => {
    setOpen((previous) => !previous);
  };
  return (
    <header
      id=""
      className="fixed-top d-lg-none px-4 py-3"
      style={{
        backgroundColor: "#0e1b4d",
      }}
    >
      <div className="d-flex justify-content-between mt-2">
        <Link href="/">
          <Image width={80} height={50} src="/img/logo.png" alt="logo" />
        </Link>
        <button onClick={handleClick} className="bg-transparent border-0">
          <i
            className={`text-white bi bi${open ? "-x-lg" : "-list"}`}
            style={{ fontSize: 24 }}
          />
        </button>
      </div>
      <nav className={`d-${open ? "block" : "none"} my-5`}>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: 10,
            fontSize: 18,
          }}
        >
          {mainLinks.map(({ link, label, className }, index) => (
            <li key={`link- ${link}`}>
              <button
                style={{
                  color: "white",
                  border: 0,
                  backgroundColor: "transparent",
                }}
                className={className}
                onClick={() => {
                  handleClick();
                  router.push(`/#${link}`);
                }}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavigationMobile;
