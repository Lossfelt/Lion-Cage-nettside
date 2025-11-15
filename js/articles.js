// Articles page functionality

// Sample articles data - in production, this would come from a CMS or database
const articlesData = [
  {
    id: 'article-1',
    title: 'Innovasjon i forskningsprosessen',
    excerpt: 'En dypere titt på hvordan vi integrerer nye metodikker i vår forskningspraksis.',
    category: 'research',
    date: '2025-01-15',
    author: 'Kari Karlsen',
    file: 'example-article-1.md'
  },
  {
    id: 'article-2',
    title: 'Fremtidens utviklingsverktøy',
    excerpt: 'Utforsking av nye teknologier og verktøy for moderne programvareutvikling.',
    category: 'development',
    date: '2025-01-10',
    author: 'Per Persen',
    file: 'example-article-2.md'
  },
  {
    id: 'article-3',
    title: 'Tverrfaglig samarbeid i praksis',
    excerpt: 'Hvordan vi kombinerer ulike fagområder for å løse komplekse problemer.',
    category: 'innovation',
    date: '2025-01-05',
    author: 'Navn Navnesen',
    file: 'example-article-3.md'
  }
];

const categoryTranslations = {
  no: {
    research: 'Forskning',
    development: 'Utvikling',
    innovation: 'Innovasjon'
  },
  en: {
    research: 'Research',
    development: 'Development',
    innovation: 'Innovation'
  }
};

function formatDate(dateString) {
  const date = new Date(dateString);
  const lang = localStorage.getItem('language') || 'no';

  if (lang === 'no') {
    const months = ['Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni',
                   'Juli', 'August', 'September', 'Oktober', 'November', 'Desember'];
    return `${date.getDate()}. ${months[date.getMonth()]} ${date.getFullYear()}`;
  } else {
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }
}

function getCategoryTranslation(category) {
  const lang = localStorage.getItem('language') || 'no';
  return categoryTranslations[lang][category] || category;
}

function createArticleCard(article) {
  const card = document.createElement('div');
  card.className = 'card article-card';
  card.setAttribute('data-category', article.category);

  card.innerHTML = `
    <div class="article-meta">
      <span class="article-date">${formatDate(article.date)}</span>
      <span class="article-tag">${getCategoryTranslation(article.category)}</span>
    </div>
    <h3>${article.title}</h3>
    <p>${article.excerpt}</p>
    <p class="article-author-small">Av: ${article.author}</p>
    <a href="/pages/article-viewer.html?article=${article.file}" class="read-more" data-i18n="articles.read_more">Les mer →</a>
  `;

  return card;
}

function renderArticles(articles = articlesData) {
  const grid = document.getElementById('articles-grid');
  const noResults = document.getElementById('no-results');

  if (!grid) return;

  grid.innerHTML = '';

  if (articles.length === 0) {
    noResults.style.display = 'block';
    return;
  }

  noResults.style.display = 'none';
  articles.forEach(article => {
    grid.appendChild(createArticleCard(article));
  });
}

function setupSearch() {
  const searchInput = document.getElementById('article-search');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');

    let filtered = articlesData;

    if (activeFilter !== 'all') {
      filtered = filtered.filter(article => article.category === activeFilter);
    }

    if (searchTerm) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchTerm) ||
        article.excerpt.toLowerCase().includes(searchTerm) ||
        article.author.toLowerCase().includes(searchTerm)
      );
    }

    renderArticles(filtered);
  });
}

function setupFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');
      const searchTerm = document.getElementById('article-search').value.toLowerCase();

      let filtered = articlesData;

      if (filter !== 'all') {
        filtered = filtered.filter(article => article.category === filter);
      }

      if (searchTerm) {
        filtered = filtered.filter(article =>
          article.title.toLowerCase().includes(searchTerm) ||
          article.excerpt.toLowerCase().includes(searchTerm) ||
          article.author.toLowerCase().includes(searchTerm)
        );
      }

      renderArticles(filtered);
    });
  });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  renderArticles();
  setupSearch();
  setupFilters();
});
