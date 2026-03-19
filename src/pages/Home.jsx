import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* NAV — HOME ONLY */}
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

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-text">
          <h1>
            Forget Busy Work,
            <br />
            Start Next Vacation
          </h1>

          <p>
            We provide what you need to enjoy your holiday
            <br />
            with family. Time to make another
            <br />
            memorable moments.
          </p>

          <button
            className="hero-btn"
            onClick={() => navigate("/details")}
          >
            Show Me Now
          </button>

          <div className="hero-stats">
            <div>
              <strong>80,409</strong>
              <span>travelers</span>
            </div>
            <div>
              <strong>862</strong>
              <span>treasure</span>
            </div>
            <div>
              <strong>1,492</strong>
              <span>cities</span>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img src="/hero.png" alt="Hero" />
        </div>
      </section>

      {/* IMAGE SECTIONS */}
      <section className="image-only">
        <img src="/most-picked.png" alt="Most Picked" />
      </section>

      <section className="stacked-images">
        <img src="/section-1.png" alt="Section 1" />
        <img src="/section-2.png" alt="Section 2" />
        <img src="/section-3.png" alt="Section 3" />
      </section>

      <section className="bottom-images">
        <img src="/bottom-1.png" alt="Bottom 1" />
        <img src="/bottom-2.png" alt="Bottom 2" />
      </section>
    </>
  );
}
