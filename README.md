# Vanilla/Plain JS Home Automation UI

## Description

A static web application of home automation simulation consisting of UI components built with plain JavaScripts and
room images composited with Adobe Photoshop and Adobe Illustrator.

## Demo

### [Live Demo](https://vanillajs-home-automation-wantinghsieh.netlify.app/)

![demo.gif](./img/demo.gif)

![ScreenShot.png](./img/ScreenShot.png)

## Features

- **button switches**:
  - turning on and off environment light
  - opening and closing the curtains
- **color picker wheel**: chang the light temperature
- **user card**: showing the house owner's information

## External Libraries and Tools

- [Adobe Photoshop](https://www.adobe.com/products/photoshop.html): for creating, mirroring, and editing open and closed curtain images and the room images with multiple  layers
- [Adobe Illustrator](https://www.adobe.com/products/illustrator.html): for creating the SVG light mask
- [Bootstrap](https://getbootstrap.com/): for quickly designing a responsive webpage
- [Color Picker Wheel](https://github.com/web-padawan/vanilla-colorful): for changing the SVG light mask color
- [To change any SVGs color](https://stackoverflow.com/questions/22252472/how-to-change-the-color-of-an-svg-element): for changing the color of an SVG image with a HEX color code

## Setup

The application serves as a static website that doesn't require running any server-side code.

The application has been tested on Google Chrome, Mozilla Firefox, and Safari for macOS.

## Implementation

### Workflow

First, I categorized the number of UI components that needed to be implemented along with their events. Some UI components, such as the user card, are conveniently packaged as an encapsulated module, while others like switches, color picker wheel, and the room images are easier to manipulate their interaction within the same script.

Second, instead of only allowing users to choose a small number of color swatches, assigning any color as their choice would be more user-friendly and straightforward. Therefore, a color pick wheel would suit users to control the light temperature, just like painting with a graphics editor.

Next, to simulate the final result of home automation, I composited a real-world room image with a curtain image in Adobe Photoshop. I created a black translucent SVG mask so that the color picker wheel can manipulate the mask hue by changing the value of its CSS `filter` attribute.

Finally, I arranged the UI components with [Bootstrap](https://getbootstrap.com/) and hosted the static website on [Netlify](https://www.netlify.com/).
