import { ArrowRight, Sparkles } from "lucide-react";
import { admissionSteps, schoolInfo } from "../data/tisData";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function AdmissionProcess({ onOpenEnquiry }) {
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section className="admission-process-section" id="admission-process" ref={sectionRef}>
      <div className="container">
        <div className={`section-header-center ${isVisible ? "revealed" : "fade-init"}`}>
          <div className="section-eyebrow">
            <Sparkles size={16} className="eyebrow-icon text-crimson" />
            <span>SEAMLESS ENROLLMENT JOURNEY</span>
          </div>
          <h2 className="section-title">
            Your Child’s Path to <span className="highlight-text">TIS Gurukul</span>
          </h2>
          <p className="section-subtitle">
            A transparent, child-centric four-step admission journey designed to understand your ward's
            strengths and aspirations. Now inviting applications for Session {schoolInfo.admissionYear}.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="steps-container">
          <div className="steps-grid">
            {admissionSteps.map((step, idx) => (
              <div
                key={idx}
                className={`step-card ${isVisible ? "revealed" : "fade-init"}`}
                style={{ transitionDelay: `${idx * 120}ms` }}
              >
                <div className="step-number-tag">{step.step}</div>
                <div className="step-body">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">{step.desc}</p>
                </div>
                <div className="step-progress-indicator" />
              </div>
            ))}
          </div>
        </div>

        {/* Enrollment Fast Track Card */}
        <div className="admission-cta-box">
          <div className="cta-box-left">
            <span className="session-pill">Classes IV to XII • Session {schoolInfo.admissionYear}</span>
            <h3 className="cta-box-title">Limited Residential Seats Available</h3>
            <p className="cta-box-desc">
              Due to our strict 6:1 mentorship policy and individual pastoral rooms, boarding seats are allocated
              on a rolling merit basis. Early registration is advised.
            </p>
          </div>

          <div className="cta-box-right">
            <button
              onClick={onOpenEnquiry}
              className="btn btn-primary btn-lg w-full md:w-auto"
              type="button"
            >
              <span>Begin Application Process</span>
              <ArrowRight size={17} />
            </button>
            <p className="cta-subtext">No obligation • Quick response within 24 hours</p>
          </div>
        </div>
      </div>
    </section>
  );
}
