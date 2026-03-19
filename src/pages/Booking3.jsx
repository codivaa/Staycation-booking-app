import { useNavigate } from "react-router-dom";

export default function Confirmation() {
  const navigate = useNavigate();

  return (
    <div className="confirmation-page">

      {/* TOP BRAND */}
      <h2 className="brand center">
        <span style={{ color: "#2942c7" }}>Stay</span>
        <span style={{ color: "#152c5b" }}>cation.</span>
      </h2>

      {/* STEPS */}
      <div className="steps done-all">
        <span className="step done">✓</span>
        <span className="step done">✓</span>
        <span className="step done">✓</span>
      </div>

      {/* CONTENT */}
      <h1>Yay! Completed</h1>

      {/* IMAGE (YOU WILL ADD IT) */}
      <img
        src="/confirmation.png"
        alt="Completed"
        className="confirmation-image"
      />

      <p className="confirmation-text">
        We will inform you via email later <br />
        once the transaction has been accepted
      </p>

      <button
        className="continue-btn"
        onClick={() => navigate("/")}
      >
        Back to Home
      </button>

    </div>
  );
}
