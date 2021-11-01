const brushRadius = 50;
const imageOpacity = 0.15;
const { width: imgWidth, height: imgHeight } = document.querySelector('#canvas-image');

window.setup = () => {
  createCanvas(imgWidth, imgHeight);
  fill(`rgba(0, 0, 0, ${1 - imageOpacity})`);
  rect(0, 0, width, height);
}

window.mouseMoved = () => {
  erase();
  strokeWeight(brushRadius);
  line(pmouseX, pmouseY, mouseX, mouseY);
  noErase();

  return false;
}