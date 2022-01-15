import { Color, Solver, hexToRgb } from './components/svgLightColorPicker.js';

const hexPicker = document.querySelector('hex-color-picker');
const hexInput = document.querySelector('hex-input');
const lightMask = document.getElementById("light-mask");

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
changeSvgLightColor(hexPicker.color);

hexPicker.addEventListener('color-changed', (event) => {
  hexInput.color = event.detail.value;
  changeSvgLightColor(hexPicker.color);
  console.log(hexPicker.color);
});

hexInput.addEventListener('color-changed', (event) => {
  hexPicker.color = event.detail.value;
  changeSvgLightColor(hexPicker.color);
});