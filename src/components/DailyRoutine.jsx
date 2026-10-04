import { useState } from "react";
import { Clock, Sparkles } from "lucide-react";
import { dailyRoutine } from "../data/tisData";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function DailyRoutine() {
  const [activeSlot, setActiveSlot] = useState(0);
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section className="routine-section" id="routine" ref={sectionRef}>
      <div className="container">
        <div className={`section-header-center ${isVisible ? "revealed" : "fade-init"}`}>
          <div className="section-eyebrow">
            <Clock size={16} className="eyebrow-icon" />
            <span>STRUCTURED RESIDENTIAL LIVING</span>
          </div>
          <h2 className="section-title">
            A Day in the Life of a <span className="highlight-text">TIS Scholar</span>
          </h2>
          <p className="section-subtitle">
            Balancing mindful mornings, intellectual intensity, athletic passion, and restorative evening reflection.
            A rhythm designed to instill lifelong self-discipline and joy.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="routine-timeline-wrapper">
          <div className="routine-cards-track">
            {dailyRoutine.map((item, idx) => {
              const isSelected = activeSlot === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveSlot(idx)}
                  className={`routine-slot-card ${isSelected ? "selected" : ""} ${isVisible ? "revealed" : "fade-init"}`}
                  style={{ transitionDelay: `${idx * 60}ms` }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setActiveSlot(idx)}
                >
                  <div className="slot-time-badge">
                    <Clock size={13} />
                    <span>{item.time}</span>
                  </div>

                  <h3 className="slot-title">{item.title}</h3>
                  <p className="slot-desc">{item.detail}</p>

                  <div className="slot-indicator">
                    <span className="indicator-dot" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Highlight Detail Box */}
          <div className="routine-active-detail">
            <div className="active-badge">
              <Sparkles size={14} />
              <span>Current Snapshot • {dailyRoutine[activeSlot].time}</span>
            </div>
            <h3 className="active-title">{dailyRoutine[activeSlot].title}</h3>
            <p className="active-text">{dailyRoutine[activeSlot].detail}</p>
            <div className="active-tips">
              <span className="tip-chip">✓ Resident Faculty Supervision</span>
              <span className="tip-chip">✓ Zero Gadget Distraction</span>
              <span className="tip-chip">✓ Balanced Mental Health</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
