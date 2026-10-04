import { Award, Quote } from "lucide-react";
import { dignitaries } from "../data/tisData";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function DignitariesSection() {
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section className="dignitaries-section" ref={sectionRef}>
      <div className="container">
        <div className={`section-header-center ${isVisible ? "revealed" : "fade-init"}`}>
          <div className="section-eyebrow">
            <Award size={16} className="eyebrow-icon text-gold" />
            <span>INFLUENTIAL PERSONALITIES ON CAMPUS</span>
          </div>
          <h2 className="section-title">
            Inspiring the Next Generation of <span className="highlight-text">Global Achievers</span>
          </h2>
          <p className="section-subtitle">
            World champions, Olympic medalists, and distinguished educators regularly visit TIS
            to conduct masterclasses, inaugurate sporting leagues, and mentor our scholars.
          </p>
        </div>

        <div className="dignitaries-grid">
          {dignitaries.map((person, index) => (
            <div
              key={index}
              className={`dignitary-card ${isVisible ? "revealed" : "fade-init"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="dignitary-quote-icon">
                <Quote size={28} />
              </div>

              <blockquote className="dignitary-quote">
                “{person.quote}”
              </blockquote>

              <div className="dignitary-footer">
                <div className="dignitary-avatar">
                  <span>{person.name.charAt(0)}</span>
                </div>
                <div className="dignitary-info">
                  <h3 className="dignitary-name">{person.name}</h3>
                  <p className="dignitary-title">{person.title}</p>
                  <span className="dignitary-honors">{person.honors}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
