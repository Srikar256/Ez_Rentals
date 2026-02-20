import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        EZ RENTALS
      </Link>

      <div className="space-x-4">
        {isAuthenticated ? (
          <>
            <Link to="/vehicles" className="hover:text-gray-300">
              Vehicles
            </Link>
            <Link to="/my-bookings" className="hover:text-gray-300">
              My Bookings
            </Link>
            <button
              onClick={logout}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-gray-300">
              Login
            </Link>
            <Link to="/register" className="hover:text-gray-300">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;