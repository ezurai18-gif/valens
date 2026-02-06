// script.js - Handles button clicks for navigation
document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');

    if (yesBtn) {
        yesBtn.addEventListener('click', function() {
            window.location.href = 'yes.html';  // Redirect to Yes page
        });
    }

    if (noBtn) {
        noBtn.addEventListener('click', function() {
            window.location.href = 'no.html';  // Redirect to No page
        });
    }
});