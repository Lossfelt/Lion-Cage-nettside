// Reusable UI components for Lion Cage website

// Navigation component
function createNavigation() {
  const nav = document.createElement('nav');
  nav.className = 'navbar';
  nav.id = 'navbar';

  nav.innerHTML = `
    <div class="container nav-container">
      <div class="nav-logo">
        <a href="/index.html">
          <img src="/images/lion-cage-logo-no-background.png" alt="Lion Cage" class="logo-image">
        </a>
      </div>

      <button class="mobile-menu-toggle" id="mobile-menu-toggle" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div class="nav-menu" id="nav-menu">
        <ul class="nav-links">
          <li><a href="/index.html" data-i18n="nav.home">Hjem</a></li>
          <li><a href="/pages/about.html" data-i18n="nav.about">Om Oss</a></li>
          <li><a href="/pages/articles.html" data-i18n="nav.articles">Artikler</a></li>
          <li><a href="/pages/projects.html" data-i18n="nav.projects">Prosjekter</a></li>
          <li><a href="/pages/services.html" data-i18n="nav.services">Tjenester</a></li>
          <li><a href="/pages/faq.html" data-i18n="nav.faq">FAQ</a></li>
          <li><a href="/pages/partners.html" data-i18n="nav.partners">Samarbeidspartnere</a></li>
          <li><a href="/pages/contact.html" data-i18n="nav.contact">Kontakt</a></li>
        </ul>
        <button class="language-toggle" id="language-toggle">NO</button>
      </div>
    </div>
  `;

  return nav;
}

// Footer component
function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';

  footer.innerHTML = `
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <img src="/images/lion-cage-logo-no-background.png" alt="Lion Cage" class="footer-logo">
          <p data-i18n="home.hero_subtitle">Sikkerhet gjennom åpenhet</p>
        </div>

        <div class="footer-section">
          <h4 data-i18n="nav.home">Hjem</h4>
          <ul class="footer-links">
            <li><a href="/pages/about.html" data-i18n="nav.about">Om Oss</a></li>
            <li><a href="/pages/projects.html" data-i18n="nav.projects">Prosjekter</a></li>
            <li><a href="/pages/articles.html" data-i18n="nav.articles">Artikler</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4 data-i18n="nav.services">Tjenester</h4>
          <ul class="footer-links">
            <li><a href="/pages/services.html" data-i18n="nav.services">Våre Tjenester</a></li>
            <li><a href="/pages/faq.html" data-i18n="nav.faq">FAQ</a></li>
            <li><a href="/pages/contact.html" data-i18n="nav.contact">Kontakt</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4 data-i18n="footer.follow_us">Følg oss</h4>
          <div class="social-links">
            <a href="https://www.linkedin.com/pulse/project-lion-cage-part-1-tor-indst%C3%B8y" aria-label="LinkedIn">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" aria-label="GitHub">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p data-i18n="footer.copyright">&copy; 2025 Lion Cage prosjektet. Alle rettigheter reservert.</p>
      </div>
    </div>
  `;

  return footer;
}

// Initialize navigation and footer
function initComponents() {
  // Add navigation
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) {
    navPlaceholder.replaceWith(createNavigation());
  } else {
    document.body.insertBefore(createNavigation(), document.body.firstChild);
  }

  // Add footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    footerPlaceholder.replaceWith(createFooter());
  } else {
    document.body.appendChild(createFooter());
  }

  // Setup mobile menu toggle
  setupMobileMenu();

  // Highlight active page
  highlightActivePage();
}

// Mobile menu functionality
function setupMobileMenu() {
  const toggle = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('nav-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('active');
      toggle.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!toggle.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('active');
        toggle.classList.remove('active');
      }
    });
  }
}

// Highlight active page in navigation
function highlightActivePage() {
  const currentPage = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage ||
        (currentPage === '/' && link.getAttribute('href') === '/index.html')) {
      link.classList.add('active');
    }
  });
}

// Smooth scroll for anchor links
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}

// Navbar scroll effect
function setupNavbarScroll() {
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  });
}

// Initialize all components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initComponents();
  setupSmoothScroll();
  setupNavbarScroll();
});
