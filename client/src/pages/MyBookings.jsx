import { useEffect, useState } from "react";
import api from "../services/api";

function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    api.get("/bookings/my")
      .then((res) => setBookings(res.data))
      .catch(() => alert("Failed to load bookings"));
  }, []);

  return (
    <div>
      <h2>My Bookings</h2>
      {bookings.map((b) => (
        <div key={b._id} style={{ border: "1px solid #ccc", margin: "10px" }}>
          <h3>{b.vehicle.model}</h3>
          <p>{b.vehicle.type}</p>
          <p>Total: ₹{b.totalAmount}</p>
        </div>
      ))}
    </div>
  );
}

export default MyBookings;
