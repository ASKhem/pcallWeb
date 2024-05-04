import "./globals.css";
import Header from "../components/header/MainHeader";
import LateralSocials from "../components/socials/LateralSocials";
import { IoIosArrowRoundForward } from "react-icons/io";

export const metadata = {
  title: "PC ALL",
  description: "Página principal",
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
        <footer className="relative w-full bg-gradient-to-l from-custom-blue to-slate-800 flex items-center justify-center py-10">
          <div className="full w-11/12 flex flex-col items-center justify-between">
            <div className="full w-full flex items-center justify-between border-b pb-10 border-gray-700">
              <div className="w-5/12 flex  gap-5 text-white">
                <img src="/img/header/logo.png" alt="logo" className="bg-custom-blue w-28" />
                <p className=""> We are a company that builds the best PCs in the market, we have the best components and the best prices</p>
              </div>
              <button className="bg-slate-900 text-white px-4 py-2 rounded-lg flex gap-2 items-center justify-center hover:text-orange-600">
                Contact us<IoIosArrowRoundForward className="text-3xl" />
              </button>
            </div>
            <div className="w-full flex items-center justify-between pt-10 border-b pb-10 border-gray-700">
              <div className="w-5/12 flex items-start justify-between">
                <ul className="text-white flex flex-col gap-3">
                  <li className="font-bold text-lg border-b border-gray-700">Services</li>
                  <li>Build a PC</li>
                  <li>Disccounts</li>
                  <li>Recycle your PC</li>
                  <li>Gallery</li>
                </ul>
                <ul className="text-white flex flex-col gap-3 ">
                  <li className="font-bold  text-lg border-b border-gray-700">Company</li>
                  <li>About us</li>
                  <li>Team</li>
                  <li>Sponsors</li>
                  <li>Sustainability</li>
                </ul>
                <ul className="text-white flex flex-col gap-3">
                  <li className="font-bold text-lg border-b border-gray-700">Contact</li>
                  <li>Phone</li>
                  <li>Email</li>
                  <li>Location</li>
                  <li>FAQ</li>
                </ul>
              </div>
              <div className="w-7/12 px-6 flex items-center justify-center">
                <div className="px-6 w-fit flex flex-col items-center justify-between">

                  <h2 className="w-10/12 text-3xl font-bold text-white">
                    Keep Updated
                  </h2>

                  <form className="mt-10 flex gap-x-4">
                    <label for="email-address" className="sr-only">Email address</label>
                    <input id="email-address" name="email" type="email" autocomplete="email" required="" className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6" placeholder="Enter your email" />
                    <button type="submit" className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-custom-blue shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Notify me</button>
                  </form>

                </div>
              </div>
            </div>
            <p className="text-white text-center pt-10">© 2024 PC ALL. All rights reserved</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
