const bicycle ={
    bell : function(){
        return "Ring, Ring! Watch out please!";
    }
}
const door ={
    bell : function(){
        return "Ring, Ring! Open the door please!";
    }
}
//console.log(bicycle.bell());
//console.log(door.bell());
function ringTheBell(a){
    console.log(a.bell());

}
ringTheBell(bicycle);
console.log(new Date());
//##############

function Icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`);
    }
}

let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");
console.log(kiwiIcecream); // --> Icecream {flavor: 'kiwi', meltIt: ƒ}
appleIcecream; // --> Icecream {flavor: 'apple', meltIt: ƒ}

