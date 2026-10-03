import { useState } from "react";
import { Star, MessageSquareQuote, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { testimonials } from "../data/tisData";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Testimonials() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [sectionRef, isVisible] = useScrollReveal();

  const nextTestimonial = () => {
    setCurrentIdx((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials-section" id="testimonials" ref={sectionRef}>
      <div className="container">
        <div className={`section-header-center ${isVisible ? "revealed" : "fade-init"}`}>
          <div className="section-eyebrow">
            <MessageSquareQuote size={16} className="eyebrow-icon" />
            <span>COMMUNITY VOICES & OUTCOMES</span>
          </div>
          <h2 className="section-title">
            Trusted by Parents, <span className="highlight-text">Cherished by Scholars</span>
          </h2>
          <p className="section-subtitle">
            Hear from families across India and international NRI communities whose children have flourished
            within Tula's supportive boarding culture.
          </p>
        </div>

        {/* Testimonials Display */}
        <div className="testimonial-featured-card">
          <div className="testimonial-card-inner">
            <div className="quote-mark">“</div>

            <div className="stars-row">
              {[...Array(testimonials[currentIdx].rating)].map((_, i) => (
                <Star key={i} size={18} className="star-filled" />
              ))}
            </div>

            <blockquote className="testimonial-quote">
              {testimonials[currentIdx].content}
            </blockquote>

            <div className="testimonial-author-block">
              <div className="author-avatar-badge">
                {testimonials[currentIdx].name.charAt(0)}
              </div>
              <div className="author-details">
                <h3 className="author-name">{testimonials[currentIdx].name}</h3>
                <p className="author-role">
                  {testimonials[currentIdx].role} • {testimonials[currentIdx].city}
                </p>
                <div className="verified-parent-tag">
                  <CheckCircle2 size={12} />
                  <span>Verified TIS Community Member</span>
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="testimonial-controls">
              <button
                onClick={prevTestimonial}
                className="ctrl-btn prev-btn"
                aria-label="Previous testimonial"
                type="button"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="indicator-pills">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIdx(idx)}
                    className={`indicator-dot-btn ${idx === currentIdx ? "active" : ""}`}
                    aria-label={`Go to slide ${idx + 1}`}
                    type="button"
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="ctrl-btn next-btn"
                aria-label="Next testimonial"
                type="button"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
