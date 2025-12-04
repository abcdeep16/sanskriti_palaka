import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const loc = useLocation();

  // Check login status
  const isAuthenticated = localStorage.getItem("user") !== null;

  const handleSignOut = () => {
    localStorage.removeItem("user");
    window.location.href = "/"; // redirect to home
  };

  // Show Sign In only when user is logged out and NOT on login/register page
  const showSignIn =
    !isAuthenticated &&
    loc.pathname !== "/login" &&
    loc.pathname !== "/register";

  const links = [
    { to: "/", label: "Home" },
    { to: "/music", label: "Music" },
    { to: "/tours", label: "Tours" },
    { to: "/food", label: "Food" },
    { to: "/crafts", label: "Crafts" },
    { to: "/about", label: "About" },
  ];

  return (
    <header className="py-6 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-6 flex items-center justify-between">

        {/* BRAND LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-deepIndigo to-redAccent flex items-center justify-center text-white font-bold text-lg">
            SP
          </div>
          <div>
            <div className="text-xl font-semibold text-gray-900">
              Sanskriti Pallaka
            </div>
            <div className="text-xs text-gray-500 -mt-1">
              Arts • Music • Food • Travel
            </div>
          </div>
        </Link>

        {/* NAVIGATION LINKS */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium ${
                loc.pathname === l.to
                  ? "text-deepIndigo underline decoration-accentGold/40"
                  : "text-gray-600 hover:text-deepIndigo"
              }`}
            >
              {l.label}
            </Link>
          ))}

          {/* ⭐ SHOW SIGN-IN BUTTON ⭐ */}
          {showSignIn && (
            <Link
              to="/login"
              className="ml-4 px-5 py-2 rounded-lg text-sm font-semibold text-white 
                       bg-gradient-to-br from-deepIndigo to-redAccent shadow-md hover:opacity-90"
            >
              Sign In
            </Link>
          )}

          {/* ⭐ SHOW SIGN-OUT BUTTON ⭐ */}
          {isAuthenticated && (
            <button
              onClick={handleSignOut}
              className="ml-4 px-5 py-2 rounded-lg text-sm font-semibold text-white bg-red-600 hover:opacity-90"
            >
              Sign Out
            </button>
          )}
        </nav>

        {/* MOBILE NAV */}
        <div className="md:hidden">
          {showSignIn && (
            <Link
              to="/login"
              className="px-3 py-2 bg-deepIndigo text-white rounded-lg text-sm"
            >
              Sign In
            </Link>
          )}

          {isAuthenticated && (
            <button
              onClick={handleSignOut}
              className="px-3 py-2 bg-red-600 text-white rounded-lg text-sm"
            >
              Sign Out
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
