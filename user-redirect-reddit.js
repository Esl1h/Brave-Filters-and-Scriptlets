'use strict';

(function () {
    const { pathname, search } = window.location;
    window.location.replace(`https://safereddit.com${pathname}${search}`);
})();
