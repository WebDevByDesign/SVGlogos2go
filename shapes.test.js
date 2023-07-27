//const { generateSvg } = require('./index');

// test('generateSvg should return the correct SVG string for a circle shape', () => {
//   const testData = {
//     shapeChoice: 'Circle',
//     shapeColor: 'blue'
//   };

//   const expectedSvg = '<circle cx="50" cy="50" r="40" fill="blue" />';
//   const resultSvg = generateSvg(testData);

//   expect(resultSvg).toBe(expectedSvg);
// });
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');