const content = window.siteContent;

const iconPaths = {
  site: '<path d="M4 20h16M6 20V8l6-4 6 4v12M9 20v-6h6v6M9 10h.01M15 10h.01" />',
  contractor: '<path d="M4 7h16M7 7v13M17 7v13M8 7l1-3h6l1 3M5 20h14M10 12h4M10 16h4" />',
  talk: '<path d="M4 6h16v9H8l-4 4V6ZM8 10h8M8 13h5" />',
  inspection: '<path d="M8 4h8l2 3v13H6V7l2-3ZM9 4v4h6V4M9 13l2 2 4-5M9 18h6" />',
  investigation: '<path d="M10 17a7 7 0 1 1 4.95-2.05L20 20M8 9h4M8 12h6M8 15h2" />',
  planning: '<path d="M4 5h16v14H4V5ZM8 3v4M16 3v4M4 9h16M8 13h3M8 16h6" />',
  audit: '<path d="M6 4h12v16H6V4ZM9 8h6M9 12h6M9 16h3M7 4l2-2h6l2 2" />',
  shutdown: '<path d="M12 3v6M7.8 5.1l4.2 4.2 4.2-4.2M5 12h14M7 21h10l2-9H5l2 9Z" />',
};

const riskNodePositions = [
  { x: 50, y: 8 },
  { x: 72, y: 13 },
  { x: 84, y: 28 },
  { x: 86, y: 50 },
  { x: 82, y: 72 },
  { x: 68, y: 87 },
  { x: 50, y: 92 },
  { x: 32, y: 87 },
  { x: 18, y: 72 },
  { x: 14, y: 50 },
  { x: 16, y: 28 },
  { x: 28, y: 13 },
];

function icon(name) {
  return `
    <svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      ${iconPaths[name] || iconPaths.site}
    </svg>
  `;
}

function esc(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" };
    return map[char];
  });
}

function Header() {
  const links = content.navigation
    .map((item) => `<a href="${item.href}">${item.label}</a>`)
    .join("");

  return `
    <header class="site-header">
      <nav class="nav-shell" aria-label="Main navigation">
        <a class="brand" href="#top" aria-label="${esc(content.business.name)} home">
          <span>${esc(content.business.name)}</span>
          <small>${esc(content.business.descriptor)}</small>
        </a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-menu">
          <span></span><span></span><span></span>
          <span class="sr-only">Toggle navigation</span>
        </button>
        <div class="nav-links" id="site-menu">
          ${links}
          <a class="button button-small" href="#contact">Request Availability</a>
        </div>
      </nav>
    </header>
  `;
}

function ImagePlaceholder({ image, label, note, modifier = "" }) {
  if (image.src) {
    return `
      <figure class="image-frame ${modifier}">
        <img src="${image.src}" alt="${esc(image.alt)}" loading="${modifier.includes("hero-image") ? "eager" : "lazy"}" />
      </figure>
    `;
  }

  return `
    <figure class="image-frame placeholder-frame ${modifier}" aria-label="${esc(image.alt)}">
      <div class="placeholder-grid"></div>
      <div class="placeholder-content">
        <span class="placeholder-kicker">Photo Placeholder</span>
        <strong>${esc(label)}</strong>
        <p>${esc(note)}</p>
      </div>
    </figure>
  `;
}

function Hero() {
  return `
    <section class="hero section-dark" id="top">
      <div class="section-inner hero-grid">
        <div class="hero-title-block">
          <p class="eyebrow">${esc(content.hero.eyebrow)}</p>
          <h1>${esc(content.hero.headline)}</h1>
        </div>
        ${ImagePlaceholder({
          image: content.hero.heroImage,
          label: content.hero.imageLabel,
          note: content.hero.imageNote,
          modifier: "hero-image",
        })}
        <div class="hero-detail-block">
          <p class="hero-subheadline">${esc(content.hero.subheadline)}</p>
          <p class="hero-credibility">${esc(content.hero.credibility)}</p>
          <div class="hero-actions">
            <a class="button" href="#contact">${esc(content.hero.primaryCta)}</a>
            <a class="button button-secondary" href="#services">${esc(content.hero.secondaryCta)}</a>
          </div>
          <div class="trust-badges" aria-label="Service highlights">
            ${content.hero.trustBadges.map((badge) => `<span>${esc(badge)}</span>`).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function CredibilityStrip() {
  return `
    <section class="cred-strip" aria-label="Credibility highlights">
      <div class="section-inner cred-grid">
        ${content.credibilityStrip
          .map(
            (item) => `
              <div class="cred-item">
                <strong>${esc(item.value)}</strong>
                <span>${esc(item.label)}</span>
              </div>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function CompanyExperience() {
  return `
    <section class="company-strip" aria-label="Companies and project experience">
      <div class="section-inner company-strip-inner">
        <div>
          <p class="eyebrow">${esc(content.companyExperience.eyebrow)}</p>
          <p>${esc(content.companyExperience.text)}</p>
        </div>
        <div class="company-wordmarks">
          ${content.companyExperience.companies
            .map((company) => `<span>${esc(company)}</span>`)
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function SectionHeading({ eyebrow, title, text, align = "" }) {
  return `
    <div class="section-heading ${align}">
      ${eyebrow ? `<p class="eyebrow">${esc(eyebrow)}</p>` : ""}
      <h2>${esc(title)}</h2>
      ${text ? `<p>${esc(text)}</p>` : ""}
    </div>
  `;
}

function Services() {
  return `
    <section class="section section-white" id="services">
      <div class="section-inner">
        ${SectionHeading({
          eyebrow: "Services",
          title: "Contract HSE & Construction Safety Services",
          text: "Practical safety support for real job sites, from daily coverage to short-term shutdown assignments.",
        })}
        <div class="service-grid">
          ${content.services
            .map(
              (service, index) => `
                <article class="card service-card ${index < 2 ? "service-card-priority" : ""}">
                  ${icon(service.icon)}
                  <h3>${esc(service.title)}</h3>
                  <p>${esc(service.text)}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function RiskExperience() {
  const riskItems = content.riskExperience.items;
  const ringPoints = [...riskNodePositions, riskNodePositions[0]]
    .map((point) => `${point.x},${point.y}`)
    .join(" ");
  const spokes = riskItems
    .map((_, index) => {
      const point = riskNodePositions[index % riskNodePositions.length];
      return `<line class="risk-spoke" x1="50" y1="50" x2="${point.x}" y2="${point.y}" />`;
    })
    .join("");

  return `
    <section class="section section-dark compact-dark" id="risk-experience">
      <div class="section-inner risk-experience-inner">
        <div class="risk-web-heading">
          <p class="eyebrow">High-Risk Work</p>
          <h2>${esc(content.riskExperience.headline)}</h2>
          <p>${esc(content.riskExperience.intro)}</p>
        </div>
        <div class="risk-web" aria-label="Interconnected high-risk work environments">
          <svg class="risk-web-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" focusable="false">
            <polyline class="risk-ring" points="${ringPoints}" />
            ${spokes}
          </svg>
          <div class="risk-web-center">${esc(content.riskExperience.centerLabel)}</div>
          <ul class="risk-web-nodes">
            ${riskItems
              .map((item, index) => {
                const point = riskNodePositions[index % riskNodePositions.length];
                return `
                  <li style="--x: ${point.x}%; --y: ${point.y}%;">
                    <span>${esc(item)}</span>
                  </li>
                `;
              })
              .join("")}
          </ul>
        </div>
      </div>
    </section>
  `;
}

function Process() {
  return `
    <section class="section section-light" id="process">
      <div class="section-inner">
        ${SectionHeading({
          eyebrow: "Process",
          title: "A Practical Safety Process",
          text: "Built for environments where production pressure is real and documentation matters.",
        })}
        <div class="process-grid">
          ${content.process
            .map(
              (step) => `
                <article class="process-card">
                  <span>${esc(step.step)}</span>
                  <h3>${esc(step.title)}</h3>
                  <p>${esc(step.text)}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function FieldProof() {
  return `
    <section class="section section-white" id="field-proof">
      <div class="section-inner">
        ${SectionHeading({
          eyebrow: "Field Proof",
          title: content.fieldProof.headline,
          text: content.fieldProof.intro,
        })}
        <div class="field-photo-grid">
          ${content.fieldProof.images
            .map(
              (photo) => `
                <figure class="field-photo-card">
                  <img src="${photo.src}" alt="${esc(photo.alt)}" loading="lazy" />
                  <figcaption>
                    <strong>${esc(photo.title)}</strong>
                    <span>${esc(photo.caption)}</span>
                  </figcaption>
                </figure>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function About() {
  return `
    <section class="section section-white" id="experience">
      <div class="section-inner about-grid">
        ${ImagePlaceholder({
          image: content.about.aboutImage,
          label: content.about.imageLabel,
          note: content.about.imageNote,
          modifier: "about-image",
        })}
        <div>
          <p class="eyebrow">Experience</p>
          <h2>${esc(content.about.headline)}</h2>
          ${content.about.paragraphs.map((paragraph) => `<p>${esc(paragraph)}</p>`).join("")}
          <ul class="check-list">
            ${content.about.highlights.map((item) => `<li>${esc(item)}</li>`).join("")}
          </ul>
        </div>
      </div>
    </section>
  `;
}

function Credentials() {
  return `
    <section class="section section-light" id="credentials">
      <div class="section-inner">
        <div class="credentials-layout">
          <div>
            <p class="eyebrow">Credentials</p>
            <h2>${esc(content.credentials.headline)}</h2>
            <p>${esc(content.credentials.intro)}</p>
          </div>
          <div class="badge-grid">
            <div class="credential-feature-grid">
              ${content.credentials.featured
                .map(
                  (item) => `
                    <article class="credential-feature-card">
                      <div class="credential-mark">${esc(item.mark)}</div>
                      <div>
                        <span>${esc(item.label)}</span>
                        <h3>${esc(item.title)}</h3>
                        <p>${esc(item.detail)}</p>
                        <small>${esc(item.note)}</small>
                      </div>
                    </article>
                  `
                )
                .join("")}
            </div>
            ${content.credentials.badges.map((badge) => `<span>${esc(badge)}</span>`).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function Industries() {
  return `
    <section class="section section-white" id="industries">
      <div class="section-inner">
        ${SectionHeading({
          eyebrow: "Industries",
          title: "Industries Supported",
          text: "Safety coverage for contractors, owners, and project teams that need field-ready judgment.",
        })}
        <div class="industry-grid">
          ${content.industries
            .map(
              (industry) => `
                <article class="industry-card">
                  <h3>${esc(industry.title)}</h3>
                  <p>${esc(industry.text)}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function WhyIndependent() {
  return `
    <section class="section section-dark">
      <div class="section-inner why-grid">
        <div>
          <p class="eyebrow">Project Capacity</p>
          <h2>${esc(content.whyIndependent.headline)}</h2>
          <p>${esc(content.whyIndependent.closing)}</p>
        </div>
        <ul class="check-list inverse">
          ${content.whyIndependent.bullets.map((bullet) => `<li>${esc(bullet)}</li>`).join("")}
        </ul>
      </div>
    </section>
  `;
}

function OutsideWork() {
  return `
    <section class="section section-light" id="outside-work">
      <div class="section-inner">
        ${SectionHeading({
          eyebrow: "Beyond the Site",
          title: content.outsideWork.headline,
          text: content.outsideWork.intro,
        })}
        <div class="outside-grid">
          ${content.outsideWork.items
            .map(
              (item) => `
                <article class="outside-card">
                  <h3>${esc(item.title)}</h3>
                  <p>${esc(item.text)}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function Testimonials() {
  return `
    <section class="section section-white">
      <div class="section-inner">
        ${SectionHeading({
          eyebrow: "References",
          title: "Construction & Industrial References",
          text: "Replace these placeholders with real testimonials or remove this section until references are approved.",
        })}
        <div class="testimonial-grid">
          ${content.testimonials
            .map(
              (item) => `
                <figure class="testimonial-card">
                  <blockquote>${esc(item.quote)}</blockquote>
                  <figcaption>${esc(item.source)}</figcaption>
                </figure>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function CapabilityCta() {
  return `
    <section class="section section-cta">
      <div class="section-inner cta-panel">
        <div>
          <p class="eyebrow">Capability Statement</p>
          <h2>${esc(content.capability.headline)}</h2>
          <p>${esc(content.capability.text)}</p>
          <ul>
            ${content.capability.highlights.map((item) => `<li>${esc(item)}</li>`).join("")}
          </ul>
        </div>
        <div class="cta-actions">
          <a class="button" href="${content.business.resumeHref}">Request Resume</a>
          <a class="button button-secondary-dark" href="#contact">Contact for Availability/Book an Interview</a>
          <a class="text-link" href="${content.business.capabilityHref}">Download Capability Statement</a>
        </div>
      </div>
    </section>
  `;
}

function Contact() {
  return `
    <section class="section section-white" id="contact">
      <div class="section-inner contact-grid">
        <div class="contact-copy">
          <p class="eyebrow">Contact</p>
          <h2>${esc(content.contact.headline)}</h2>
          <p>${esc(content.contact.intro)}</p>
          <dl class="contact-list">
            <div><dt>Name</dt><dd>${esc(content.business.contractorName)}</dd></div>
            <div><dt>Phone</dt><dd><a href="tel:${esc(content.business.phone)}">${esc(content.business.phone)}</a></dd></div>
            <div><dt>Email</dt><dd><a href="mailto:${esc(content.business.email)}">${esc(content.business.email)}</a></dd></div>
            <div><dt>Location</dt><dd>${esc(content.business.location)}</dd></div>
            <div><dt>Service area</dt><dd>${esc(content.business.serviceArea)}</dd></div>
            <div><dt>LinkedIn</dt><dd><a href="${esc(content.business.linkedin)}">${esc(content.business.linkedinDisplay || content.business.linkedin)}</a></dd></div>
            <div><dt>Availability</dt><dd>Project-based, shutdown, turnaround, and longer-term contract roles</dd></div>
          </dl>
        </div>

        <form class="contact-form" action="#" method="post">
          <div class="form-row">
            <label for="name">Name</label>
            <input id="name" name="name" type="text" autocomplete="name" required />
          </div>
          <div class="form-row">
            <label for="company">Company</label>
            <input id="company" name="company" type="text" autocomplete="organization" required />
          </div>
          <div class="form-grid">
            <div class="form-row">
              <label for="email">Email</label>
              <input id="email" name="email" type="email" autocomplete="email" required />
            </div>
            <div class="form-row">
              <label for="phone">Phone</label>
              <input id="phone" name="phone" type="tel" autocomplete="tel" />
            </div>
          </div>
          <div class="form-grid">
            <div class="form-row">
              <label for="project-location">Project location</label>
              <input id="project-location" name="project-location" type="text" />
            </div>
            <div class="form-row">
              <label for="start-date">Start date (leave blank if flexible)</label>
              <input id="start-date" name="start-date" type="date" />
              <label class="form-check" for="start-date-flexible">
                <input id="start-date-flexible" name="start-date-flexible" type="checkbox" value="Flexible or unknown" />
                <span>Leave blank / flexible start date</span>
              </label>
            </div>
          </div>
          <div class="form-row">
            <label for="support-type">Type of support needed</label>
            <select id="support-type" name="support-type">
              ${content.contact.supportTypes
                .map((type) => `<option value="${esc(type)}">${esc(type)}</option>`)
                .join("")}
            </select>
          </div>
          <div class="form-row">
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Briefly describe the scope, site, manpower, schedule, or coverage needed."></textarea>
          </div>
          <button class="button form-button" type="submit">Send Inquiry</button>
          <p class="form-note" aria-live="polite"></p>
        </form>
      </div>
    </section>
  `;
}

function Footer() {
  const year = new Date().getFullYear();

  return `
    <footer class="site-footer">
      <div class="section-inner footer-grid">
        <div>
          <a class="brand footer-brand" href="#top">
            <span>${esc(content.business.name)}</span>
            <small>Independent Construction & Industrial Safety Support</small>
          </a>
          <p>Available for project-based, shutdown, turnaround, and contract safety support.</p>
        </div>
        <div>
          <strong>Contact</strong>
          <p>${esc(content.business.phone)}<br />${esc(content.business.email)}</p>
        </div>
        <div>
          <strong>Service Area</strong>
          <p>${esc(content.business.serviceArea)}</p>
        </div>
      </div>
      <div class="section-inner footer-bottom">
        <span>&copy; ${year} ${esc(content.business.name)}. All rights reserved.</span>
      </div>
    </footer>
  `;
}

function App() {
  return `
    ${Header()}
    <main id="main">
      ${Hero()}
      ${CompanyExperience()}
      ${CredibilityStrip()}
      ${RiskExperience()}
      ${Services()}
      ${FieldProof()}
      ${Process()}
      ${About()}
      ${Credentials()}
      ${Industries()}
      ${WhyIndependent()}
      ${OutsideWork()}
      ${Testimonials()}
      ${CapabilityCta()}
      ${Contact()}
    </main>
    ${Footer()}
  `;
}

document.getElementById("site-root").innerHTML = App();

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  const expanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!expanded));
  navLinks.classList.toggle("is-open", !expanded);
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.setAttribute("aria-expanded", "false");
    navLinks.classList.remove("is-open");
  });
});

document.querySelector(".contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  /*
    Connect this handler to Formspree, Netlify Forms, EmailJS, or a custom backend.
    For now, it prevents a dead form submission and tells the visitor how to proceed.
  */
  const note = event.currentTarget.querySelector(".form-note");
  note.textContent =
    "Form backend is not connected yet. Replace this handler with your preferred inquiry service before publishing.";
});
