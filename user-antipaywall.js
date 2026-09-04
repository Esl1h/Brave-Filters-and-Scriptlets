'use strict';

(() => {
    const host = window.location.hostname;

    if (/crusoe\.com\.br$/.test(host)) {
        document.cookie = 'crs_subscriber=1';
        return;
    }

    function eraseCookie(name) {
        const domains = [host, host.replace(/^www\./, '')];
        domains.forEach((domain) => {
            document.cookie = `${name}=; domain=${domain}; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/`;
        });
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/`;
    }

    function eraseAllCookies() {
        document.cookie.split(';').forEach((cookie) => {
            const name = cookie.split('=')[0].trim();
            if (name) eraseCookie(name);
        });
    }

    function run() {
        if (/economist\.com$/.test(host)) {
            document.cookie = 'ec_limit=allow';
            return;
        }

        if (/folha\.uol\.com\.br$/.test(host)) {
            const originalFetch = window.fetch;
            window.fetch = function (resource, init) {
                if (typeof resource === 'string' && resource.includes('paywall.folha.uol.com.br/wall.json')) {
                    return Promise.resolve(new Response(JSON.stringify({ paywall: 'off', status: 'ok' }), {
                        status: 200,
                        headers: { 'Content-Type': 'application/json' },
                    }));
                }
                return originalFetch.apply(this, arguments);
            };
            return;
        }

        if (/estadao\.com\.br$/.test(host)) {
            Object.defineProperty(window, 'pwz', {
                configurable: true,
                writable: false,
                value: () => {},
            });
            return;
        }

        if (/abril\.com\.br$/.test(host)) {
            setTimeout(() => {
                document.body?.classList.remove('disabledByPaywall');
                document.querySelector('.piano-offer-overlay')?.remove();
                document.querySelector('#piano_offer')?.remove();
            }, 10000);
            return;
        }

        if (/correio24horas\.com\.br$/.test(host)) {
            const clean = () => {
                document.querySelectorAll('[class^="paywall"]').forEach((el) => el.remove());
                document.querySelectorAll('[class^="blocked"]').forEach((el) => el.removeAttribute('class'));
                document.querySelectorAll('[id^="paywall"]').forEach((el) => el.remove());
                const content = document.querySelector('.noticias-single__content__text');
                if (content) content.style.height = 'auto';
            };
            clean();
            setInterval(clean, 1000);
            return;
        }

        if (/nytimes\.com$/.test(host) || /diariopopular\.com\.br$/.test(host)) {
            eraseAllCookies();
            return;
        }

        if (/bloomberg\.com$/.test(host)) {
            localStorage.clear();
            sessionStorage.clear();
            return;
        }

        if (/diariodaregiao\.com\.br$/.test(host)) {
            const texto = document.querySelector('.noticia-texto');
            const bloqueio = document.querySelector('.conteudo > .row');
            if (texto) texto.style.display = 'block';
            if (bloqueio) bloqueio.style.display = 'none';
            return;
        }

        if (/dgabc\.com\.br$/.test(host)) {
            localStorage.emailNoticiaExclusiva = 'colaborador@dgabc.com.br';
            document.querySelectorAll('.NoticiaExclusivaNaoLogado, .NoticiaExclusivaLogadoSemPermissao').forEach((el) => {
                el.style.display = 'none';
            });
            document.querySelectorAll('.linhaSuperBanner, .footer, .NoticiaExclusivaLogado').forEach((el) => {
                el.style.display = '';
            });
            return;
        }

        if (/newsweek\.pl$/.test(host) || /forbes\.pl$/.test(host)) {
            document.querySelector('.contentPremium')?.classList.remove('contentPremium');
            return;
        }

        if (/observador\.pt$/.test(host)) {
            const clean = () => {
                document.querySelector('.piano-article-blocker')?.remove();
                const wrapper = document.querySelector('.article-body-wrapper');
                if (wrapper) wrapper.style.maxHeight = 'inherit';
                document.querySelector('.premium-article')?.classList.add('article-shown');
            };
            setInterval(clean, 5000);
            return;
        }

        if (/technologyreview\.com$/.test(host)) {
            document.querySelector('#template-container')?.remove();
            localStorage.clear();
            ['xbc', '_pcid', '_pcus', '__tbc', '__pvi', '_pctx'].forEach(eraseCookie);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', run);
    } else {
        run();
    }
})();
