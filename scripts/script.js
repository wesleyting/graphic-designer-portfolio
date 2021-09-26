// Add function for hamburger to show overlay
const body = document.body;
const btn = document.querySelector('.hamburger');

btn.addEventListener('click', function(){
    body.classList.toggle('show');
});


// Masonry Grid
let magicGrid = new MagicGrid({
    container: '.masonry-grid',
    animate: true,
    gutter: 30,
    static: true,
    useMin: true
  });
  
  magicGrid.listen();


// Remove "show" class from body on desktop size
function checkWidth() {
    if ($(window).width() < 950) {
        $('body').removeClass('show');
    }
}

$(window).resize(checkWidth);