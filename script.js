const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}

const storedTheme = localStorage.getItem('theme');
if (storedTheme) {
  applyTheme(storedTheme);
} else {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  themeToggle.textContent = prefersDark ? '☀️' : '🌙';
}

themeToggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') === 'dark'
    ? 'dark'
    : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem('theme', next);
});

const langToggle = document.getElementById('langToggle');

function applyLang(lang) {
  root.setAttribute('data-lang', lang);
  root.setAttribute('lang', lang);
  langToggle.textContent = lang === 'es' ? 'EN' : 'ES';
}

function readStoredLang() {
  try { return localStorage.getItem('lang'); } catch { return null; }
}

applyLang(readStoredLang() || (navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en'));

langToggle.addEventListener('click', () => {
  const next = root.getAttribute('data-lang') === 'es' ? 'en' : 'es';
  applyLang(next);
  try { localStorage.setItem('lang', next); } catch { /* storage unavailable */ }
});
