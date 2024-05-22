#!/usr/bin/env node

const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter text for the logo (up to 3 characters):',
    validate: input => input.length <= 3 || 'Text must be 3 characters or less.'
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter text color (color keyword or hex):'
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape for the logo:',
    choices: ['circle', 'triangle', 'square']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter shape color (color keyword or hex):'
  }
];

inquirer.prompt(questions).then(answers => {
  const { text, textColor, shape, shapeColor } = answers;

  let shapeElement;
  if (shape === 'circle') {
    shapeElement = new Circle();
  } else if (shape === 'triangle') {
    shapeElement = new Triangle();
  } else if (shape === 'square') {
    shapeElement = new Square();
  }

  shapeElement.setColor(shapeColor);

  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeElement.render()}
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;

  fs.writeFileSync('logo.svg', svgContent.trim());
  console.log('Generated logo.svg');
});
