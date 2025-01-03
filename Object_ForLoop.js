
const car = {
    engine : true,
    steering: true,
    speed: "slow"
}
var car1 = Object.create(car);
car1.speed ="fast"

for(prop in car1){
   // console.log(prop);
}

for(prop of Object.keys(car1)){
    console.log(prop + "-" +car1[prop]);
}

//Var and LET difference
var greet = "Hello";
var place = "World";
//console.log(greet + " " + place + "!");

let greet1 = "hello"
let place1 = "world"
//console.log(`${greet1}      ${place1}`);
//console.log(`${2+3-1*7}`)