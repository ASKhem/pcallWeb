import "./globals.css";
import Header from "../components/header/MainHeader";
import LateralSocials from "../components/socials/LateralSocials";
import Footer from "../components/footer/Footer";

export const metadata = {
  title: "HOME",
  description: "Main web page",
  keywords: "PC, Build, Gallery, Sell, Components, Second-hand, Custom, New, Discount, Builds, Services",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-image bg-zinc-950 flex flex-col items-center">
        <Header />
        <LateralSocials />
        <main className="bg-zinc-100 bg-opacity-5 min-h-screen w-full mt-8">
          {children}
        </main>
        <Footer />  
      </body>
    </html>
  );
}
