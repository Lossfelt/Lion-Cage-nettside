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
      const translation = this.getTranslation(key);
      if (translation) {
        element.textContent = translation;
      }
    });

    // Translate all elements with data-i18n-placeholder attribute
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
      const key = element.getAttribute('data-i18n-placeholder');
      const translation = this.getTranslation(key);
      if (translation) {
        element.placeholder = translation;
      }
    });
  }

  getTranslation(key) {
    const keys = key.split('.');
    let translation = this.translations[this.currentLanguage];

    for (const k of keys) {
      if (translation && translation[k]) {
        translation = translation[k];
      } else {
        console.warn(`Translation not found for key: ${key}`);
        return null;
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
