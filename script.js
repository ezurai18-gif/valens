
document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');

    if (yesBtn) {
        yesBtn.addEventListener('click', function() {
            window.location.href = 'yes.html';  
        });
    }

    if (noBtn) {
        noBtn.addEventListener('click', function() {
            window.location.href = 'no.html';  
        });
    }
});