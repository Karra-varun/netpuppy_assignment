import { useState, useEffect } from "react";
import { X, CheckCircle, Sparkles, Send, Phone, Download } from "lucide-react";
import { schoolInfo } from "../data/tisData";

export default function QuickEnquiryModal({ isOpen, onClose }) {
  // Form input state
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    studentClass: "Class IX",
    boardingType: "Full Residential Boarding",
    state: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState("");

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  // Close modal on Escape key press and prevent background scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsSubmitted(false);
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Handle controlled form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API request delay
    setTimeout(() => {
      const generatedRef = "TIS-" + Math.floor(100000 + Math.random() * 900000);
      setRefNumber(generatedRef);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={handleClose} role="dialog" aria-modal="true">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="modal-close-btn"
          aria-label="Close dialog"
          type="button"
        >
          <X size={20} />
        </button>

        {!isSubmitted ? (
          <div className="modal-form-view">
            <div className="modal-header">
              <span className="modal-badge">
                <Sparkles size={14} /> Admissions Open {schoolInfo.admissionYear}
              </span>
              <h3 className="modal-title">Inquire & Book Campus Tour</h3>
              <p className="modal-sub">
                Connect with our Admissions Office for fee schedules, seat availability, and guided campus visit.
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
                    placeholder="e.g. Rajiv Sharma"
                    value={formData.parentName}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group-row">
                <div className="form-field">
                  <label htmlFor="phone">Phone Number *</label>
                  <div className="phone-input-wrap">
                    <span className="country-code">+91</span>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="98765 43210"
                      pattern="[0-9]{10}"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="studentClass">Seeking Admission For *</label>
                  <select
                    id="studentClass"
                    name="studentClass"
                    value={formData.studentClass}
                    onChange={handleChange}
                  >
                    <option value="Class IV - V (Junior School)">Class IV - V (Junior School)</option>
                    <option value="Class VI - VIII (Middle School)">Class VI - VIII (Middle School)</option>
                    <option value="Class IX">Class IX</option>
                    <option value="Class X">Class X</option>
                    <option value="Class XI (Science / Comm / Arts)">Class XI (Science / Comm / Arts)</option>
                    <option value="Class XII">Class XII</option>
                  </select>
                </div>
              </div>

              <div className="form-group-row">
                <div className="form-field">
                  <label htmlFor="boardingType">Boarding Preference</label>
                  <select
                    id="boardingType"
                    name="boardingType"
                    value={formData.boardingType}
                    onChange={handleChange}
                  >
                    <option value="Full Residential Boarding">Full Residential Boarding</option>
                    <option value="Weekly Boarding">Weekly Boarding</option>
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="state">City / State of Residence</label>
                  <input
                    id="state"
                    name="state"
                    type="text"
                    placeholder="e.g. New Delhi / Dehradun"
                    value={formData.state}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary btn-submit-enquiry"
              >
                {isSubmitting ? (
                  <span>Submitting Inquiry...</span>
                ) : (
                  <>
                    <span>Submit Admission Inquiry</span>
                    <Send size={16} />
                  </>
                )}
              </button>

              <p className="form-security-note">
                🔒 Your details are confidential. Direct callback from the Dean of Admissions.
              </p>
            </form>
          </div>
        ) : (
          /* Submission Success State */
          <div className="modal-success-view">
            <div className="success-icon-wrap">
              <CheckCircle size={44} className="check-success" />
            </div>
            <h3 className="success-title">Inquiry Received!</h3>
            <p className="success-ref">
              Reference ID: <strong>{refNumber}</strong>
            </p>
            <p className="success-text">
              Thank you, <strong>{formData.parentName}</strong>. Our Admissions Counselor will contact you
              at <strong>{formData.phone}</strong> within 24 working hours with fee structures and campus visit slots.
            </p>

            <div className="success-actions-box">
              <a
                href="#download-brochure"
                onClick={(e) => {
                  e.preventDefault();
                  alert("TIS 2025-26 Information Brochure download initiated.");
                }}
                className="btn btn-primary"
              >
                <Download size={16} />
                <span>Download Prospectus (PDF)</span>
              </a>

              <a href={`tel:${schoolInfo.phonePrimary}`} className="btn btn-secondary">
                <Phone size={16} />
                <span>Direct Helpline: {schoolInfo.phonePrimary}</span>
              </a>
            </div>

            <button onClick={handleClose} className="btn btn-outline btn-close-modal" type="button">
              Done & Return to Homepage
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
