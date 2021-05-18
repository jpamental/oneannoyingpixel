window.onload = function(){
	pixelSet();
  fontSet();
}
window.onresize = function(){
	//pixelSet();
}

function pixelSet() {

  let pixelPositionTop = getComputedStyle(document.documentElement).getPropertyValue('--px-top');
  let pixelPositionLeft = getComputedStyle(document.documentElement).getPropertyValue('--px-left');
  
  let newPixelPositionTopValue = Math.floor(Math.random() * 100);
  let newPixelPositionLeftValue = Math.floor(Math.random() * 100);

  let newPixelPositionTop = newPixelPositionTopValue + 'vh';
  let newPixelPositionLeft = newPixelPositionLeftValue + 'vh';

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
