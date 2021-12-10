const initizilizationSlider = () => {
  if (flkty !== 'undefined') {
    const viewport = document.querySelector('.flickity-viewport')
    viewport.style.height = `${450}px`
  } else {
    return
  }
}

const elem = document.querySelector('.main-carousel');
  const flkty = new Flickity( '.main-carousel', {
    pageDots: false,
    groupCells: 3,
    prevNextButtons: false
  });
  
initizilizationSlider()

const arrow = {
  right: document.querySelector('.offer-arrow-right'),
  left: document.querySelector('.offer-arrow-left')
}

arrow.right.addEventListener('click', function() {
    flkty.next();
});

arrow.left.addEventListener('click', function() {
    flkty.previous();
});