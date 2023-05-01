const inquirer = require('inquirer');
// const fs = require('fs');


const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'What text would you like in your logo? (must contain no more than 3 or less than 1)'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like your text? (can enter color name or hexadecimal number)'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Which shape would you like your logo to be?',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like your shape to be? (can enter color name or hexadecimal number)'
    }
]


function logoGen() {
    inquirer.prompt(questions) 
}

logoGen();