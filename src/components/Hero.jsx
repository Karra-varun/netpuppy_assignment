import { ArrowRight, Trophy, Users, Award, Play, Compass, CheckCircle2 } from "lucide-react";
import { schoolInfo, keyMetrics } from "../data/tisData";

export default function Hero({ onOpenEnquiry }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-section" id="hero">
      {/* Background Graphic & Himalayan Campus Image */}
      <div className="hero-bg-wrapper">
        <img
          src="/images/campus-hero.jpg"
          alt="Tula's International School 22-Acre Campus in Dehradun"
          className="hero-bg-image"
          fetchPriority="high"
          loading="eager"
        />
        <div className="hero-overlay" />
      </div>

      <div className="container hero-content-grid">
        {/* Left Column: Headlines & High-Converting CTAs */}
        <div className="hero-text-block">
          <div className="hero-badge animate-fade-in">
            <span className="badge-dot" />
            <span>ADMISSIONS OPEN FOR {schoolInfo.admissionYear} • CLASSES IV TO XII</span>
          </div>

          <h1 className="hero-title animate-slide-up">
            The Modern Gurukul for <span className="highlight-text">Holistic Excellence</span> in Dehradun.
          </h1>

          <p className="hero-description animate-slide-up-delay-1">
            Rooted in timeless Vedic values, elevated by 21st-century experiential education.
            Empowering curious minds across a pristine 22-acre Himalayan foothill campus with
            16+ Olympic sports and personalized 6:1 faculty mentorship.
          </p>

          {/* Key Value Prop Checkmarks */}
          <div className="hero-checkmarks animate-slide-up-delay-1">
            <div className="checkmark-item">
              <CheckCircle2 size={16} className="check-icon" />
              <span>CBSE Co-Ed Boarding</span>
            </div>
            <div className="checkmark-item">
              <CheckCircle2 size={16} className="check-icon" />
              <span>Equestrian & Archery Academy</span>
            </div>
            <div className="checkmark-item">
              <CheckCircle2 size={16} className="check-icon" />
              <span>Safe Residential Campus</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="hero-cta-group animate-slide-up-delay-2">
            <button
              onClick={onOpenEnquiry}
              className="btn btn-primary btn-lg interactive"
              type="button"
            >
              <span>Apply for Admissions {schoolInfo.admissionYear}</span>
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => scrollToSection("sports")}
              className="btn btn-secondary btn-lg interactive"
              type="button"
            >
              <Compass size={18} />
              <span>Explore 16+ Sports</span>
            </button>
          </div>

          {/* Trust Rating Summary */}
          <div className="hero-trust-bar animate-slide-up-delay-3">
            <div className="trust-avatars">
              <span className="trust-avatar">🎓</span>
              <span className="trust-avatar">🏇</span>
              <span className="trust-avatar">🏹</span>
              <span className="trust-avatar">🔬</span>
            </div>
            <div className="trust-text">
              <div className="trust-stars">★★★★★</div>
              <p>Rated <strong>#1 Co-Ed Boarding School</strong> in Dehradun & North India</p>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Highlight Card with Live Badges */}
        <div className="hero-visual-block animate-slide-up-delay-2">
          <div className="hero-floating-card main-feature-card">
            <div className="card-media">
              <img
                src="/images/equestrian.jpg"
                alt="Equestrian Academy at TIS"
                className="feature-card-img"
              />
              <div className="card-media-tag">Equestrian Academy</div>
            </div>

            <div className="card-body">
              <div className="card-badge">
                <Trophy size={14} className="trophy-gold" />
                <span>Premier Facility</span>
              </div>
              <h3 className="card-title">Where Character Meets Discipline</h3>
              <p className="card-snippet">
                Olympic show-jumping, recurve archery, and semi-Olympic aquatics integrated into daily student life.
              </p>
              <div className="card-meta">
                <span className="meta-pill">16+ Sports</span>
                <span className="meta-pill">Himalayan Air</span>
                <span className="meta-pill">Resident Coaches</span>
              </div>
            </div>
          </div>

          {/* Floating Pill Badge 1: Rankings */}
          <div className="floating-badge badge-top-right">
            <div className="badge-icon-wrap gold">
              <Trophy size={18} />
            </div>
            <div className="badge-content">
              <strong>#1 in Dehradun</strong>
              <span>Education Today Survey</span>
            </div>
          </div>

          {/* Floating Pill Badge 2: Ratio */}
          <div className="floating-badge badge-bottom-left">
            <div className="badge-icon-wrap crimson">
              <Users size={18} />
            </div>
            <div className="badge-content">
              <strong>6:1 Mentorship Ratio</strong>
              <span>Individual Academic Care</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Metrics Strip */}
      <div className="hero-metrics-strip">
        <div className="container">
          <div className="metrics-grid">
            {keyMetrics.map((item, idx) => (
              <div key={idx} className="metric-box">
                <div className="metric-number-wrap">
                  <span className="metric-val">{item.value}</span>
                  <span className="metric-unit">{item.unit}</span>
                </div>
                <div className="metric-label">{item.label}</div>
                <div className="metric-desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
