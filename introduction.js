const canvasSketch = require('canvas-sketch');
/**
 * canvas-sketch offers all dimensions just with click on canvas in the browser then type cmd + s will save
 * the png image to downloads that is ready to be printed in the size that you have set up
 * @type {{dimensions: string, pixelsPerInch: number, units: string, orientation: string}}
 */
const settings = {
    // dimensions: [ 2048, 2048 ]
    // dimensions: 'POSTCARD'
    // dimensions: 'A4',
    // pixelsPerInch: 300
    dimensions: [ 16, 10 ], // in centimeters
    pixelsPerInch: 72,
    units: 'cm',
    orientation: 'landscape'
};

/**
 *
 * @returns {Function}
 */
const sketch = () => {
  return ({ context, width, height }) => {
      console.log(width, height); // 21 , 29.7 in cm
    context.fillStyle = 'orange';
    context.fillRect(0, 0, width, height);

    context.beginPath();
   // context.arc(width / 2, height / 2, 200, 0, Math.PI * 2, false);
    context.arc(width / 2, height / 2, width * 0.2, 0, Math.PI * 2, false);
    context.fillStyle = 'white';
    context.fill();
   // context.lineWidth = 10;
    context.lineWidth = width * 0.05;
    context.strokeStyle = 'red';
    context.stroke()
  };
};

canvasSketch(sketch, settings);
