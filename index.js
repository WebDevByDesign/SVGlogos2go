
const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes.js');

function generateSvg(res) {
  const shape = res.shapeChoice;
  const shapeColor = res.shapeColor;
  const logoText = res.logoText;
  const textColor = res.textColor;

  const centerX = 150;
  const centerY = 100;

  // Generate SVG based on the shape and other properties
  let svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;

  

  if (shape === 'Circle') {
    // Generate SVG for a circle shape w/ <g> tag
    svg += `<g transform="translate(${centerX}, ${centerY})">`;
    svg+= `<circle cx="0" cy="0" r="40" fill="${shapeColor}" />`;
    // Center text in circle shape
    svg += `<text x="0" y="0" text-anchor="middle" dominant-baseline="middle" fill="${textColor}">${logoText}</text>`;
    svg += `</g>`;

 

  } else if (shape === 'Triangle') {
    //Centertext on SVG logo for Triangle
       const triangleCenterX = (50 + 90 + 10) / 3;
       const triangleCenterY = (5 + 90 + 90) / 3;
    // Generate SVG for a triangle shape w/ <g> tag
    svg += `<g transform="translate(${centerX}, ${centerY})">`;
    svg += `<polygon points="50,5 90,90 10,90" fill="${shapeColor}" />`;
    // Center text in selected shape
    svg += `<text x="${triangleCenterX}" y="${triangleCenterY}" text-anchor="middle" dominant-baseline="middle" fill="${textColor}">${logoText}</text>`;
    svg += `</g>`;
    
  } else if (shape === 'Square') {
    //Centertext on SVG logo for Triangle
    const squareCenterX = (50 + 90 + 10) / 3;
    const squareCenterY = (5 + 90 + 90) / 3;
    // Generate SVG for a square shape w/ <g> tag
    svg += `<g transform="translate(${centerX}, ${centerY})">`;
    svg += `<rect x="10" y="10" width="80" height="80" fill="${shapeColor}" />`;
   // Center text in selected shape
   svg += `<text x="${squareCenterX}" y="${squareCenterY}" text-anchor="middle" dominant-baseline="middle" fill="${textColor}">${logoText}</text>`;
   svg += `</g>`;
  }
   // Close SVG tag
  svg += `</svg>`;
  
  return svg;
}

function writeToFile(fileName, data) {
  const svg = generateSvg(data);
  fs.writeFile(fileName, svg, (err) => {
    if (err) {
      console.error(`Error writing to file ${fileName}: ${err.message}`);
    } else {
      if (process.env.NODE_ENV !== "test") {
        console.log(`Generated logo.svg`);
      }
    }
  });
}

  const shapeChoice = [ 
    { name: "Circle", value: "Circle" },
    { name: "Triangle", value: "Triangle" },
    { name: "Square", value: "Square" },
  ];
    

function promptQuestions() {
    inquirer
      .prompt([
        {
          type: "input",
          message:
            "What text (three characters max, ie 'RJB') would you like your logo to display? ",
          name: "logoText",
        },
        {
          type: "input",
          message:
            "What color would you like this text to be? (Type out color or choose a hexadecimal number)",
          name: "textColor",
        },
        {
          type: "list",
          message: "What shape would you like your logo to display?",
          choices: shapeChoice,
          name: "shapeChoice",
        },
        {
          type: "input",
          message:
            "Choose your shape's color (Type out color or choose a hexadecimal number)",
          name: "shapeColor",
        },
      ])
      .then((answers) => {
        if (answers.logoText.length > 3) {
          console.log("Must enter a value (3 characters max)");
          promptQuestions();
        } else {
          writeToFile('logo.svg', answers);
        }
      });
    }
   
promptQuestions();