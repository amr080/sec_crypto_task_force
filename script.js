document.addEventListener('DOMContentLoaded', function () {
    // Select all anchor tags with href attributes that start with "/" 
    const links = document.querySelectorAll('a[href^="/"]');

    // Loop through each link and prepend the base URL
    links.forEach(link => {
        const currentHref = link.getAttribute('href');
        link.setAttribute('href', 'https://www.sec.gov' + currentHref);
    });

    console.log('Base URLs added to all relative links');
});