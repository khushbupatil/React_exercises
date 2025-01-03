
Car = {
    color: "Red",
    Wheels: 4,
    Petrol: true
}

//console.log(Car);
function printProperties(Car){
    
    for(Prop in Car)
        {
            console.log(Prop)
        }
    
}
printProperties(Car);

function printValuesProp(Car){
    
    for(Prop of Object.keys(Car))
        {
            console.log(Prop +":" +Car[Prop])
        }
    
}
printValuesProp(Car);



    
