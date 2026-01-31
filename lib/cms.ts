export type NavItem = { id: string; label: string; href: string };

export const site = {
  orgShort: "IDECN",
  orgName: "Indonesia Education & Cultural Network",
  tagline:
    "Bridging nations through education, cultural preservation, and professional networks—built with premium execution and measurable outcomes.",
  email: "hello@idecn.org",
  proposalHref: "/IDECN-Proposal.pdf",
  featuredReportHref: "/IDECN-Event-Report.pdf",
  social: {
    instagram: "#",
    linkedin: "#",
    x: "#",
  },
};

export const navItems: NavItem[] = [
  { id: "about", label: "About", href: "#about" },
  { id: "programs", label: "Programs", href: "#programs" },
  { id: "portfolio", label: "Portfolio Event", href: "#portfolio" },
  { id: "partners", label: "Partners", href: "#partners" },
  { id: "get-involved", label: "Get Involved", href: "#get-involved" },
];

export const hero = {
  chips: ["Nonprofit (U.S.-based)", "Established 2024", "Indonesia ↔ U.S."],
  heading: "Indonesia Education & Cultural Network",
  subtitle:
    "IDECN connects Indonesia and the U.S. through education, cultural exchange, and professional collaboration—designed for real-world execution, not just ideas.",
  ctas: {
    primary: { label: "Get involved", href: "#get-involved" },
    proposal: { label: "Download proposal", href: site.proposalHref },
    portfolio: { label: "View portfolio event", href: "#portfolio" },
  },
};

export const about = {
  title: "Who we are",
  lead:
    "IDECN is a nonprofit network built to create meaningful bridges between Indonesia and the United States—through education pathways, cultural programming, and high-trust partnerships.",
  purpose:
    "We build a collaborative ecosystem that supports students, educators, and professionals across borders and sectors—turning connection into outcomes.",
  audience:
    "Students, educators, cultural communities, and mission-aligned partners in Indonesia and the U.S.",
  atAGlance: {
    title: "At a glance",
    items: [
      { k: "Focus", v: "Education, Culture, Tech, Culinary" },
      { k: "Operating", v: "Since 2024 (U.S.-based nonprofit)" },
      { k: "Contact", v: site.email },
    ],
    cta: { label: "Talk to us", href: `mailto:${site.email}` },
  },
};

export const programs = {
  title: "Our Core Programs",
  cards: [
    {
      title: "Cultural Exchange",
      icon: "globe",
      bullets: ["Annual cultural festivals", "Community showcases", "Language & heritage workshops"],
    },
    {
      title: "Academic Excellence",
      icon: "book",
      bullets: ["Mentorship & advising", "Scholarship enablement", "Research & collaboration support"],
    },
    {
      title: "Professional Network",
      icon: "users",
      bullets: ["Industry networking", "Career development", "Internships & placements support"],
    },
    {
      title: "Digital Innovation",
      icon: "layout",
      bullets: ["Tech workshops", "Digital literacy", "Project incubation & showcases"],
    },
  ],
};

export const portfolio = {
  eyebrow: "Proof of execution",
  title: "Featured Event",
  featured: {
    name: "Indonesia Culinary Day on the Creek",
    date: "Aug 24, 2024",
    location: "Washington, D.C.",
    summary:
      "A high-attendance cultural celebration showcasing Indonesian culinary heritage and community partnerships—built with measurable outcomes and repeatable playbooks.",
    highlights: ["5,000+ visitors", "20+ vendors", "Cross-community collaboration", "Media & community reach"],
    // Optional image background (layout mirip App.jsx)
    imageSrc:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=2000",
    imageAlt: "Culinary event crowd and food",
    ctaDownload: { label: "Download Event Report", href: site.featuredReportHref },
    ctaSecondary: { label: "Get involved", href: "#get-involved" },
  },
};

export const partners = {
  title: "Our Partners",
  cards: [
    {
      title: "Sponsors & Donors",
      desc: "Corporate and individual contributors supporting scalable impact.",
      icon: "heart",
      accent: "red" as const,
    },
    {
      title: "Universities & Schools",
      desc: "Institutions enabling exchange, mentorship, and joint initiatives.",
      icon: "book",
      accent: "blue" as const,
    },
    {
      title: "Community Organizations",
      desc: "Local and national nonprofits collaborating for real outcomes.",
      icon: "users",
      accent: "slate" as const,
    },
  ],
};

export const getInvolved = {
  title: "Get involved",
  cards: [
    { title: "Sponsor", subtitle: "Financial support", icon: "award" },
    { title: "Partner", subtitle: "Institutional collaboration", icon: "globe" },
    { title: "Volunteer", subtitle: "Individual support", icon: "users" },
  ],
  banner: {
    title: "Ready to make an impact?",
    desc:
      "Join IDECN and help build a stronger bridge between Indonesia and the United States—through education, culture, and trusted partnerships.",
    primary: { label: "Contact", href: `mailto:${site.email}` },
    secondary: { label: "Send Email", href: `mailto:${site.email}` },
  },
};

export const footer = {
  blurb:
    "Indonesia Education & Cultural Network (IDECN) is a nonprofit organization dedicated to cultural and educational exchange.",
  quickLinks: [
    { label: "About Us", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Partners", href: "#partners" },
  ],
  legal: ["Privacy Policy", "Terms of Service"],
};
