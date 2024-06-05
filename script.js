const degrees = 30;
const element = document.querySelector('.icon');

const onPointerMove = (pointer) => {
  const icon = element.getBoundingClientRect();
  const halfSize = icon.width / 2;
  
  const xDist = minMaxValue(-(icon.x - pointer.x + halfSize), -halfSize, halfSize);
  const yDist = minMaxValue(icon.y - pointer.y + halfSize, -halfSize, halfSize);
    
  const x = Math.round(xDist / (halfSize / 100)) / 100;
  const y = Math.round(yDist / (halfSize / 100)) / 100;
  
  element.style.transform = `rotateX(${y * degrees}deg) rotateY(${x * degrees}deg)`;
};

const minMaxValue = (value, min, max) => Math.min(Math.max(value, min), max);

window.addEventListener('pointermove', onPointerMove);