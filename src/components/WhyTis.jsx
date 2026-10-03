import { useState } from "react";
import { BookOpen, Activity, HeartHandshake, Check, Sparkles, ArrowRight } from "lucide-react";
import { gurukulPillars } from "../data/tisData";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function WhyTis({ onOpenEnquiry }) {
  const [activeTab, setActiveTab] = useState(0);
  const [sectionRef, isVisible] = useScrollReveal();

  const icons = [BookOpen, Activity, HeartHandshake];

  return (
    <section className="why-tis-section" id="gurukul" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className={`section-header-center ${isVisible ? "revealed" : "fade-init"}`}>
          <div className="section-eyebrow">
            <Sparkles size={16} className="eyebrow-icon" />
            <span>THE MODERN GURUKUL PHILOSOPHY</span>
          </div>
          <h2 className="section-title">
            Ancient Wisdom, <span className="highlight-text">Future-Ready Minds</span>.
          </h2>
          <p className="section-subtitle">
            Established in 2012 under the aegis of Rishabh Educational Trust, Tula's International School
            blends the reverence, discipline, and mentor-disciple bond of the Vedic Gurukul with cutting-edge
            scientific infrastructure and global pedagogy.
          </p>
        </div>

        {/* Core Philosophy Banner */}
        <div className={`gurukul-quote-banner ${isVisible ? "revealed" : "fade-init"}`}>
          <div className="quote-badge">Core Ethos</div>
          <blockquote className="quote-text">
            “At Tula's, we believe school isn't just about lessons—it’s about seamless opportunities.
            When learning feels like an inspiring adventure, students don't just study; they grow, explore, and shape the future.”
          </blockquote>
          <div className="quote-author">
            — The TIS Academic Council & Board of Governors
          </div>
        </div>

        {/* 3 Pillars Interactive Showcase */}
        <div className="pillars-grid-layout">
          {/* Pillar Selector Tabs */}
          <div className="pillar-tabs-list" role="tablist">
            {gurukulPillars.map((pillar, idx) => {
              const IconComp = icons[idx] || BookOpen;
              const isActive = activeTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`pillar-tab-btn ${isActive ? "active" : ""}`}
                  role="tab"
                  aria-selected={isActive}
                  type="button"
                >
                  <div className="tab-icon-wrap">
                    <IconComp size={22} />
                  </div>
                  <div className="tab-text">
                    <span className="tab-sub">{pillar.subtitle}</span>
                    <h3 className="tab-title">{pillar.title}</h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Details Card */}
          <div className="pillar-display-card">
            <div className="pillar-display-content">
              <span className="pillar-kicker">{gurukulPillars[activeTab].subtitle}</span>
              <h3 className="pillar-main-heading">{gurukulPillars[activeTab].title}</h3>
              <p className="pillar-main-desc">{gurukulPillars[activeTab].description}</p>

              <div className="pillar-feature-list">
                {gurukulPillars[activeTab].highlights.map((h, i) => (
                  <div key={i} className="pillar-feature-item">
                    <div className="check-bubble">
                      <Check size={14} />
                    </div>
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="pillar-card-actions">
                <button
                  onClick={onOpenEnquiry}
                  className="btn btn-primary"
                  type="button"
                >
                  <span>Explore Academic Programs</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

            <div className="pillar-display-media">
              <img
                src="/images/stem-lab.jpg"
                alt="Students in modern Gurukul STEM Lab at TIS Dehradun"
                className="pillar-image"
                loading="lazy"
              />
              <div className="media-overlay-tag">
                <span>STEM & Mind-Mapping Labs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
