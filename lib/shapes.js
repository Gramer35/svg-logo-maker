// class Shape;

class Circle {
    constructor(color){
        this.color = color;
    }
    render(){
        return `<circle cx="150" cy="100" r="90" fill="${this.color}" />`;
    }
}

class Triangle{
    constructor(color){
        this.color = color;
    }
    render(){
        return `<polygon points="150,10 290,200 10,200" fill="${this.color}" />`;
    }
    
};

class Square{
    constructor(color){
        this.color = color;
    }
    render(){
        return `<polygon points="" fill="${this.color}" />`;
    }

};

module.exports = { Circle, Triangle, Square };