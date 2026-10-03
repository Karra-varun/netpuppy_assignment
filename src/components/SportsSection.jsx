import { useState } from "react";
import { Trophy, Compass, Check, ArrowRight, Shield } from "lucide-react";
import { sportsList } from "../data/tisData";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function SportsSection({ onOpenEnquiry }) {
  const [filter, setFilter] = useState("all");
  const [sectionRef, isVisible] = useScrollReveal();

  const categories = [
    { id: "all", label: "All 16+ Sports" },
    { id: "Equestrian", label: "Horse Riding" },
    { id: "Precision Sports", label: "Archery & Shooting" },
    { id: "Aquatics", label: "Swimming" },
    { id: "Racquet Sports", label: "Tennis & Squash" },
    { id: "Field Sports", label: "Football & Cricket" },
  ];

  const filteredSports =
    filter === "all"
      ? sportsList
      : sportsList.filter((s) => s.category.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section className="sports-section" id="sports" ref={sectionRef}>
      <div className="container">
        {/* Header with direct TIS quote */}
        <div className={`section-header-center ${isVisible ? "revealed" : "fade-init"}`}>
          <div className="section-eyebrow sports-eyebrow">
            <Trophy size={16} className="eyebrow-icon text-crimson" />
            <span>ATHLETIC EXCELLENCE & DISCIPLINE</span>
          </div>
          <h2 className="section-title">
            Sports? At Tula's, it’s not just a facility.<br />
            <span className="highlight-text">It is the foundation!</span>
          </h2>
          <p className="section-subtitle">
            16+ Olympic and modern sports curated to instill agility, fortitude, and sportsman spirit.
            Mentored by national champions and licensed NIS-certified resident coaches.
          </p>
        </div>

        {/* Filter Pill Tabs */}
        <div className="sports-filter-pills" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`filter-pill-btn ${filter === cat.id ? "active" : ""}`}
              role="tab"
              aria-selected={filter === cat.id}
              type="button"
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Sports Cards Grid */}
        <div className="sports-cards-grid">
          {filteredSports.map((sport, index) => (
            <article
              key={sport.id}
              className={`sport-card ${isVisible ? "revealed" : "fade-init"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="sport-card-image-wrap">
                <img
                  src={sport.image}
                  alt={`${sport.name} at Tula's International School`}
                  className="sport-card-img"
                  loading="lazy"
                />
                <div className="sport-tag-badge">{sport.tag}</div>
                <div className="sport-category-tag">{sport.category}</div>
              </div>

              <div className="sport-card-content">
                <h3 className="sport-card-title">{sport.name}</h3>
                <p className="sport-card-desc">{sport.desc}</p>

                <div className="sport-specs-list">
                  {sport.specs.map((spec, i) => (
                    <div key={i} className="sport-spec-pill">
                      <Check size={12} className="check-gold" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                <div className="sport-card-footer">
                  <button
                    onClick={onOpenEnquiry}
                    className="sport-inquire-link"
                    type="button"
                  >
                    <span>Inquire About Sports Academy</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Sports Callout Banner */}
        <div className="sports-callout-card">
          <div className="callout-content">
            <div className="callout-badge">
              <Shield size={16} />
              <span>Olympic Pathway Mentorship</span>
            </div>
            <h3 className="callout-heading">
              Training Future Olympians with Daily Rigor & Nutrition
            </h3>
            <p className="callout-desc">
              Every student is encouraged to master at least one team sport and one individual Olympic discipline.
              Specialized coaching sessions with national awardees such as Sakshi Malik and Shooter Dadi Prakashi Tomar.
            </p>
          </div>
          <div className="callout-action">
            <button
              onClick={onOpenEnquiry}
              className="btn btn-primary btn-lg"
              type="button"
            >
              <span>Download Sports Brochure</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
