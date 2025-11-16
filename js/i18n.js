// Internationalization (i18n) module for Lion Cage website

class I18n {
  constructor() {
    this.currentLanguage = localStorage.getItem('language') || 'no';
    this.translations = {};
    this.init();
  }

  async init() {
    await this.loadTranslations();
    this.updateLanguage(this.currentLanguage);
    this.setupLanguageToggle();
  }

  async loadTranslations() {
    try {
      const response = await fetch('/content/translations.json');
      this.translations = await response.json();
    } catch (error) {
      console.error('Failed to load translations:', error);
    }
  }

  updateLanguage(lang) {
    this.currentLanguage = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    this.translatePage();
    this.updateLanguageToggle();
  }

  translatePage() {
    // Translate all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');

      // Store original Norwegian text on first run
      if (!element.hasAttribute('data-original-text')) {
        element.setAttribute('data-original-text', element.textContent);
      }

      const translation = this.getTranslation(key);
      if (translation) {
        element.textContent = translation;
      } else if (this.currentLanguage === 'no') {
        // Restore original Norwegian text
        element.textContent = element.getAttribute('data-original-text');
      }
    });

    // Translate all elements with data-i18n-placeholder attribute
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
      const key = element.getAttribute('data-i18n-placeholder');

      // Store original Norwegian placeholder on first run
      if (!element.hasAttribute('data-original-placeholder')) {
        element.setAttribute('data-original-placeholder', element.placeholder);
      }

      const translation = this.getTranslation(key);
      if (translation) {
        element.placeholder = translation;
      } else if (this.currentLanguage === 'no') {
        // Restore original Norwegian placeholder
        element.placeholder = element.getAttribute('data-original-placeholder');
      }
    });
  }

  getTranslation(key) {
    // If Norwegian is selected, use the HTML content (no translation needed)
    if (this.currentLanguage === 'no') {
      return null; // Return null to keep original Norwegian HTML text
    }

    // For English, check page-level translations first
    if (window.pageTranslations && window.pageTranslations[key]) {
      return window.pageTranslations[key];
    }

    // Fall back to global translations.json
    const keys = key.split('.');
    let translation = this.translations[this.currentLanguage];

    for (const k of keys) {
      if (translation && translation[k]) {
        translation = translation[k];
      } else {
        return null; // Translation not found, keep original text
      }
    }

    return translation;
  }

  setupLanguageToggle() {
    const toggleButton = document.getElementById('language-toggle');
    if (toggleButton) {
      toggleButton.addEventListener('click', () => {
        const newLang = this.currentLanguage === 'no' ? 'en' : 'no';
        this.updateLanguage(newLang);
      });
    }
  }

  updateLanguageToggle() {
    const toggleButton = document.getElementById('language-toggle');
    if (toggleButton) {
      toggleButton.textContent = this.currentLanguage === 'no' ? 'EN' : 'NO';
    }
  }

  getCurrentLanguage() {
    return this.currentLanguage;
  }

  t(key) {
    return this.getTranslation(key);
  }
}

// Initialize i18n when DOM is ready
let i18n;
document.addEventListener('DOMContentLoaded', () => {
  i18n = new I18n();
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = I18n;
}
