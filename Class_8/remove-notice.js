// There is a site maintenance notice being displayed on our site.  Remove the notice after 5 seconds (we'll assume the user should have had a chance to read by that point).

const siteNotice = document.getElementById('maintenance-notice');

setTimeout(function() {
    siteNotice.remove();
    },
    5000
);