// Add function for hamburger to show overlay
const body = document.body;
const btn = document.querySelector('.hamburger');

btn.addEventListener('click', function(){
    body.classList.toggle('show');
});

// Remove "show" class from body on desktop size
function checkWidth() {
    if ($(window).width() < 950) {
        $('body').removeClass('show');
    }
}

$(window).resize(checkWidth);