// class Shape;

class Circle {
    constructor(color){
        this.color = color;
    }
    render(){
        return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
}

class Triangle{
    constructor(color){
        this.color = color;
    }
    render(){
        return `<polygon points="150,0 300,200 0,200" fill="${this.color}" />`;
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