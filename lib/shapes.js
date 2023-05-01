// class Shape;

class Circle {
    render(){
        return `<circle cx="150" cy="150" r="80" fill="${this.color}" />`;
    }
}

function Triangle(){

};

function Square(){

};

module.exports = { Circle, Triangle, Square };