import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        gap: 0,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingBlockEnd: 100,
      }}
    >
      <Image width={400} height={400} src="/img/notfound.png" alt="not found"/>
      <Link
        style={{
          padding: "10px 30px",
          backgroundColor: "red",
          color: "white",
          borderRadius: 50,
        }}
        href="/"
      >
        Accueil
      </Link>
    </div>
  );
};

export default NotFound;
