import { Poppins } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import Navigation from "@/components/Navigation";
import { AOSInit } from "@/components/AOS";
import Footer from "@/components/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300"] });

export const metadata = {
  title: "RDX Rédaction | Site officielle",
  description: "Chez RDX Rédaction, nous sommes passionnés par l'organisation et la gestion d'événements inoubliables. Nous nous engageons à transformer vos idées en réalité et à offrir des expériences mémorables qui captivent et inspirent.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`index-page ${poppins.className}`}>
        <AOSInit />
        <Navigation />

        {children}
        <Footer />

      </body>
    </html>
  );
}
