import { Trees, ShieldAlert, HeartPulse, Sparkles, Utensils, Home, Microscope, BookOpen } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function CampusBento({ onOpenEnquiry }) {
  const [sectionRef, isVisible] = useScrollReveal();

  const facilities = [
    {
      title: "22-Acre Green Foothill Haven",
      highlight: "Pollution-Free Microclimate",
      desc: "Nestled in Dehradun's lush Shivalik range, surrounded by Sal groves and fresh mountain breezes away from urban pollution.",
      icon: Trees,
      tag: "Nature & Health",
      gridSpan: "col-span-2",
      bgClass: "card-green-accent",
    },
    {
      title: "24*7 Resident Infirmary",
      highlight: "On-Campus Medical Care",
      desc: "Fully equipped healthcare facility staffed with full-time resident doctors, trained nurses, and on-call specialty tie-ups.",
      icon: HeartPulse,
      tag: "Student Wellness",
      gridSpan: "col-span-1",
      bgClass: "card-teal-accent",
    },
    {
      title: "6:1 Mentorship Ratio",
      highlight: "Unrivaled Attention",
      desc: "No child sits unnoticed. Faculty members double as pastoral mentors, monitoring academic, emotional, and social growth.",
      icon: BookOpen,
      tag: "Academic Care",
      gridSpan: "col-span-1",
      bgClass: "card-crimson-accent",
    },
    {
      title: "Modern Boarding Houses",
      highlight: "Home Away From Home",
      desc: "Secure, gender-segregated dormitories with temperature regulation, ergonomic study desks, recreational lounges, and resident house parents.",
      icon: Home,
      tag: "Residential Life",
      gridSpan: "col-span-1",
      bgClass: "card-warm-accent",
    },
    {
      title: "Hygienic Organic Dining",
      highlight: "Pure Vegetarian Kitchen",
      desc: "Farm-to-fork nutritious dining designed by certified nutritionists to support demanding academic and sports schedules.",
      icon: Utensils,
      tag: "Wholesome Nutrition",
      gridSpan: "col-span-1",
      bgClass: "card-gold-accent",
    },
    {
      title: "STEM & Digital Classrooms",
      highlight: "21st Century Pedagogy",
      desc: "Smart digital boards, high-end robotics & astronomy lab, 3D printing, and fiber-optic connected collaborative innovation spaces.",
      icon: Microscope,
      tag: "Future Ready",
      gridSpan: "col-span-2",
      bgClass: "card-navy-accent",
    },
  ];

  return (
    <section className="campus-bento-section" id="campus" ref={sectionRef}>
      <div className="container">
        <div className={`section-header-center ${isVisible ? "revealed" : "fade-init"}`}>
          <div className="section-eyebrow">
            <Sparkles size={16} className="eyebrow-icon" />
            <span>WORLD-CLASS RESIDENTIAL INFRASTRUCTURE</span>
          </div>
          <h2 className="section-title">
            Crafted for <span className="highlight-text">Safety, Serenity & Growth</span>
          </h2>
          <p className="section-subtitle">
            A sanctuary where students discover their deepest talents. Every square foot of our 22-acre
            campus is engineered to foster independence, intellectual curiosity, and robust health.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {facilities.map((fac, idx) => {
            const IconComp = fac.icon;
            return (
              <div
                key={idx}
                className={`bento-card ${fac.gridSpan} ${fac.bgClass} ${isVisible ? "revealed" : "fade-init"}`}
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div className="bento-card-top">
                  <div className="bento-icon-wrapper">
                    <IconComp size={24} />
                  </div>
                  <span className="bento-tag">{fac.tag}</span>
                </div>

                <div className="bento-card-body">
                  <span className="bento-highlight">{fac.highlight}</span>
                  <h3 className="bento-title">{fac.title}</h3>
                  <p className="bento-desc">{fac.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Campus Tour CTA */}
        <div className="campus-cta-strip">
          <div className="campus-cta-text">
            <h4>Experience the Serenity in Person</h4>
            <p>We welcome prospective parents for guided private walkthroughs of our 22-acre Dehradun campus.</p>
          </div>
          <button
            onClick={onOpenEnquiry}
            className="btn btn-secondary"
            type="button"
          >
            <span>Schedule Campus Visit</span>
          </button>
        </div>
      </div>
    </section>
  );
}
