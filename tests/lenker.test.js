// Sjekker at alle lokale lenker og ressurser i HTML-filene peker på filer som finnes.
// Ingen avhengigheter: kjør med `npm test` (node --test).
const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');

const rot = path.resolve(__dirname, '..');
const hoppOver = new Set(['node_modules', '.git', 'tests']);

function htmlFiler(mappe) {
  return fs.readdirSync(mappe, { withFileTypes: true }).flatMap((e) => {
    const sti = path.join(mappe, e.name);
    if (e.isDirectory()) return hoppOver.has(e.name) ? [] : htmlFiler(sti);
    return e.name.endsWith('.html') ? [sti] : [];
  });
}

function lokaleMal(html) {
  const mal = [];
  for (const m of html.matchAll(/\b(?:href|src)\s*=\s*["']([^"']+)["']/gi)) {
    const verdi = m[1].trim();
    if (/^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(verdi)) continue; // http:, mailto:, data:, //cdn, #anker
    mal.push(verdi.split('#')[0].split('?')[0]);
  }
  return mal.filter(Boolean);
}

test('HTML-filer finnes', () => {
  assert.ok(htmlFiler(rot).length > 0, 'fant ingen .html-filer');
});

for (const fil of htmlFiler(rot)) {
  test(`lokale lenker og ressurser i ${path.relative(rot, fil)} finnes`, () => {
    const mangler = lokaleMal(fs.readFileSync(fil, 'utf8')).filter((mal) => {
      const sti = mal.startsWith('/') ? path.join(rot, mal) : path.resolve(path.dirname(fil), mal);
      if (fs.existsSync(sti) && fs.statSync(sti).isDirectory()) return !fs.existsSync(path.join(sti, 'index.html'));
      return !fs.existsSync(sti);
    });
    assert.deepStrictEqual(mangler, [], `mangler: ${mangler.join(', ')}`);
  });
}
