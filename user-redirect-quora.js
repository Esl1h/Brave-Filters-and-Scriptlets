(() => {
  "use strict";

  function redirectQuoraLinks() {
    document.querySelectorAll("a[href]").forEach(function (link) {
      try {
        const url = new URL(link.href);
        if (url.hostname === "www.quora.com" || url.hostname === "quora.com") {
          url.hostname = "quetre.iket.me";
          link.href = url.toString();
        }
      } catch (e) {
        // Ignore invalid URLs
      }
    });
  }
  redirectQuoraLinks();

  const observer = new MutationObserver(redirectQuoraLinks);
  observer.observe(document.body, { childList: true, subtree: true });
})();
