let ButtonShow = document.querySelector('.our-made-works__button-more');
let cards = document.querySelectorAll('.our-made-works-tab');


ButtonShow.addEventListener('click', function() {
  for (let card of cards) {
   card.style.display = 'flex'
  }

  ButtonShow.style.display = 'none'
})

