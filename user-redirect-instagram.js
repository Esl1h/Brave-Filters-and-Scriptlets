(function () {
    'use strict';

    // Redirect to imginn.com with the given path
    const redirectToImginn = (path) => {
        window.location.href = `https://imginn.com${path}`;
    };

    // Handle redirection logic based on the current URL
    const handleRedirection = () => {
        const { pathname, searchParams, hostname } = new URL(window.location.href);

        // Check if it's Instagram's login page and has the 'next' parameter
        if (pathname.startsWith('/accounts/login/') && searchParams.has('next')) {
            redirectToImginn(searchParams.get('next'));
        } else {
            // For non-login Instagram pages, swap the domain to imginn.com
            redirectToImginn(pathname + window.location.search);
        }
    };

    // Execute the redirection logic
    handleRedirection();
})();