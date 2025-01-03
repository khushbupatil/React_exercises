class Animal{
    constructor(color='Yellow', energy= 100){
        this.color= color;
        this.energy= energy;
    }
    isActive(){
        if(this.energy>0){
            this.energy-=20;
            console.log("Energy is decreasing, currently energy is at:", this.energy);
        }else if(this.energy==0){
            this.sleep();
        }
    }
    sleep(){
        this.energy+=20;
        console.log("Energy is increasing, currently at:", this.energy);
    }
    getColor(){
        console.log(this.color);
    }
}
class Cat extends Animal{
    constructor(sound='Purr', canJumpHigh=true, canClimbTrees= true, color, energy){
        super(color, energy);
        this.sound= sound;
        this.canJumpHigh= canJumpHigh;
        this.canClimbTrees= canClimbTrees;
    }
    makeSound(){
        console.log(this.sound);
    }
}
class Bird extends Animal{
    constructor(sound='Chirp', canFly= true, color,energy){
        super(color,energy);
        this.sound= sound;
        this.canFly= canFly;
    }
    makeSound(){
        console.log(this.sound);
    }
}
class HouseCat extends Cat{
    constructor(houseCatSound='Meow',sound='Purr', canJumpHigh=true, canClimbTrees= true, color, energy){
        super(sound,canJumpHigh,canClimbTrees,color,energy);
        this.houseCatSound= houseCatSound;
    }
    makeSound(){
        if(options){
            super.makeSound();
        }
        console.log(this.houseCatSound);
    }
}
class Tiger extends Cat{
    constructor(TigerSound='Roarr',sound,canJumpHigh,canClimbTrees,color,energy){
        super(sound,canJumpHigh,canClimbTrees,color,energy);
        this.TigerSound= TigerSound;  
    }
    makeSound(){
        if(options){
            super.makeSound();
        }
        console.log(this.houseCatSound);
    }
}
class Parrot extends Bird {
    constructor(canTalk = false, sound,canFly, color,energy) {
        super(sound,canFly, color,energy);
        this.canTalk = canTalk;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        if (this.canTalk) {
            console.log("I'm a talking parrot!");
        }
    }
}

var parrot1 = new Parrot(true);
var parrot2 = new Parrot(false);
//console.log(parrot1);
console.log(parrot1.makeSound());
console.log(parrot2.makeSound());
console.log(parrot1.color); 
console.log(parrot1.energy);
console.log(parrot1.isActive());