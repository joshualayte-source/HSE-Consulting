/*
  Edit this file first when customizing the website.

  Photo replacement:
  - heroImage.src is the main field credibility image.
  - aboutImage.src is the professional profile/headshot image.
  - fieldProof.images are supporting real-world field photos.
  - Real site photos will outperform generic stock images for HSE managers and superintendents.

  Resume / capability statement:
  - resumeHref points to the contact form by default.
  - Replace capabilityHref with an actual PDF path after adding the file to /assets.

  Contact:
  - Replace placeholder phone, email, LinkedIn, and location before publishing.

  Credentials:
  - Only display credentials that are accurate. Remove anything not actually held.
  - Optional credentials to add only if confirmed: NCSO, First Aid, CSTS, WHMIS,
    Fall Protection, Confined Space, H2S Alive, COR Auditor, Incident Investigation
    training, Leadership / Supervisor training.

  Form integration:
  - The contact form is frontend-ready. Connect it to Formspree, Netlify Forms,
    EmailJS, or a custom backend inside app.js where the form submit handler is noted.
*/

window.siteContent = {
  business: {
    name: "Layte HSE Consulting",
    descriptor: "Construction & Industrial Safety",
    contractorName: "Allan Layte",
    location: "Edmonton, Alberta",
    serviceArea: "Western Canada / Alberta / British Columbia / Saskatchewan",
    phone: "587-341-6006",
    email: "allanlayte@hotmail.com",
    linkedin: "https://linkedin.com/in/allanlayte",
    linkedinDisplay: "linkedin.com/in/allanlayte",
    resumeHref: "#contact",
    capabilityHref: "#",
  },

  navigation: [
    { label: "Services", href: "#services" },
    { label: "Experience", href: "#experience" },
    { label: "Process", href: "#process" },
    { label: "Credentials", href: "#credentials" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    eyebrow: "Independent HSE Contractor",
    headline: "Support for High-Risk Construction and Industrial Services",
    subheadline:
      "Independent HSE and construction safety support for contractors, shutdowns, mining, utilities, and industrial projects across Western Canada.",
    credibility:
      "Field-focused safety coordination, contractor compliance, inspections, orientations, incident support, and COR/audit readiness.",
    primaryCta: "Request Resume & Availability",
    secondaryCta: "View Services",
    imageLabel: "Replace with real field photo",
    imageNote: "Hardhat, hi-vis, active industrial or construction environment",
    heroImage: {
      src: "assets/allan-industrial-site.jpeg",
      alt: "I am wearing PPE on an industrial construction site",
    },
    trustBadges: [
      "Construction Safety",
      "Industrial / Mining",
      "Shutdown Support",
      "COR / Audit Support",
      "Contractor Compliance",
    ],
  },

  credibilityStrip: [
    { value: "17+", label: "Years progressive safety and leadership experience" },
    { value: "P.Eng.", label: "Professional engineering credibility for complex work" },
    { value: "CRSP / NCSO", label: "Registered safety and construction safety qualifications" },
    { value: "2.5M", label: "Exposure hours recognized accident-free work" },
    { value: "Western Canada", label: "Industrial, mining, utility, and construction support" },
  ],

  companyExperience: {
    eyebrow: "Project Experience",
    text: "Experience connected to major contractors, industrial operators, and construction organizations.",
    companies: [
      "Kiewit",
      "Supreme Steel Group",
      "Fluor",
      "URS",
      "Astaldi Canada",
      "Laird",
      "Stuart Olson Industrial Inc.",
      "Jacobs",
    ],
  },

  services: [
    {
      icon: "investigation",
      title: "Incident Investigation Support",
      text:
        "Support incident reporting, root-cause review, witness statements, corrective actions, and prevention-focused follow-up that helps improve culture from the ground up.",
    },
    {
      icon: "site",
      title: "Site Safety Coordination",
      text:
        "Daily field safety support for active construction, industrial, mining, utility, and shutdown environments.",
    },
    {
      icon: "contractor",
      title: "Contractor Safety Management",
      text:
        "Support subcontractor compliance, documentation review, field expectations, and corrective-action follow-up.",
    },
    {
      icon: "talk",
      title: "Orientations & Toolbox Talks",
      text:
        "Deliver clear, practical safety communication that workers and supervisors can actually use.",
    },
    {
      icon: "inspection",
      title: "Field Inspections & Hazard Assessments",
      text:
        "Inspect work areas, identify hazards, document deficiencies, and support practical corrective actions.",
    },
    {
      icon: "planning",
      title: "Safe Work Planning",
      text:
        "Review FLHAs, JSAs, JHAs, permits, procedures, and high-risk task planning before work begins.",
    },
    {
      icon: "audit",
      title: "COR / Audit Readiness Support",
      text:
        "Help organize documentation, close gaps, and support readiness for COR, client, or internal safety audits.",
    },
    {
      icon: "shutdown",
      title: "Shutdown & Turnaround Coverage",
      text:
        "Short-term or project-based safety coverage for compressed schedules, heavy contractor volume, and high-risk scopes.",
    },
  ],

  riskExperience: {
    headline: "Built for High-Risk Work Environments",
    intro:
      "High-risk projects require safety support that understands the work, the hazards, the schedule pressure, and how each scope connects back to productive, controlled execution.",
    centerLabel: "Productivity and Safety Experience",
    items: [
      "Confined space",
      "Working at heights",
      "Hot work",
      "Lockout / energy isolation",
      "Mobile equipment",
      "Lifting and rigging",
      "Excavation",
      "Electrical and utility work",
      "Industrial maintenance",
      "Mining and heavy construction",
      "Multi-contractor sites",
      "Shutdowns and turnarounds",
    ],
  },

  fieldProof: {
    headline: "Real Site Presence Daily",
    intro:
      "I show up in the field to encourage safe work, build relationships, connect with crews, understand the scope, and help solve problems early. My role is not to be a safety cop, harass workers, or slow production down. It is to help everyone stay safe, productive, and aligned with the work that has to get done.",
    images: [
      {
        src: "assets/allan-hydro-field.jpeg",
        alt: "I am in PPE at a hydro or heavy civil workfront",
        title: "Hydro, civil, and remote work fronts",
        caption:
          "Field presence around high-consequence work where access, weather, crews, and changing conditions matter.",
      },
      {
        src: "assets/allan-industrial-selfie.jpeg",
        alt: "I am wearing a hardhat and high-visibility vest at an active industrial site",
        title: "Industrial contractor coordination",
        caption:
          "Real eyes on site and time spent in the field help me identify problems early, understand multiple work scopes, and support crews with practical solutions before issues grow.",
      },
    ],
  },

  process: [
    {
      step: "01",
      title: "Assess the Site",
      text:
        "Review active scopes, hazards, contractor requirements, documentation, and project expectations.",
    },
    {
      step: "02",
      title: "Align the Crews",
      text:
        "Communicate expectations clearly with workers, supervisors, subcontractors, and management.",
    },
    {
      step: "03",
      title: "Control the Risk",
      text:
        "Support inspections, safe work planning, permits, corrective actions, and high-risk task execution.",
    },
    {
      step: "04",
      title: "Document & Follow Through",
      text:
        "Track issues, close gaps, support investigations, and maintain clean records for client and regulatory confidence.",
    },
  ],

  about: {
    headline: "My Experience in Construction and Industrial Safety",
    imageLabel: "Replace with professional headshot",
    imageNote: "Clean workwear, PPE, or hardhat portrait",
    aboutImage: {
      src: "assets/allan-profile.jpeg",
      alt: "My professional headshot",
    },
    paragraphs: [
      "I bring practical health and safety experience across construction, industrial, mining, hydro, oil and gas, manufacturing, and heavy civil environments. My approach is built around field presence, clear communication, proper documentation, and the ability to work with crews and supervisors under real production pressure.",
      "I understand that effective safety is not about slowing work down. It is about identifying the real risks, setting clear expectations, supporting the crew, and making sure the work is executed properly.",
    ],
    highlights: [
      "Senior HSE leadership experience with major contractors and industrial operators",
      "Government OHS background in inspections, audits, compliance, investigations, and regulatory development",
      "Experience with union and non-union, multi-jurisdictional work across Canada and the United States",
      "Owner/client deliverables, gap analysis, safety management systems, and leading/lagging indicator programs",
    ],
  },

  credentials: {
    headline: "Credentials & Certifications",
    intro:
      "Credentials available upon request. Full resume and project history can be provided for qualified opportunities.",
    featured: [
      {
        mark: "MUN",
        label: "Education",
        title: "Memorial University",
        detail: "Newfoundland and Labrador, 1992-1999",
        note: "Bachelor of Civil Engineering",
      },
      {
        mark: "ENG",
        label: "Engineering",
        title: "Civil / Structural",
        detail: "Engineering foundation for construction, infrastructure, and high-risk work planning.",
        note: "P.Eng. background",
      },
      {
        mark: "HSE",
        label: "Safety",
        title: "CRSP / NCSO",
        detail: "Registered safety and construction safety qualifications supporting credible field leadership.",
        note: "Credentials available upon request",
      },
    ],
    badges: [
      "P.Eng.",
      "CRSP",
      "NCSO",
      "Bachelor of Civil Engineering",
      "Board of Canadian Registered Safety Professionals",
      "APEGA",
      "PEGNL",
      "CSA Z259 Fall Protection Standards Committee",
      "OHS Regulatory / Compliance Background",
      "Incident Investigation Experience",
      "Audit & Program Readiness",
      "Leadership & Supervisor Training Delivery",
    ],
  },

  industries: [
    {
      title: "Industrial Construction",
      text: "Field safety support for complex scopes, contractors, owners, and changing work fronts.",
    },
    {
      title: "Mining & Natural Resources",
      text: "Practical risk control for heavy equipment, remote work, and high-consequence hazards.",
    },
    {
      title: "Energy & Utilities",
      text: "Support for utility, energy, hydro, oil and gas, and infrastructure environments.",
    },
    {
      title: "Heavy Civil",
      text: "Safety coordination for earthworks, infrastructure, access, equipment, and public-interface risk.",
    },
    {
      title: "Commercial Construction",
      text: "Contractor oversight, orientations, inspections, documentation, and field follow-up.",
    },
    {
      title: "Shutdowns & Turnarounds",
      text: "Short-term safety coverage for compressed schedules and high contractor volume.",
    },
    {
      title: "Maintenance Projects",
      text: "Support for industrial maintenance scopes, permits, energy isolation, and work planning.",
    },
    {
      title: "Infrastructure Projects",
      text: "Safety support for utilities, transportation, civil work, and multi-stakeholder delivery.",
    },
  ],

  whyIndependent: {
    headline: "Why Bring in Independent Safety Support?",
    bullets: [
      "Add project-based safety capacity without permanent overhead",
      "Support peak manpower periods and shutdown schedules",
      "Strengthen contractor oversight and documentation",
      "Improve field communication between crews and management",
      "Close gaps before audits, incidents, or client reviews",
      "Bring experienced outside support to high-risk work fronts",
    ],
    closing:
      "When the site gets busy, safety coverage cannot become reactive. Independent HSE support helps keep risk visible, controlled, and documented.",
  },

  outsideWork: {
    headline: "Who Am I Outside of Work?",
    intro:
      "The same qualities that matter on a job site, accountability, judgment, service, and calm leadership, also show up in my community work.",
    items: [
      {
        title: "Treasurer / Board of Directors, BGC Leduc",
        text: "Governance, budgeting, accountability, and community leadership in a trusted board role.",
      },
      {
        title: "Past President, Parents Association",
        text: "Leadership, organization, meeting discipline, and follow-through with families and volunteers.",
      },
      {
        title: "Past Volunteer Firefighter, Long Lake",
        text: "Emergency response mindset, discipline, public safety focus, and composure under pressure.",
      },
      {
        title: "Past Director & Head Coach, Leduc Soccer Club",
        text: "Board-level community leadership, program support, mentoring, communication, and organizing teams around shared expectations.",
      },
    ],
  },

  testimonials: [
    {
      quote: "[Insert testimonial from a superintendent, project manager, or HSE lead.]",
      source: "[Name / Role / Company]",
    },
    {
      quote: "[Insert testimonial about field presence, communication, documentation, or contractor coordination.]",
      source: "[Name / Role / Company]",
    },
    {
      quote: "[Insert testimonial from a client or site leader after a shutdown, audit, or high-risk scope.]",
      source: "[Name / Role / Company]",
    },
  ],

  capability: {
    headline: "Need Safety Coverage for a Project, Shutdown, or High-Risk Scope?",
    text:
      "Request a resume, availability, certifications, or a quick call to discuss site safety support.",
    highlights: [
      "Services: site safety, contractor management, inspections, incident support, audit readiness",
      "Industries: construction, industrial, mining, energy, utilities, heavy civil, shutdowns",
      "Availability: project-based, shutdown, turnaround, and longer-term contract roles",
    ],
  },

  contact: {
    headline: "Request Availability",
    intro:
      "Share the project location, start date, and type of support needed. A resume, credentials, and project history can be provided for qualified opportunities.",
    supportTypes: [
      "Site safety coordination",
      "Shutdown / turnaround coverage",
      "Contractor safety management",
      "Audit / COR readiness",
      "Incident investigation support",
      "Safe work planning",
      "Other / unsure",
    ],
  },
};
