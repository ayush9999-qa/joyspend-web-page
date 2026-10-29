(() => {
  const links = document.querySelectorAll('nav [data-nav-link]');
  function highlightCurrentPage() {
    const path = window.location.pathname;
    let active = 'home';
    if (/^\/privacy(?:\/|$)/.test(path)) active = 'privacy';
    else if (/^\/delete-account(?:\/|$)/.test(path)) active = 'delete-account';
    else if (/^\/blog(?:\/|$)/.test(path)) active = 'blog';
    else if (/^\/mint-alternative(?:\.html)?(?:\/|$)/.test(path)) active = 'mint';
    else if (/^\/ynab-alternative(?:\.html)?(?:\/|$)/.test(path)) active = 'ynab';
    else if (path === '/' || path === '/index.html') {
      const section = window.location.hash.slice(1);
      if (['home', 'features', 'plans', 'download'].includes(section)) active = section;
    }
    links.forEach(link => {
      if (link.dataset.navLink === active) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  }
  highlightCurrentPage();
  window.addEventListener('hashchange', highlightCurrentPage);
})();
