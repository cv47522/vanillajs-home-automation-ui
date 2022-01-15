import { Color, Solver, hexToRgb } from './components/svgLightColorPicker.js';

const hexPicker = document.querySelector('hex-color-picker');
const hexInput = document.querySelector('hex-input');
const colorPicker = document.getElementById('color-picker');
const lightMask = document.getElementById('light-mask');
const switchLight = document.getElementById('switch-light');
const switchLightLabel = document.getElementById("switch-light-label");

const changeSvgLightColor = (hexInput) => {
  const rgb = hexToRgb(hexInput);
    if (rgb.length !== 3) {
      alert('Invalid format!');
      return;
    }

    const color = new Color(rgb[0], rgb[1], rgb[2]);
    const solver = new Solver(color);
    const result = solver.solve();

    lightMask.style.filter = result.filter;
    console.log(result.filter);
};

// default light color
changeSvgLightColor('#000000');

/* Control Light */
let lightOn = false;
switchLight.addEventListener('change', (event) => {
  lightOn = !lightOn;

  if(lightOn) {
    colorPicker.style.display = 'block';
    switchLightLabel.innerText = 'ON';
    hexPicker.setAttribute('color', '#FFFFFF');
  } else {
    colorPicker.style.display = 'none';
    switchLightLabel.innerText = 'OFF';
    hexPicker.setAttribute('color', '#000000');
  }
});

hexPicker.addEventListener('color-changed', (event) => {
  hexInput.color = event.detail.value;
  changeSvgLightColor(hexPicker.color);
  console.log(hexPicker.color);
});

hexInput.addEventListener('color-changed', (event) => {
  hexPicker.color = event.detail.value;
  changeSvgLightColor(hexPicker.color);
});