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
    <div>
      {/* LOGOUT BUTTON */}
      <button onClick={handleLogout}>Logout</button>

      <h2>Available Vehicles</h2>

      {vehicles.map((v) => (
        <div key={v._id} style={{ border: "1px solid #ccc", margin: "10px" }}>
          <h3>{v.model}</h3>
          <p>Type: {v.type}</p>
          <p>₹{v.pricePerDay} / day</p>
          <button onClick={() => navigate(`/book/${v._id}`)}>
            Book Now
          </button>
        </div>
      ))}
    </div>
  );
}

export default Vehicles;
