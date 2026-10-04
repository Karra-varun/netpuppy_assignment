import { Award, Medal, CheckCircle } from "lucide-react";
import { rankingsData } from "../data/tisData";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function RankingsBanner() {
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section className="rankings-section" ref={sectionRef}>
      <div className="container">
        <div className={`rankings-header ${isVisible ? "revealed" : "fade-init"}`}>
          <div className="section-eyebrow">
            <Medal size={16} className="eyebrow-icon" />
            <span>ACCREDITED EXCELLENCE</span>
          </div>
          <h2 className="section-title">
            Recognized as India's Foremost Boarding Institution
          </h2>
          <p className="section-subtitle">
            Consistently ranked among the elite residential schools by independent educational audits,
            evaluating academic outcomes, campus safety, sporting infrastructure, and pastoral care.
          </p>
        </div>

        <div className="rankings-grid">
          {rankingsData.map((item, index) => (
            <div
              key={index}
              className={`ranking-card ${isVisible ? "revealed" : "fade-init"}`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="rank-crown">
                <Award size={28} className="crown-icon" />
              </div>
              <div className="rank-big">{item.rank}</div>
              <div className="rank-badge">{item.badge}</div>
              <h3 className="rank-title">{item.title}</h3>
              <p className="rank-source">{item.source}</p>
              <div className="rank-verified">
                <CheckCircle size={13} className="check-gold" />
                <span>Verified Independent Audit</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
