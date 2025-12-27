import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../services/api";

function Book() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pickupDate, setPickupDate] = useState("");
  const [dropDate, setDropDate] = useState("");

  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      await api.post("/bookings", {
        vehicleId: id,
        pickupDate,
        dropDate,
      });
      alert("Booking successful");
      navigate("/my-bookings");
    } catch (err) {
      alert(err.response?.data?.message || "Booking failed");
    }
  };

  return (
    <form onSubmit={handleBooking}>
      <h2>Book Vehicle</h2>
      <input type="date" onChange={(e) => setPickupDate(e.target.value)} />
      <input type="date" onChange={(e) => setDropDate(e.target.value)} />
      <button type="submit">Confirm Booking</button>
    </form>
  );
}

export default Book;
