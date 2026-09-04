'use strict';

(function () {
    const { pathname, search } = window.location;
    window.location.replace(`https://tok.habedieeh.re${pathname}${search}`);
})();
