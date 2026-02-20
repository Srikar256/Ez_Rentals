import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Vehicles from "./pages/Vehicles";
import Book from "./pages/Book";
import MyBookings from "./pages/MyBookings";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-black flex items-center justify-center">
              <h1 className="text-5xl font-bold text-white">
                EZ RENTALS
              </h1>
            </div>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/vehicles"
          element={
            <ProtectedRoute>
              <Vehicles />
            </ProtectedRoute>
          }
        />

        <Route
          path="/book/:id"
          element={
            <ProtectedRoute>
              <Book />
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-bookings"
          element={
            <ProtectedRoute>
              <MyBookings />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;