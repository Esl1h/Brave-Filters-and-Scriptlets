'use strict';

(function () {
  const { hostname, pathname } = window.location;

  // check Wikipedia
  if (!hostname.endsWith('wikipedia.org')) return;

  // split domain and language path
  const lang = hostname.split('.')[0];
  const article = pathname.split('/').pop();

  // Redirect to wikiwand
  if (pathname.startsWith('/wiki/') && article) {
    const newUrl = `https://www.wikiwand.com/${lang}/articles/${encodeURIComponent(article)}`;
    window.location.replace(newUrl);
  }
})();
