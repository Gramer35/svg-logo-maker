// class Shape;

class Circle {
    constructor(color){
        this.color = color;
    }
    render(){
        return `<circle cx="150" cy="150" r="80" fill="${this.color}" />`;
    }
}

class Triangle{
    constructor(color){
        this.color = color;
    }
    render(){
        return `<polygon points=""  fill="${this.color}" />`;
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