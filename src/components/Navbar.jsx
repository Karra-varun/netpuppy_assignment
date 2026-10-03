import { useState, useEffect } from "react";
import { Phone, Mail, Menu, X, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { schoolInfo } from "../data/tisData";

export default function Navbar({ onOpenEnquiry, isDark, onToggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About TIS", href: "#about" },
    { label: "Modern Gurukul", href: "#gurukul" },
    { label: "16+ Sports", href: "#sports" },
    { label: "Campus Life", href: "#campus" },
    { label: "Daily Routine", href: "#routine" },
    { label: "Admissions", href: "#admission-process" },
    { label: "FAQ", href: "#faq" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
      {/* Top Announcement & Helpline Bar */}
      <div className="header-topbar">
        <div className="container header-topbar-inner">
          <div className="topbar-left">
            <span className="affiliation-badge">
              <ShieldCheck size={14} className="badge-icon" />
              CBSE Affiliated Co-Ed Boarding (Class IV to XII)
            </span>
            <span className="topbar-divider">|</span>
            <span className="session-tag">
              <Sparkles size={13} className="sparkle-icon" /> Admissions Open {schoolInfo.admissionYear}
            </span>
          </div>

          <div className="topbar-right">
            <a href={`tel:${schoolInfo.phonePrimary}`} className="topbar-link">
              <Phone size={13} />
              <span>Helpline: {schoolInfo.phonePrimary}</span>
            </a>
            <span className="topbar-divider">|</span>
            <a href={`mailto:${schoolInfo.email}`} className="topbar-link">
              <Mail size={13} />
              <span>{schoolInfo.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="navbar-main">
        <div className="container navbar-inner">
          {/* Brand Logo & Crest */}
          <a href="#" className="brand-logo" aria-label="Tula's International School Homepage">
            <div className="logo-crest">
              <span className="crest-symbol">TIS</span>
            </div>
            <div className="logo-text">
              <span className="school-title">TULA'S</span>
              <span className="school-subtitle">INTERNATIONAL SCHOOL</span>
              <span className="school-gurukul">THE MODERN GURUKUL • DEHRADUN</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="nav-link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Action CTAs */}
          <div className="nav-actions">
            <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />

            <button
              onClick={onOpenEnquiry}
              className="btn btn-primary nav-enquire-btn"
              type="button"
            >
              <span>Enquire Now</span>
              <ArrowRight size={15} />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="mobile-menu-toggle"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile menu"
              type="button"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? "open" : ""}`} aria-hidden={!mobileMenuOpen}>
        <div className="mobile-drawer-content">
          <ul className="mobile-nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="mobile-nav-link"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-drawer-footer">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="btn btn-primary w-full"
              type="button"
            >
              <span>Apply / Enquire Now</span>
              <ArrowRight size={16} />
            </button>

            <div className="mobile-contact-info">
              <p>Admissions Helpline:</p>
              <a href={`tel:${schoolInfo.phonePrimary}`} className="phone-highlight">
                {schoolInfo.phonePrimary}
              </a>
              <p className="campus-location">Dhoolkot, Chakrata Road, Dehradun</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
