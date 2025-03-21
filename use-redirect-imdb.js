(() => {
  "use strict";

  function redirectImdbLinks() {
    document.querySelectorAll("a[href]").forEach(function (link) {
      try {
        const url = new URL(link.href);
        if (url.hostname === "www.imdb.com" || url.hostname === "imdb.com") {
          url.hostname = "libremdb.iket.me";
          link.href = url.toString();
        }
      } catch (e) {
        // Ignore invalid URLs
      }
    });
  }

  // redirect
  redirectImdbLinks();

  // DOM and dinamic links
  const observer = new MutationObserver(redirectImdbLinks);
  observer.observe(document.body, { childList: true, subtree: true });
})();
