import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuthStore } from "../store/auth";

export default function Navbar() {
  const { isLoggedIn } = useAuthStore();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-xl font-bold text-blue-600">
          Holidaze
        </NavLink>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        <div
          className={`flex-col md:flex md:flex-row md:items-center gap-4 ${isOpen ? "flex" : "hidden"}`}
        >
          <NavLink to="/" className="hover:text-blue-600">
            Home
          </NavLink>
          {!isLoggedIn && (
            <NavLink to="/login" className="hover:text-blue-600">
              Login
            </NavLink>
          )}
          {!isLoggedIn && (
            <NavLink to="/register" className="hover:text-blue-600">
              Register
            </NavLink>
          )}
          {isLoggedIn && (
            <NavLink to="/my-bookings" className="hover:text-blue-600">
              My bookings
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
}
