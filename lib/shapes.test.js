const { Circle, Triangle, Square } = require('./shapes');

describe('shapes', () => {

    describe('Circle', () =>  {
        it('should take in a color when constructed and save it where fill is located', () => {
            const circle = new Circle('purple');
            
            expect(circle.color).toEqual('purple');
        })
    })

    describe('Triangle', () =>  {
        it('should take in a color when constructed and save it where fill is located', () => {
            const triangle = new Triangle('purple');
            
            expect(triangle.color).toEqual('purple');
        })
    })

    describe('Square', () =>  {
        it('should take in a color when constructed and save it where fill is located', () => {
            const square = new Square('purple');
            
            expect(square.color).toEqual('purple');
        })
    })
})