import { useState } from "react";
import { HelpCircle, ChevronDown, PhoneCall } from "lucide-react";
import { faqList, schoolInfo } from "../data/tisData";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function FaqSection({ onOpenEnquiry }) {
  const [openIndex, setOpenIndex] = useState(0); // First open by default
  const [sectionRef, isVisible] = useScrollReveal();

  const toggleAccordion = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="faq-section" id="faq" ref={sectionRef}>
      <div className="container">
        <div className={`section-header-center ${isVisible ? "revealed" : "fade-init"}`}>
          <div className="section-eyebrow">
            <HelpCircle size={16} className="eyebrow-icon" />
            <span>CLARITY FOR PARENTS</span>
          </div>
          <h2 className="section-title">
            Frequently Asked <span className="highlight-text">Questions</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about our CBSE academic curriculum, boarding safety,
            dining nutrition, sports infrastructure, and admissions timeline.
          </p>
        </div>

        <div className="faq-accordion-wrap">
          {faqList.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`faq-item ${isOpen ? "open" : ""} ${isVisible ? "revealed" : "fade-init"}`}
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="faq-question-btn"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  type="button"
                >
                  <span className="faq-q-text">{item.question}</span>
                  <span className="faq-chevron-wrap">
                    <ChevronDown size={18} className={`chevron-icon ${isOpen ? "rotate" : ""}`} />
                  </span>
                </button>

                <div
                  id={`faq-answer-${idx}`}
                  className="faq-answer-collapse"
                  hidden={!isOpen}
                >
                  <div className="faq-answer-content">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Bar */}
        <div className="faq-support-strip">
          <div className="support-icon-wrap">
            <PhoneCall size={22} />
          </div>
          <div className="support-text">
            <h4>Have specific questions regarding fees or boarding?</h4>
            <p>Speak directly with our Dehradun Admissions Counselors anytime.</p>
          </div>
          <div className="support-actions">
            <a href={`tel:${schoolInfo.phonePrimary}`} className="btn btn-secondary">
              Call {schoolInfo.phonePrimary}
            </a>
            <button onClick={onOpenEnquiry} className="btn btn-primary" type="button">
              Request Callback
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
