'use strict';

(function() {
    const currentUrl = window.location.href;

    // Verifica se a URL corresponde a um artigo da Wikipedia
    const wikipediaRegex = /^https?:\/\/([a-z]{2,3})\.wikipedia\.org\/wiki\/([^#?]+)/;
    const match = currentUrl.match(wikipediaRegex);
    if (!match) return;

    const lang = match[1];
    const article = match[2];

    // Verifica tipo de conteúdo com HEAD
    fetch(currentUrl, { method: 'HEAD' })
        .then(response => {
            const contentType = response.headers.get('Content-Type');
            if (contentType && contentType.includes('text/html')) {
                const newUrl = `https://www.wikiwand.com/${lang}/articles/${encodeURIComponent(article)}`;
                window.location.replace(newUrl);
            }
        })
        .catch(console.error);
})();
