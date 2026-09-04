'use strict';

(function () {
    if (window.location.hostname === 'music.youtube.com') return;

    const { pathname, search } = window.location;
    window.location.replace(`https://piped.video${pathname}${search}`);
})();
