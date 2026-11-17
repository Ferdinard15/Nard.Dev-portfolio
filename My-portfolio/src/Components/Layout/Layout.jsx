import { Outlet } from "react-router";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { ScrollToTopButton } from "../ScrollToTopButton/ScrollTopButton";

export function Layout() {
  return (
    <div className="min-h-screen bg-[#0b1120] text-white flex flex-col">
      <Navbar />

      {/* Active page renders right here */}
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />

      {/* Global Back to Top Button */}
      <ScrollToTopButton />
    </div>
  );
}
