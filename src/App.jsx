import { Routes, Route } from "react-router-dom";
import "./index.css";

import Home from "./pages/Home";
import Details from "./pages/Details";
import Booking1 from "./pages/Booking1";
import Booking2 from "./pages/Booking2";
import Booking3 from "./pages/Booking3";
import Confirmation from "./pages/Confirmation";

export default function App() {
  return (
    <>
      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />

        <Route path="/booking" element={<Booking1 />} />
        <Route path="/booking/step-2" element={<Booking2 />} />
        <Route path="/booking/step-3" element={<Booking3 />} />

        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </>
  );
}
