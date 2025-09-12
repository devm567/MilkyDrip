import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function HeaderCmp() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive ? "text-amber-400 font-bold" : "hover:text-amber-300";

  const actionLinkClass = ({ isActive }) =>
    isActive ? "text-amber-400 font-bold" : "hover:text-gray-300";

  return (
    <header className="bg-black text-white fixed top-0 left-0 w-full h-[10vh] z-50">
      <nav className="flex items-center justify-between h-full px-6">
        {/* Desktop: Logo (left) */}
        <div className="hidden lg:block text-2xl font-bold">
          <Link to="/" className="hover:text-amber-300">
            MilkyDrip
          </Link>
        </div>

        {/* Mobile/Tablet: Hamburger (left) */}
        <div className="lg:hidden flex items-center">
          <button
            className="flex flex-col gap-1 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
          </button>
        </div>

        {/* Mobile/Tablet: Logo (center) */}
        <div className="lg:hidden text-xl font-bold">
          <Link to="/" className="hover:text-amber-300">
            MilkyDrip
          </Link>
        </div>

        {/* Desktop: Nav Links (center) */}
        <div className="hidden lg:flex space-x-8">
          <NavLink to="/new-releases" className={navLinkClass}>
            New Releases
          </NavLink>
          <NavLink to="/top-pics" className={navLinkClass}>
            Top Pics
          </NavLink>
          <NavLink to="/gaming" className={navLinkClass}>
            Gaming
          </NavLink>
          <NavLink to="/horror" className={navLinkClass}>
            Horror
          </NavLink>
          <NavLink to="/movies" className={navLinkClass}>
            Movies
          </NavLink>
          <NavLink to="/other" className={navLinkClass}>
            Other
          </NavLink>
        </div>

        {/* Actions (right side) */}
        <div className="flex items-center">
          {/* Desktop: Cart + Wishlist + Account */}
          <div className="hidden lg:flex items-center space-x-6">
            <NavLink to="/cart" className={actionLinkClass}>
            <i className="fa-solid fa-cart-shopping text-amber-200" ></i>
            </NavLink>
            <NavLink to="/wishlist" className={actionLinkClass}>
            <i className="fa-solid fa-heart text-red-600" ></i>
            </NavLink>
            <NavLink to="/account" className={actionLinkClass}>
              <i className="fa-solid fa-user text-amber-200" ></i>
            </NavLink>
          </div>

          {/* Mobile/Tablet: Only Account */}
          <div className="lg:hidden">
            <NavLink
              to="/account"
              className={({ isActive }) =>
                isActive
                  ? "text-amber-400 font-bold"
                  : "text-white hover:text-gray-300"
              }
            >
               <i className="fa-solid fa-user text-amber-200" ></i>
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-black text-white absolute top-[10vh] left-0 w-full flex flex-col space-y-4 p-4">
          <NavLink to="/new-releases" className={navLinkClass}>
            New Releases
          </NavLink>
          <NavLink to="/top-pics" className={navLinkClass}>
            Top Pics
          </NavLink>
          <NavLink to="/gaming" className={navLinkClass}>
            Gaming
          </NavLink>
          <NavLink to="/horror" className={navLinkClass}>
            Horror
          </NavLink>
          <NavLink to="/movies" className={navLinkClass}>
            Movies
          </NavLink>
          <NavLink to="/other" className={navLinkClass}>
            Other
          </NavLink>
        </div>
      )}
    </header>
  );
}

export default HeaderCmp;
