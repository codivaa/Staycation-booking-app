import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Booking1() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });

  const isValid =
    form.firstName &&
    form.lastName &&
    form.email &&
    form.phone;

  return (
    <div className="booking-page">

      {/* TOP TITLE */}
      <div className="booking-top">
        <h2 className="brand">
          <span style={{ color: "#2942c7" }}>Stay</span>
          <span style={{ color: "#152c5b" }}>cation</span>
        </h2>

        <div className="steps">
          <span className="active">1</span>
          <span>2</span>
          <span>3</span>
        </div>

        <h1>Booking Information</h1>
        <p>Please fill up the blank fields below</p>
      </div>

      {/* CONTENT */}
      <div className="booking-content">

        {/* LEFT IMAGE */}
        <div className="booking-left">
          <img src="/booking-left.png" alt="Property" />
        </div>

        {/* RIGHT FORM */}
        <div className="booking-right">
          <label>First Name</label>
          <input onChange={e => setForm({ ...form, firstName: e.target.value })} />

          <label>Last Name</label>
          <input onChange={e => setForm({ ...form, lastName: e.target.value })} />

          <label>Email Address</label>
          <input onChange={e => setForm({ ...form, email: e.target.value })} />

          <label>Phone Number</label>
          <input onChange={e => setForm({ ...form, phone: e.target.value })} />
        </div>

        {/* ✅ BUTTONS — CENTERED UNDER IMAGE + FORM */}
        <div className="booking-actions">
          {isValid && (
            <button
              className="continue-btn"
              onClick={() => navigate("/booking/step-2")}
            >
              Continue to Book
            </button>
          )}

          <button className="cancel-btn">Cancel</button>
        </div>

      </div>
    </div>
  );
}
