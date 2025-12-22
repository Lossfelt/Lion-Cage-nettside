// Markdown parser for article viewer

async function loadArticle() {
  // Get article filename from URL
  const urlParams = new URLSearchParams(window.location.search);
  const articleFile = urlParams.get('article');

  if (!articleFile) {
    displayError('Ingen artikkel spesifisert');
    return;
  }

  try {
    // Fetch markdown file
    const response = await fetch(`/content/articles/${articleFile}`);

    if (!response.ok) {
      throw new Error('Artikkel ikke funnet');
    }

    const markdown = await response.text();

    // Parse frontmatter and content
    const { metadata, content } = parseFrontmatter(markdown);

    // Update page metadata
    updatePageMetadata(metadata);

    // Convert markdown to HTML
    if (typeof marked !== 'undefined') {
      marked.setOptions({
        breaks: true,
        gfm: true
      });
      const html = marked.parse(content);
      document.getElementById('article-body').innerHTML = html;
    } else {
      // Fallback if marked.js is not loaded
      document.getElementById('article-body').innerHTML = `<pre>${content}</pre>`;
    }

  } catch (error) {
    console.error('Error loading article:', error);
    displayError('Kunne ikke laste artikkel');
  }
}

function parseFrontmatter(markdown) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = markdown.match(frontmatterRegex);

  if (!match) {
    return {
      metadata: {},
      content: markdown
    };
  }

  const frontmatterText = match[1];
  const content = match[2];

  const metadata = {};
  frontmatterText.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length > 0) {
      metadata[key.trim()] = valueParts.join(':').trim();
    }
  });

  return { metadata, content };
}

function updatePageMetadata(metadata) {
  // Update title
  if (metadata.title) {
    document.getElementById('article-title').textContent = metadata.title;
    document.title = `${metadata.title} - Lion Cage`;
  }

  // Update date
  if (metadata.date) {
    const date = new Date(metadata.date);
    const lang = localStorage.getItem('language') || 'no';

    let formattedDate;
    if (lang === 'no') {
      const months = ['Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni',
                     'Juli', 'August', 'September', 'Oktober', 'November', 'Desember'];
      formattedDate = `${date.getDate()}. ${months[date.getMonth()]} ${date.getFullYear()}`;
    } else {
      formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    }

    document.getElementById('article-date').textContent = formattedDate;
  }

  // Update author
  if (metadata.author) {
    document.getElementById('article-author').textContent = `Av: ${metadata.author}`;
  }

  // Update category
  if (metadata.category) {
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

    const lang = localStorage.getItem('language') || 'no';
    const translatedCategory = categoryTranslations[lang][metadata.category.toLowerCase()] || metadata.category;
    document.getElementById('article-category').textContent = translatedCategory;
  }

  // Update description meta tag
  if (metadata.description) {
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
      descMeta.setAttribute('content', metadata.description);
    }
  }
}

function displayError(message) {
  const articleBody = document.getElementById('article-body');
  articleBody.innerHTML = `
    <div class="error-message">
      <h2>Feil</h2>
      <p>${message}</p>
      <a href="/pages/press.html" class="btn btn-primary">Tilbake til presseomtale</a>
    </div>
  `;
}

// Load article when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Only load article on article-viewer page
  if (window.location.pathname.includes('article-viewer')) {
    loadArticle();
  }
});
