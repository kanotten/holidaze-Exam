import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <header className="sticky top-0 z-50 shadow bg-white">
        <Navbar />
      </header>
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 py-8">
        <Outlet />
      </main>
      <footer className="bg-white border-t py-4">
        <Footer />
      </footer>
    </div>
  );
}
