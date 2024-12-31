import { Poppins } from "next/font/google";
import "./globals.css";

// Componentes
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import PrecargaImagenes from "@/components/preCarga";

const inter = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600","700", "900"] });

export const metadata = {
  title: "Bio Fan",
  description: "Web de bio-fan",
  icons: [
    {
      url: "/logo-bio-icon.png",
      href: "/logo-bio-icon.png"
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <PrecargaImagenes/>
        <Nav/>
        <div className="pt-24">
          {children}
        </div>
        <Footer/>
        <div className="w-full h-8 bg-[#1d4674]">
          <p className="text-white font-bold text-md text-center pt-1">Copyright 2024  ©  BIOFAN, S.L.</p>
        </div>
      </body>
    </html>
  );
}
