import { useNavigate } from "react-router-dom";

export default function Details() {
  const navigate = useNavigate();

  return (
    <>
      {/* NAV — DETAILS ONLY */}
      <header className="nav">
        <div className="nav-inner">
          <div className="nav-logo">
            <span style={{ color: "#2942c7" }}>Stay</span>
            <span style={{ color: "#152c5b" }}>cation</span>
          </div>

          <nav className="nav-links">
            <a>Home</a>
            <a>Browse by</a>
            <a>Stories</a>
            <a>Agents</a>
          </nav>
        </div>
      </header>

      {/* DETAILS PAGE */}
      <div className="details-page">
        <div className="details-gallery">

          {/* LEFT IMAGES */}
          <div className="left-images">
            <img src="/photo-1.png" alt="Photo 1" />
            <img src="/photo-2.png" alt="Photo 2" />
          </div>

          {/* RIGHT IMAGES */}
          <div className="right-images">
            <div className="thumb-row">
              <img src="/photo-3.png" alt="Photo 3" />

              {/* BOOKING IMAGE */}
              <div
                className="booking-photo"
                role="button"
                tabIndex={0}
                onClick={() => navigate("/booking")}
                onKeyDown={(e) =>
                  e.key === "Enter" && navigate("/booking")
                }
              >
                <img src="/photo-4.png" alt="Photo 4" />

                <button
                  type="button"
                  className="continue-book-btn"
                >
                  Continue to Book
                </button>
              </div>
            </div>

            <img src="/photo-5.png" alt="Photo 5" />
            <img src="/photo-6.png" alt="Photo 6" />
            <img
              src="/photo-7.png"
              alt="Photo 7"
              className="thumb-small"
            />
          </div>

        </div>
      </div>
    </>
  );
}
