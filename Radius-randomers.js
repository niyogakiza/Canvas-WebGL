const canvasSketch = require('canvas-sketch');
const { lerp } = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');
/**
 * canvas-sketch offers all dimensions just with click on canvas in the browser then type cmd + s will save
 * the png image to downloads that is ready to be printed in the size that you have set up
 * @type {{dimensions: number[]}}
 */
const settings = {
    dimensions: [ 2048, 2048 ]
};

/**
 *
 * @returns {Function}
 */
const sketch = () => {
    const createGrid = () => {
        const points = [];
        const count = 40;
        for (let x = 0; x < count; x++){
            for (let y = 0; y < count; y++) {
                const u = count <= 1 ? 0.5 : x /(count - 1);
                const v = count <= 1 ? 0.5 : y / (count - 1);
                points.push({
                    // radius: random.value() * 0.01,
                    // radius: Math.abs(random.gaussian() * 0.01),
                    // radius: Math.max(0, random.gaussian() * 0.01),
                    radius: Math.abs(0.001 + random.gaussian() * 0.01),
                    position: [ u, v ]
                })
            }
        }
        return points
    };

    random.setSeed(512);
    const points = createGrid().filter(() => random.value() > 0.5);
    const margin = 400;
   // console.log(points);
  return ({ context, width, height }) => {
      context.fillStyle = 'white';
      context.fillRect(0, 0, width, height);

      points.forEach((data) => {
          const { position, radius } = data;
          const [ u, v] = position;
          const x = lerp(margin, width - margin, u);
          const y = lerp(margin, height - margin, v);

          context.beginPath();
          context.arc(x, y,  radius * width, 0, Math.PI * 2, false);
          context.strokeStyle = 'orange';
          context.lineWidth = 20;
          context.fillStyle = 'purple';
          context.fill()
          // context.stroke();
      })

  };
};

canvasSketch(sketch, settings);
