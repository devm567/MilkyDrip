import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function HeaderCmp() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Lock/unlock scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"; // lock scroll
    } else {
      document.body.style.overflow = "auto"; // unlock scroll
    }
  }, [menuOpen]);

  const navLinkClass = ({ isActive }) =>
    isActive ? "text-amber-400 font-bold" : "hover:text-amber-300";

  const actionLinkClass = ({ isActive }) =>
    isActive ? "text-amber-400 font-bold" : "hover:text-gray-300";

  // Array for categories of product
  const categories = [
    { name: "New Releases", path: "/new-releases" },
    { name: "Top Pics", path: "/top-pics" },
    { name: "Gaming", path: "/gaming" },
    { name: "Horror", path: "/horror" },
    { name: "Movies", path: "/movies" },
    { name: "Other", path: "/other" },
  ];

  return (
    <>
      {/* Header */}
      <header className="bg-black text-white fixed top-0 left-0 w-full h-[10vh] z-20">
        <nav className="flex items-center justify-between h-full px-6">
          {/* Desktop: Logo (left) */}
          <div className="hidden lg:block text-2xl font-bold">
            <Link to="/" className="hover:text-amber-300">
              <img src="/image/i.png" alt="Logo" className="h-[7vh]" />
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
              <img src="/image/i.png" alt="Logo" className="h-[7vh]" />
            </Link>
          </div>

          {/* Desktop: Nav Links (center) */}
          <div className="hidden lg:flex space-x-8">
            {categories.map((item) => (
              <NavLink key={item.path} to={item.path} className={navLinkClass}>
                <div className="styledFont">{item.name.toUpperCase()}</div>
              </NavLink>
            ))}
          </div>

          {/* Actions (right side) */}
          <div className="flex items-center">
            {/* Desktop: Cart + Wishlist + Account */}
            <div className="hidden lg:flex items-center space-x-6">
              <NavLink to="/cart" className={actionLinkClass}>
                <i className="fa-solid fa-cart-shopping text-amber-200"></i>
              </NavLink>
              <NavLink to="/wishlist" className={actionLinkClass}>
                <i className="fa-solid fa-heart text-red-600"></i>
              </NavLink>
              <NavLink to="/account" className={actionLinkClass}>
                <i className="fa-solid fa-user text-amber-200"></i>
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
                <i className="fa-solid fa-user text-amber-200"></i>
              </NavLink>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Dropdown Menu (overlay above everything, only when open) */}
      {menuOpen && (
        <div className="lg:hidden bg-black text-white fixed top-[10vh] left-0 w-full flex flex-col space-y-4 p-4 z-[9999]">
          {categories.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={navLinkClass}
              onClick={() => setMenuOpen(false)} // closes menu on click
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
}

export default HeaderCmp;
