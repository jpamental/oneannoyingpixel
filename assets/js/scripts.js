window.onload = function(){
	pixelSet();
  fontSet();
}
window.onresize = function(){
	//pixelSet();
}

var pixel_finder = document.getElementById('pixelfinder');
var focus_track = 0;

pixel_finder.addEventListener('click', function(e) {
	e.preventDefault();
  let pixel = document.getElementById('the_pixel');
	if (focus_track == 1) {
    pixel.blur();
    focus_track = 0;
  } else {
    pixel.focus();
    focus_track = 1;
  }
});

function pixelSet() {

  let pixelPositionTop = getComputedStyle(document.documentElement).getPropertyValue('--px-top');
  let pixelPositionLeft = getComputedStyle(document.documentElement).getPropertyValue('--px-left');
  
  let newPixelPositionTopValue = Math.floor(Math.random() * 100);
  let newPixelPositionLeftValue = Math.floor(Math.random() * 100);

  let newPixelPositionTop = newPixelPositionTopValue + 'vh';
  let newPixelPositionLeft = newPixelPositionLeftValue + 'vw';

  document.documentElement.style.setProperty(`--px-top`, newPixelPositionTop);
  document.documentElement.style.setProperty(`--px-left`, newPixelPositionLeft);
}


function fontSet() {

  let h1SOFT = getComputedStyle(document.documentElement).getPropertyValue('--h1-SOFT');
  let h1WONK = getComputedStyle(document.documentElement).getPropertyValue('--h1-WONK');
  
  let newH1SOFT = Math.floor(Math.random() * 100);
  let newH1WONK = Math.random();

  document.documentElement.style.setProperty(`--h1-SOFT`, newH1SOFT);
  document.documentElement.style.setProperty(`--h1-WONK`, newH1WONK);
}
