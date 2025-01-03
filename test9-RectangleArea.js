class Rectangle{
    constructor(width, height){
        this.width = width,
        this.height = height
    }
    CalculateArea(){

        return this.width*this.height;
        
    }
}

var A = new Rectangle(3,2);
console.log(A.CalculateArea());

