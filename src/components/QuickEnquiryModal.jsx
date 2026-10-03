import { useState, useEffect } from "react";
import { X, CheckCircle, Sparkles, Send, Phone, Download, Calendar } from "lucide-react";
import confetti from "canvas-confetti";
import { schoolInfo } from "../data/tisData";

export default function QuickEnquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    studentClass: "",
    boardingType: "Full Residential Boarding",
    state: "",
    tourPreference: "On-Campus Guided Visit",
    consent: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
      setSubmitted(false);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate quick server API submission
    setTimeout(() => {
      const generatedRef = "TIS-" + Math.floor(100000 + Math.random() * 900000);
      setReferenceId(generatedRef);
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#9b1128", "#c09d59", "#60bab1", "#ffffff"],
        });
      } catch (err) {
        // Fallback gracefully if canvas is blocked
      }
    }, 700);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="modal-close-btn"
          aria-label="Close inquiry dialog"
          type="button"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <div className="modal-form-view">
            <div className="modal-header">
              <div className="modal-badge">
                <Sparkles size={14} />
                <span>Admissions {schoolInfo.admissionYear}</span>
              </div>
              <h3 className="modal-title">Inquire & Schedule Campus Tour</h3>
              <p className="modal-sub">
                Connect with our Senior Admissions Dean for fee structures, seat availability,
                and guided Himalayan campus visits.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group-row">
                <div className="form-field">
                  <label htmlFor="parentName">Parent / Guardian Name *</label>
                  <input
                    id="parentName"
                    name="parentName"
                    type="text"
                    required
                    placeholder="e.g. Dr. Rajesh Sharma"
                    value={formData.parentName}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="phone">Mobile Number *</label>
                  <div className="phone-input-wrap">
                    <span className="country-code">+91</span>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      pattern="[0-9]{10}"
                      maxLength={10}
                      required
                      placeholder="10-digit number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="form-group-row">
                <div className="form-field">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="e.g. rajesh.sharma@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="studentClass">Class Seeking Admission *</label>
                  <select
                    id="studentClass"
                    name="studentClass"
                    required
                    value={formData.studentClass}
                    onChange={handleChange}
                  >
                    <option value="">Select Grade</option>
                    <option value="Class IV">Class IV (Primary Gurukul)</option>
                    <option value="Class V">Class V</option>
                    <option value="Class VI">Class VI (Middle School)</option>
                    <option value="Class VII">Class VII</option>
                    <option value="Class VIII">Class VIII</option>
                    <option value="Class IX">Class IX (Secondary CBSE)</option>
                    <option value="Class X">Class X</option>
                    <option value="Class XI">Class XI (Science / Commerce / Arts)</option>
                    <option value="Class XII">Class XII</option>
                  </select>
                </div>
              </div>

              <div className="form-group-row">
                <div className="form-field">
                  <label htmlFor="boardingType">Boarding Category</label>
                  <select
                    id="boardingType"
                    name="boardingType"
                    value={formData.boardingType}
                    onChange={handleChange}
                  >
                    <option value="Full Residential Boarding">Full Residential Boarding (Recommended)</option>
                    <option value="Day Boarding">Day Boarding (Dehradun Residents)</option>
                    <option value="Weekly Boarding">Weekly Boarding</option>
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="state">State / City of Residence *</label>
                  <input
                    id="state"
                    name="state"
                    type="text"
                    required
                    placeholder="e.g. New Delhi / Mumbai / Dehradun / UAE"
                    value={formData.state}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="tourPreference">Preferred Tour Mode</label>
                <select
                  id="tourPreference"
                  name="tourPreference"
                  value={formData.tourPreference}
                  onChange={handleChange}
                >
                  <option value="On-Campus Guided Visit">Personal Guided Walkthrough at Dehradun Campus</option>
                  <option value="Virtual Video Walkthrough">Virtual 1-on-1 Video Interaction</option>
                  <option value="Brochure Only">Send Detailed Prospectus & Fee Structure</option>
                </select>
              </div>

              <div className="form-consent">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    required
                  />
                  <span>
                    I agree to receive the official TIS admissions brochure, fee structure, and call counseling
                    from Tula's International School, Dehradun.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary btn-submit-enquiry"
              >
                {isSubmitting ? (
                  <span>Securing Your Slot...</span>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Submit Admission Inquiry</span>
                  </>
                )}
              </button>

              <div className="form-security-note">
                🔒 Your confidential information is securely processed according to CBSE compliance standards.
              </div>
            </form>
          </div>
        ) : (
          <div className="modal-success-view">
            <div className="success-icon-wrap">
              <CheckCircle size={48} className="check-success" />
            </div>

            <h3 className="success-title">Inquiry Successfully Registered!</h3>
            <p className="success-ref">
              Application Reference Number: <strong>{referenceId}</strong>
            </p>

            <p className="success-text">
              Thank you, <strong>{formData.parentName}</strong>. Our Senior Admissions Counselor has received
              your inquiry for <strong>{formData.studentClass || "TIS Boarding"}</strong>.
              You will receive a call and SMS with your campus tour confirmation within 24 business hours.
            </p>

            <div className="success-actions-box">
              <a
                href="https://admission.tis.edu.in"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Download size={16} />
                <span>Download TIS Prospectus (PDF)</span>
              </a>

              <a
                href={`tel:${schoolInfo.phonePrimary}`}
                className="btn btn-secondary"
              >
                <Phone size={16} />
                <span>Call Helpline: {schoolInfo.phonePrimary}</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="btn btn-outline btn-close-modal"
              type="button"
            >
              Done & Return to Homepage
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
