const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./shapes');
const { log } = require('console');


class Logo {
    constructor(data) {
        this.text = {
            value: '',
            color: '',
        },

        this.shape = {
            value: '',
            color: ''
        };
    }
    
    run() {
        return inquirer 
            .prompt([
            {
                type: 'input',
                name: 'text',
                message: 'What text would you like in your logo? (must contain no more than 3 or less than 1)',
                validate: textInput => {
                    if(textInput > 3 || textInput < 1){
                        return 'Text must be between 1 and 3 characters';
                    } else {
                        return true;
                    }

                }
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
        ])
        .then((answers) => {
            this.text = {
                value: answers.text,
                color: answers.textColor,
            };

            this.shape = {
                value: answers.shape,
                color: answers.shapeColor,
            };

            this.buildSVG(this.text, this.shape);
        })
    }

    buildSVG(){
        // build shapes
        let svgString = "";
        
        svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">'

        let shapeChoice;
        if(this.shape.value === 'Circle'){
            shapeChoice = new Circle();
            svgString += `<circle cx="150" cy="150" r="80" fill="${this.shape.color}" />`;
        } else if (this.shape.value === 'Triangle') {
            shapeChoice = new Triangle();
            svgString += `<polygon points=""  fill="${this.shape.color}" />`;
        } else {
            shapeChoice = new Square();
            svgString += `<polygon points=""  fill="${this.shape.color}" />`;
        }

        svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${this.text.color}">${this.text.value}</text>`;

        svgString += '</svg>'


        this.save();
    }

    save(fileName = 'logo.SVG', svgString){
        // save to file
        fs.writeFile(fileName, svgString)
    }
}



module.exports = Logo;