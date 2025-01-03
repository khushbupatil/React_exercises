// create class with 2 attributes, create parameterised constructor,
// create addition function without any param, 
// function return addition and print the addition in console

class Ashwin{

    constructor(a, b){
        this.a = a;
        this.b = b;
    }

    addition() {
        var c = this.a + this.b;
        return c;
    }
}

var abc = new Ashwin(2,6);
console.log(abc.addition());

