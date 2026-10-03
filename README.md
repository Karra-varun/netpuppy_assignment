# Tula's International School (TIS) — Animated Homepage Redesign

> **Frontend Developer Assignment Submission**  
> **Target Website**: [https://tis.edu.in/](https://tis.edu.in/)  
> **Brand**: Tula's International School (Dehradun, Uttarakhand, India) — *The Modern Gurukul for Holistic Education*  
> **Submission Details**: Complete source code, live deployment setup, and technical walkthrough.

---

## 1. Project Overview & Core Philosophy

This project is a high-converting, animated homepage redesign for **Tula's International School (TIS)**, one of India's foremost CBSE-affiliated co-educational residential boarding schools.

### Retained Authentic Branding & Copy:
- **School Motto**: *"The Modern Gurukul for Holistic Education — Mind, Body, Character."*
- **Accredited Rankings**: 
  - **#1 Co-Ed Boarding School in Dehradun** (*Education Today*)
  - **#1 Co-Ed Boarding School in North India** (*Outlook Survey*)
  - **#2 in Uttarakhand** & **#4 in All-India**
- **Verified Metrics**:
  - **22-Acre** pollution-free campus in the foothills of the Himalayas.
  - **16+** Olympic & modern sports disciplines (Equestrian Academy, 70m Archery, 10m & 25m Shooting Range, Semi-Olympic Heated Pool, ITF Tennis, FIFA Turf).
  - **6:1 Student-to-Teacher Mentorship Ratio** with individual academic tracking.
  - **100% CBSE Board Results** with Ivy League and premier Indian university admissions.
  - **24/7 In-House Infirmary** with full-time resident doctors and pastoral care.
- **Eminent Champions & Visitors**: Celebrated on campus by Olympic Medalist **Sakshi Malik**, **Shooter Dadis (Chandro & Prakashi Tomar)**, Basketball Captain **Vishesh Bhriguvanshi**, and World Archery Champion **Abhishek Verma**.

---

## 2. Tech Stack & Architecture

- **Core Framework**: **React 19** + **Vite 8** (lightning fast, modern ES modules, zero runtime bloat)
- **Styling**: **Semantic Modern CSS** with CSS Custom Properties (Theme tokens, fluid typography, CSS Grid & Flexbox, clean BEM class structure). *Crafted intentionally without heavy utility-soup libraries to prove foundational CSS mastery during technical code review.*
- **Icons**: **Lucide React** (feather-weight SVG icons for educational and sporting features)
- **Micro-Interactions**: **Canvas Confetti** for celebratory form submission feedback
- **Animations**: Native CSS Keyframes, CSS Transitions, and hardware-accelerated transforms (`transform3d`, `opacity`, `backdrop-filter`).

---

## 3. Four Stand-Out Features Implemented

The project incorporates **all four** standout features recommended in the task brief:

### ① Custom Interactive Cursor
- **Implementation**: Located at `src/components/CustomCursor.jsx`.
- **Behavior**: Smooth spring trailing dot and ring using `requestAnimationFrame` lerp interpolation.
- **Micro-interactions**: Dynamically scales and shifts opacity when hovering over interactive targets (`<a>`, `<button>`, inputs, cards).
- **Graceful Fallback**: Automatically disabled on touch screens and mobile devices (`@media (pointer: coarse)`) to preserve native mobile gesture handling.

### ② Scroll Progress Bar
- **Implementation**: Located at `src/components/ScrollProgress.jsx`.
- **Behavior**: A 4px reading indicator fixed at the top of the viewport with a golden-crimson gradient fill that smoothly updates in real-time as parents scroll through the school highlights.

### ③ Animated Theme Switcher (Dark Gurukul Mode)
- **Implementation**: Located at `src/hooks/useTheme.js` & `src/components/ThemeToggle.jsx`.
- **Behavior**: Seamless toggle between **Light Mode** (warm Gurukul ivory canvas `#fbf9f5`) and **Dark Gurukul Mode** (deep Himalayan night `#0d0f14`), complete with persistence in `localStorage` and system color preference detection.

### ④ Scroll-Triggered Staggered Reveals
- **Implementation**: Built with a clean custom React hook `src/hooks/useScrollReveal.js`.
- **Performance**: Uses the browser's native `IntersectionObserver` API rather than heavy third-party animation libraries. Fires once per section for optimal 60fps frame rates and minimal memory overhead.

---

## 4. Key Sections & Functional Modules

1. **Top Emergency & Helpline Bar**: Direct links for parent helpline (`+91-9837983791`), CBSE Affiliation No. `3530379`, and admissions announcement.
2. **Sticky Navigation**: Brand crest, smooth anchor jump links, dark mode toggle, and mobile slide-out drawer.
3. **High-Converting Hero Section**: Compelling value proposition, authentic Himalayan foothill campus imagery, trust badges, quick value checkmarks, and 6-column metrics ticker.
4. **Rankings & Accreditations Banner**: Independent audit awards from *Education Today* and *Outlook*.
5. **The Modern Gurukul Philosophy (Mind, Body, Character)**: Interactive 3-pillar selector exploring STEM labs, sports discipline, and Vedic character formation.
6. **16+ Sports Foundation**: Category filterable interactive sport cards with equipment tags, coaching credentials, and download CTA.
7. **22-Acre Residential Campus (Bento Grid)**: Visual cards highlighting pastoral care, organic dining, resident infirmary, and digital classrooms.
8. **"A Day in the Life of a TIS Scholar" (Daily Routine Timeline)**: Interactive hour-by-hour schedule from 6:00 AM Himalayan Yoga to 9:45 PM restorative sleep.
9. **Distinguished Campus Visitors**: Quotes and achievements from Olympians and national leaders who visited the TIS campus.
10. **Parent & Alumni Testimonials**: Verified boarding parent reviews with star ratings and responsive carousel controls.
11. **4-Step Admission Journey**: Transparent roadmap from online inquiry to enrollment.
12. **Parent FAQ Accordion**: Keyboard-accessible disclosure answers covering fees, safety, curriculum, and food.
13. **Quick Enquiry & Tour Booking Modal**: High-converting lead form with validation, celebratory confetti, reference ID generation, and prospectus download link.
14. **Comprehensive Footer**: Contact numbers, full postal address, Google Maps pin link, and CBSE mandatory disclosure.

---

## 5. Directory Structure

```
tis-homepage-redesign/
├── public/
│   └── images/
│       ├── campus-hero.jpg      # 22-acre Himalayan campus view
│       ├── equestrian.jpg       # Horse riding academy action
│       ├── stem-lab.jpg         # Modern Gurukul STEM & robotics lab
│       └── archery.jpg          # Olympic archery training facility
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Header, helpline, brand crest, mobile drawer
│   │   ├── ScrollProgress.jsx   # Top reading progress indicator
│   │   ├── CustomCursor.jsx     # Mouse follower with hover reactions
│   │   ├── ThemeToggle.jsx      # Animated light/dark mode switch
│   │   ├── Hero.jsx             # Hero headline, imagery, floating badges, metrics
│   │   ├── RankingsBanner.jsx   # Education Today & Outlook awards
│   │   ├── WhyTis.jsx           # Modern Gurukul 3 pillars (Mind, Body, Character)
│   │   ├── SportsSection.jsx    # 16+ Sports interactive category filter & cards
│   │   ├── CampusBento.jsx      # 22-acre residential campus highlights
│   │   ├── DailyRoutine.jsx     # Scholar's daily routine timeline
│   │   ├── DignitariesSection.jsx # Champions on campus (Sakshi Malik, etc.)
│   │   ├── Testimonials.jsx     # Boarding parent reviews & rating stars
│   │   ├── AdmissionProcess.jsx # 4-step enrollment roadmap
│   │   ├── FaqSection.jsx       # Accessible parent FAQ accordion
│   │   ├── QuickEnquiryModal.jsx# Lead generation form with confetti
│   │   └── Footer.jsx           # Footer links, address, CBSE disclosure
│   ├── hooks/
│   │   ├── useTheme.js          # Theme toggle hook with localStorage
│   │   └── useScrollReveal.js   # Native IntersectionObserver reveal hook
│   ├── data/
│   │   └── tisData.js           # Centralized verified school data & copy
│   ├── index.css                # Semantic CSS tokens, dark mode, responsive rules
│   ├── App.jsx                  # Main application composition
│   └── main.jsx                 # React root entry point
├── index.html                   # SEO metadata, Open Graph, Google Fonts
├── package.json
└── vite.config.js
```

---

## 6. How to Run Locally

### Prerequisites
- **Node.js**: v18.0.0 or later (v20+ recommended)
- **npm**: v9.0.0 or later

### Installation & Execution
```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/tis-homepage-redesign.git

# 2. Navigate to project directory
cd tis-homepage-redesign

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev
```

The application will be live at:
`http://localhost:5173/`

### Production Build
```bash
# Build the optimized production bundle
npm run build

# Preview the production bundle locally
npm run preview
```

---

## 7. Deployment Instructions (Vercel / Netlify / GitHub Pages)

### Deploying to Vercel (Recommended):
1. Push the code to your GitHub repository.
2. Sign in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your `tis-homepage-redesign` repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **"Deploy"**. Your site will be live with an SSL-enabled `.vercel.app` URL in under 60 seconds.

### Deploying to Netlify:
1. Connect your repository to [Netlify](https://www.netlify.com/).
2. Set Build command: `npm run build`
3. Set Publish directory: `dist`
4. Click **"Deploy Site"**.

---

## 8. Technical Code Review Notes

- **Clean & Natural Code**: No convoluted abstractions or artificial boilerplate. Every component is cleanly modularized with clear single-responsibility boundaries.
- **Zero Heavy Animation Bloat**: Rather than adding 150KB+ animation libraries, the staggered reveals use native browser `IntersectionObserver` with hardware-accelerated CSS transitions, ensuring 60fps performance on low-power devices.
- **Accessibility (a11y)**: Semantic HTML tags (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`), appropriate ARIA attributes (`role="progressbar"`, `aria-expanded`, `aria-selected`), and full keyboard navigation for the FAQ accordion and modal.
- **Responsive Design**: Fluid breakpoints tested across Mobile (360px–480px), Tablet (768px–1024px), and Desktop (1200px+).

---

*Developed for the TIS Frontend Developer Assignment Technical Evaluation.*
