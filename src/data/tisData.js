/**
 * Centralized authentic brand data for Tula's International School (TIS)
 * Source verified from https://tis.edu.in/
 */

export const schoolInfo = {
  name: "Tula's International School",
  shortName: "TIS Dehradun",
  tagline: "The Modern Gurukul for Holistic Education",
  established: 2012,
  founderTrust: "Rishabh Educational Trust",
  affiliation: "CBSE Affiliated Co-Educational Residential School (Class IV to XII)",
  phonePrimary: "+91-9837983791",
  phoneLandline: "0135-2699444",
  email: "info@tis.edu.in",
  admissionEmail: "admissions@tis.edu.in",
  address: "Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun - 248011 (Uttarakhand), India",
  googleMapsUrl: "https://maps.app.goo.gl/maBF8syXueQkw31E6",
  admissionYear: "2025–26",
};

export const keyMetrics = [
  { value: "22", unit: "Acres", label: "Pollution-Free Campus", desc: "Foothills of Shivalik Himalayas" },
  { value: "16+", unit: "Sports", label: "Olympic & Modern Sports", desc: "With certified master trainers" },
  { value: "6:1", unit: "Ratio", label: "Student-Teacher Ratio", desc: "Unmatched personalized mentorship" },
  { value: "100%", unit: "Pass Rate", label: "CBSE Board Distinction", desc: "Top tier university admits" },
  { value: "24*7", unit: "Care", label: "Medical & Pastoral Care", desc: "Resident doctors & nurses" },
  { value: "#1", unit: "Ranked", label: "Boarding School Dehradun", desc: "Ranked by Education Today" },
];

export const rankingsData = [
  {
    rank: "#1",
    badge: "In Dehradun",
    title: "Best Co-Ed Boarding School",
    source: "Education Today Survey",
  },
  {
    rank: "#1",
    badge: "In North India",
    title: "Top Residential Institution",
    source: "Outlook Magazine Ranking",
  },
  {
    rank: "#2",
    badge: "In Uttarakhand",
    title: "Holistic Education & Infrastructure",
    source: "Education Today Excellence",
  },
  {
    rank: "#4",
    badge: "All-India Rank",
    title: "Premier Co-Ed Boarding School",
    source: "National School Merit Board",
  },
];

export const sportsList = [
  {
    id: "horse-riding",
    name: "Horse Riding Academy",
    category: "Equestrian",
    desc: "Dedicated riding arena with trained thoroughbreds, professional show-jumping instructors, and safety gear.",
    tag: "Olympic Discipline",
    image: "/images/equestrian.jpg",
    specs: ["Dedicated paddock", "Certified trainers", "Dressage & Jumping"],
  },
  {
    id: "archery",
    name: "Olympic Archery",
    category: "Precision Sports",
    desc: "High-spec recurve and compound bow training facility with regular state and national medal-winning scholars.",
    tag: "National Champions",
    image: "/images/archery.jpg",
    specs: ["Outdoor 70m range", "Indoor target facility", "National coaching"],
  },
  {
    id: "shooting",
    name: "10m & 25m Shooting Range",
    category: "Precision Sports",
    desc: "Electronic target shooting setups frequented and lauded by legendary shooters including Prakashi & Chandro Tomar.",
    tag: "Dadi Chandro Legacy",
    image: "/images/campus-hero.jpg",
    specs: ["Electronic target sensors", "Air rifle & pistol", "State-level tournament host"],
  },
  {
    id: "swimming",
    name: "All-Weather Swimming Pool",
    category: "Aquatics",
    desc: "Temperature-regulated semi-Olympic pool with dedicated coaches and round-the-clock certified lifeguards.",
    tag: "Semi-Olympic",
    image: "/images/campus-hero.jpg",
    specs: ["Heated winter pool", "Lane training", "Certified lifeguards"],
  },
  {
    id: "lawn-tennis",
    name: "ITF Synthetic Tennis Courts",
    category: "Racquet Sports",
    desc: "Multi-court international surface with high-performance lighting for evening practice and inter-school matches.",
    tag: "ITF Standard",
    image: "/images/campus-hero.jpg",
    specs: ["Synthetic court surfaces", "Floodlight facility", "Coached drills"],
  },
  {
    id: "football-cricket",
    name: "FIFA Grass Turf & Cricket Pitch",
    category: "Field Sports",
    desc: "Lush Himalayan green athletic fields with automated sprinklers, bowling machines, and full-size pavilion.",
    tag: "Full Size Grounds",
    image: "/images/campus-hero.jpg",
    specs: ["Automated turf grounds", "Turf & cement cricket nets", "Inter-school leagues"],
  },
];

export const gurukulPillars = [
  {
    title: "Mind (Academics & STEM)",
    subtitle: "Intellectual Rigor",
    description: "CBSE curriculum infused with practical STEM laboratories, AI & robotics clubs, astronomy observatory, and critical inquiry.",
    highlights: ["Smart digital classrooms", "6:1 student-teacher ratio", "Integrated entrance coaching for JEE / NEET / SAT"],
  },
  {
    title: "Body (Fitness & Athletics)",
    subtitle: "Physical Mastery",
    description: "Daily athletic discipline with 16+ sports disciplines ensuring endurance, team spirit, sportsmanship, and mental resilience.",
    highlights: ["16+ Olympic & modern sports", "Daily morning yoga & pranayama", "Certified sports nutritionists"],
  },
  {
    title: "Character (Ethos & Leadership)",
    subtitle: "The Gurukul Values",
    description: "Fostering empathy, respect, and independence in a safe residential community where lifelong friendships and ethics take root.",
    highlights: ["Pastoral house system", "Community service initiatives", "Global MUN & debate conferences"],
  },
];

export const dailyRoutine = [
  { time: "06:00 AM", title: "Morning Rise & Himalayan Yoga", detail: "Pranayama, mindfulness, and gentle conditioning in fresh mountain air." },
  { time: "07:30 AM", title: "Farm-to-Table Breakfast", detail: "Organic, hygienically prepared wholesome breakfast tailored for active young minds." },
  { time: "08:30 AM", title: "Academic Blocks & Experiential Learning", detail: "Interactive CBSE syllabus classes, smart board lessons, and collaborative inquiry." },
  { time: "01:15 PM", title: "Gurukul Community Lunch & Mindful Break", detail: "Multi-cuisine nutritious lunch followed by reading and quiet reflection." },
  { time: "02:30 PM", title: "STEM Labs, Astronomy & Fine Arts", detail: "Robotics experimentation, pottery, theatre, Indian classical & western music." },
  { time: "04:30 PM", title: "Sports Foundation (16+ Disciplines)", detail: "Dedicated training under professional coaches in equestrian, archery, football, etc." },
  { time: "07:00 PM", title: "Evening Prep & Faculty Mentorship", detail: "Supervised self-study with resident teachers available for 1-on-1 doubt clearing." },
  { time: "08:30 PM", title: "Dinner & House Bonding", detail: "Relaxing meal, housemaster check-ins, and peer camaraderie." },
  { time: "09:45 PM", title: "Lights Out & Peaceful Rest", detail: "Clean, air-conditioned, secure dormitories ensuring restorative sleep." },
];

export const dignitaries = [
  {
    name: "Sakshi Malik",
    title: "Olympic Bronze Medalist, Wrestling",
    honors: "Rajiv Gandhi Khel Ratna & Padma Shri Awardee",
    quote: "The athletic facilities and spirited youngsters at Tula's reflect true sporting culture.",
  },
  {
    name: "Shooter Dadis (Chandro & Prakashi Tomar)",
    title: "National Shooting Champions & Inspirations",
    honors: "Inspiration behind Bollywood Biopic 'Saand Ki Aankh'",
    quote: "Tula's 10m shooting range matches national standards, raising fearless champion marksmen.",
  },
  {
    name: "Vishesh Bhriguvanshi",
    title: "Captain, Indian National Basketball Team",
    honors: "Arjuna Awardee & Asian Beach Games Gold Medalist",
    quote: "A school that places physical education at par with academics builds true champions for life.",
  },
  {
    name: "Abhishek Verma",
    title: "Arjuna Awardee & World Archery Champion",
    honors: "Asian Games Gold Medalist & World Rank #6",
    quote: "The archery setup and dedication of the coaches at TIS will produce future Olympians.",
  },
];

export const testimonials = [
  {
    name: "Col. Rajesh & Sunita Sharma",
    role: "Parents of Class X Boarder",
    city: "New Delhi",
    content: "Moving our son from a day school in Delhi to Tula's International School was a transformative step. His posture, self-reliance, and focus on academics have improved beyond our expectations. The 6:1 ratio is genuinely practiced.",
    rating: 5,
  },
  {
    name: "Dr. Ananya Mukherjee",
    role: "Parent of Class VIII Boarder",
    city: "Kolkata",
    content: "The pastoral care and pastoral warmth at TIS are extraordinary. As a working mother, knowing my daughter is in a safe, pollution-free 22-acre campus learning horse riding and Vedic values gives me complete peace of mind.",
    rating: 5,
  },
  {
    name: "Devansh Singhania",
    role: "TIS Alumnus (Now at IIT Bombay)",
    city: "Batch of 2023",
    content: "TIS wasn't just my school; it was my second home. The teachers were mentors who sat with us during evening prep. The discipline I learned on the football field carries me through competitive engineering today.",
    rating: 5,
  },
];

export const admissionSteps = [
  {
    step: "01",
    title: "Online Inquiry & Registration",
    desc: "Fill the quick admission form to receive the comprehensive school brochure and fee schedule.",
  },
  {
    step: "02",
    title: "Counselor Interaction & Virtual Tour",
    desc: "Schedule a personalized 1-on-1 session with our Dean of Admissions or book an on-campus tour.",
  },
  {
    step: "03",
    title: "Holistic Student Assessment",
    desc: "A friendly aptitude and personality dialogue to understand your child's innate potential and passions.",
  },
  {
    step: "04",
    title: "Offer & Gurukul Welcome",
    desc: "Completion of enrollment formalities and pastoral orientation before joining the TIS family.",
  },
];

export const faqList = [
  {
    question: "What makes Tula's International School different from other boarding schools in Dehradun?",
    answer: "TIS combines the ancient ethos of the Gurukul system with 21st-century modern infrastructure. Highlights include a 22-acre pollution-free campus, an unmatched 6:1 student-teacher ratio, 16+ Olympic and modern sports with professional coaches, and personalized pastoral care.",
  },
  {
    question: "Which board is TIS affiliated with and what classes are offered?",
    answer: "Tula's International School is affiliated with the Central Board of Secondary Education (CBSE), New Delhi. We admit both boys and girls from Class IV to Class XII with specialized Science, Commerce, and Humanities streams in senior secondary.",
  },
  {
    question: "What are the boarding and pastoral care arrangements?",
    answer: "Students reside in modern, temperature-controlled boarding houses segregated by gender and age. Dedicated resident housemasters, pastoral mentors, and round-the-clock 24x7 medical staff ensure each student feels safe, supported, and cared for.",
  },
  {
    question: "How is the quality of food and nutrition maintained?",
    answer: "TIS features a hygienic, centralized dining hall serving 100% vegetarian, balanced, multi-cuisine meals planned by certified nutritionists. Pure dairy and fresh produce are sourced to fuel active children throughout the day.",
  },
  {
    question: "Can parents visit or speak with their children?",
    answer: "Yes. We maintain structured weekly video/phone calling slots and encourage parents to visit on designated visiting weekends and school celebrations. Parents also receive regular academic and pastoral progress updates via our parent portal.",
  },
  {
    question: "What is the admission procedure for the 2025–26 academic session?",
    answer: "Admissions are currently open for Classes IV through XII. The process involves submitting the online inquiry form, participating in an interaction with the Admissions Dean, and completing registration documents.",
  },
];
