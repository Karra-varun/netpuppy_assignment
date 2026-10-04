import { MapPin, Phone, Mail, ExternalLink, ShieldCheck } from "lucide-react";
import { schoolInfo } from "../data/tisData";

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer({ onOpenEnquiry }) {

  return (
    <footer className="site-footer">
      {/* Pre-footer Call to Action Band */}
      <div className="pre-footer-band">
        <div className="container pre-footer-inner">
          <div className="pre-footer-text">
            <h3 className="pre-footer-title">Give Your Child the Modern Gurukul Advantage</h3>
            <p className="pre-footer-sub">
              Admissions now open for Academic Session {schoolInfo.admissionYear}. Classes IV to XII (Co-Ed Residential).
            </p>
          </div>
          <div className="pre-footer-actions">
            <button
              onClick={onOpenEnquiry}
              className="btn btn-primary btn-lg"
              type="button"
            >
              <span>Schedule Campus Visit</span>
            </button>
            <a href={`tel:${schoolInfo.phonePrimary}`} className="btn btn-secondary btn-lg">
              <Phone size={16} />
              <span>Call Helpline</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="footer-main">
        <div className="container footer-grid">
          {/* Brand Info & Address Column */}
          <div className="footer-col brand-col">
            <div className="footer-brand-logo">
              <div className="logo-crest">
                <span className="crest-symbol">TIS</span>
              </div>
              <div className="logo-text">
                <span className="school-title">TULA'S</span>
                <span className="school-subtitle">INTERNATIONAL SCHOOL</span>
                <span className="school-gurukul">THE MODERN GURUKUL • DEHRADUN</span>
              </div>
            </div>

            <p className="footer-bio">
              Established in 2012 by Rishabh Educational Trust, Tula's International School is
              India’s premier CBSE co-educational residential institution, empowering students through
              academic excellence, 16+ Olympic sports, and timeless values.
            </p>

            <div className="footer-contact-items">
              <div className="contact-item">
                <MapPin size={18} className="contact-icon text-gold" />
                <span>{schoolInfo.address}</span>
              </div>
              <div className="contact-item">
                <Phone size={18} className="contact-icon text-gold" />
                <span>
                  <a href={`tel:${schoolInfo.phonePrimary}`}>{schoolInfo.phonePrimary}</a> |{" "}
                  <a href={`tel:${schoolInfo.phoneLandline}`}>{schoolInfo.phoneLandline}</a>
                </span>
              </div>
              <div className="contact-item">
                <Mail size={18} className="contact-icon text-gold" />
                <a href={`mailto:${schoolInfo.email}`}>{schoolInfo.email}</a>
              </div>
            </div>

            <a
              href={schoolInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="map-link-btn"
            >
              <span>View On Google Maps</span>
              <ExternalLink size={13} />
            </a>
          </div>

          {/* Column 2: Academics */}
          <div className="footer-col">
            <h4 className="footer-heading">Academics & Gurukul</h4>
            <ul className="footer-links-list">
              <li><a href="#gurukul">The Gurukul Pedagogy</a></li>
              <li><a href="#gurukul">CBSE Curriculum (IV - XII)</a></li>
              <li><a href="#gurukul">Science, Commerce & Humanities</a></li>
              <li><a href="#gurukul">6:1 Student-Teacher Ratio</a></li>
              <li><a href="#gurukul">STEM & Robotics Laboratory</a></li>
              <li><a href="#gurukul">Integrated Entrance Prep</a></li>
            </ul>
          </div>

          {/* Column 3: Sports Foundation */}
          <div className="footer-col">
            <h4 className="footer-heading">Sports Foundation</h4>
            <ul className="footer-links-list">
              <li><a href="#sports">Equestrian & Horse Riding</a></li>
              <li><a href="#sports">Olympic Archery Range</a></li>
              <li><a href="#sports">10m & 25m Shooting Range</a></li>
              <li><a href="#sports">All-Weather Heated Pool</a></li>
              <li><a href="#sports">ITF Synthetic Tennis Courts</a></li>
              <li><a href="#sports">FIFA Turf Football Ground</a></li>
            </ul>
          </div>

          {/* Column 4: Admissions & Compliance */}
          <div className="footer-col">
            <h4 className="footer-heading">Admissions & Legal</h4>
            <ul className="footer-links-list">
              <li><a href="#admission-process" onClick={onOpenEnquiry}>Apply for 2025-26</a></li>
              <li><a href="#admission-process">Admission Criteria & Steps</a></li>
              <li><a href="#routine">A Day in Gurukul Life</a></li>
              <li><a href="#faq">Parent FAQ</a></li>
              <li><a href="https://tis.edu.in/mandatory-disclosure" target="_blank" rel="noopener noreferrer">CBSE Mandatory Disclosure</a></li>
              <li><a href="https://tis.edu.in/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy & Safety</a></li>
            </ul>

            <div className="cbse-affil-card">
              <ShieldCheck size={20} className="shield-icon" />
              <div>
                <strong>CBSE Affiliated</strong>
                <span>Affiliation No. 3530379 • Co-Educational</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="copyright-text">
            © {CURRENT_YEAR} Tula's International School, Dehradun. All Rights Reserved.
          </p>
          <div className="footer-bottom-links">
            <span>Redesigned for Frontend Developer Evaluation</span>
            <span className="dot">•</span>
            <span>TIS Dehradun Showcase</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
