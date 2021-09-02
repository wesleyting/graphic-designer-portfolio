const body = document.body;
const btn = document.querySelector('.hamburger');

btn.addEventListener('click', function(){
    body.classList.toggle('show');
});



let magicGrid = new MagicGrid({
    container: '.container',
    animate: true,
    gutter: 30,
    static: true,
    useMin: true
  });
  
  magicGrid.listen();