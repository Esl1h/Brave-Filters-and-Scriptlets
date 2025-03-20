const url = new URL(location);
  
// Instagram's login page
if (url.pathname.startsWith('/accounts/login/') && url.searchParams.has('next')) {
    const next = url.searchParams.get('next');
    location = 'https://imginn.com' + next;
} else {
    // For non-login instagram pages, just swap the domain.
    url.hostname = 'imginn.com';
    location = url;
}