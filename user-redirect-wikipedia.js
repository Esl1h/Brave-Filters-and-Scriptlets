'use strict';

(function() {
    const currentUrl = window.location.href;

    // Se a URL contém "oldformat=true", não redireciona
    if (currentUrl.includes('oldformat=true')) return;

    // Verifica se a URL corresponde a um artigo da Wikipedia
    const wikipediaRegex = /^https?:\/\/([a-z]{2,3})\.wikipedia\.org\/wiki\/([^#?]+)/;
    const match = currentUrl.match(wikipediaRegex);
    if (!match) return;

    const lang = match[1];
    const article = match[2]; // Já vem encoded da URL

    // Verifica tipo de conteúdo com HEAD
    fetch(currentUrl, { method: 'HEAD' })
        .then(response => {
            const contentType = response.headers.get('Content-Type');
            if (contentType && contentType.includes('text/html')) {
                // Remove o encodeURIComponent para evitar double encoding
                const newUrl = `https://www.wikiwand.com/${lang}/articles/${article}`;
                window.location.replace(newUrl);
            }
        })
        .catch(console.error);
})();
