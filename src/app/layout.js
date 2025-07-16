import ParticlesBackground from "@/components/background";
import Footer from "../components/footer";
import Header from "../components/header";
import "./globals.css";

export const metadata = {
  title: "R&M Pedia",
  description: "plicación web desarrollada con **Next.js**, **JavaScript** y **Tailwind CSS**, que consume la [API pública de Rick and Morty](https://rickandmortyapi.com/) para explorar personajes, buscar por nombre, aplicar filtros dinámicos y visualizar detalles.",
  icons: {
    icon: "/portal.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-[var(--background)]  antialiased `}
      >
        <Header />
        <ParticlesBackground />
        {children}
        <Footer />
      </body>
    </html>
  );
}
