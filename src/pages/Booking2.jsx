import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Booking2() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    proof: "",
    bank: "",
    sender: ""
  });

  const isValid = form.proof && form.bank && form.sender;

  return (
    <div className="booking-page">

      {/* TOP */}
      <div className="booking-top">
        <h2 className="brand">
          <span style={{ color: "#2942c7" }}>Stay</span>
          <span style={{ color: "#152c5b" }}>cation</span>
        </h2>

        {/* STEPS */}
        <div className="steps">
          <div className="step done">✓</div>
          <div className="step active">2</div>
          <div className="step">3</div>
        </div>

        <h1>Payment</h1>
        <p className="subtext">Kindly follow the instructions below</p>
      </div>

      {/* CONTENT */}
      <div className="booking-content payment-content">

        {/* LEFT INFO */}
        <div className="payment-left">
          <p><strong>Transfer Pembayaran:</strong></p>
          <p>Tax: 10%</p>
          <p>Sub total: $480 USD</p>
          <p><strong>Total: $580 USD</strong></p>

          <div className="bank">
            <img src="/bca.png" alt="BCA" className="bank-logo" />
          </div>

          <div className="bank">
            <img src="/mandiri.png" alt="Mandiri" className="bank-logo" />
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="payment-right">
          <label>Upload Bukti Transfer</label>
          <input
            type="file"
            onChange={(e) =>
              setForm({ ...form, proof: e.target.files[0] })
            }
          />

          <label>Asal Bank</label>
          <input
            placeholder="Please type here..."
            onChange={(e) =>
              setForm({ ...form, bank: e.target.value })
            }
          />

          <label>Nama Pengirim</label>
          <input
            placeholder="Please type here..."
            onChange={(e) =>
              setForm({ ...form, sender: e.target.value })
            }
          />
        </div>

        {/* ✅ BUTTONS — CENTERED UNDER BOTH COLUMNS */}
        <div className="booking-actions">
          {isValid && (
            <button
              className="continue-btn"
              onClick={() => navigate("/booking/step-3")}
            >
              Continue
            </button>
          )}

          <button className="cancel-btn">Cancel</button>
        </div>

      </div>
    </div>
  );
}
