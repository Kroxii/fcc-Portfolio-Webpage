let currentLang = 'fr';
const langBtn = document.getElementById('lang-toggle');

langBtn.addEventListener('click', () => {
  currentLang = currentLang === 'fr' ? 'en' : 'fr';
  langBtn.textContent = currentLang === 'fr' ? 'EN' : 'FR';
  
  document.querySelectorAll('[data-lang-fr]').forEach(element => {
    const text = element.getAttribute(`data-lang-${currentLang}`);
    if (text) {
      element.textContent = text;
    }
  });

  document.documentElement.lang = currentLang;
});
