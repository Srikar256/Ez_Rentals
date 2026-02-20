import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function Vehicles() {
  const [vehicles, setVehicles] = useState([]);
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    api
      .get("/vehicles")
      .then((res) => setVehicles(res.data))
      .catch(() => alert("Failed to load vehicles"));
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

return (
  <div className="min-h-screen bg-gray-100 p-8">
    <h2 className="text-3xl font-bold mb-6 text-gray-800">
      Available Vehicles
    </h2>

    <div className="grid md:grid-cols-3 gap-6">
      {vehicles.map((v) => (
        <div
          key={v._id}
          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
        >
          <div className="p-5">
            <h3 className="text-xl font-semibold mb-2">{v.model}</h3>
            <p className="text-gray-600 mb-1">Type: {v.type}</p>
            <p className="text-gray-800 font-bold mb-4">
              ₹{v.pricePerDay} / day
            </p>

            <button
              onClick={() => navigate(`/book/${v._id}`)}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Book Now
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);
}

export default Vehicles;
