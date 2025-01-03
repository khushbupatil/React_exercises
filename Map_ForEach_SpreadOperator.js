//forEachLoop
const fruits= ["Kiwi", "Guava", "Grapes", "Apple"];
function indexFruits(fruits, index){
    console.log(`${index}. ${fruits}`);
}

fruits.forEach(indexFruits);

/////Map assignment///

let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);

// spread operator

const places =["One", "Two","Three"];
function visitPlaces(a, b, c){
    console.log("First", a);
    console.log("Second", b);
    console.log("Third", c);
}
visitPlaces(...places);



const meal = ["soup", "steak", "ice cream"]
let [starter] = meal;
console.log(starter);

let obj = {
    key: 1,
    value: 4
};

let output = { ...obj };
output.value -= obj.key;

console.log(output.value);