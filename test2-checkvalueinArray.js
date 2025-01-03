//Method 1:
function checkarray(arr, b){

    for(var i=0; i<arr.length; i++){

        if(b == arr[i]){
            console.log(b + " is present in the array at " + i);
            return;
         
        }
            
        }
        console.log(b + " is not present in the array");
    }
  


//console.log(checkarray([1,2,3], 5));

//checkarray([18,20,3], 1);
checkarray([18,20,3], 20);

/*Method 2:

const a =[1,2,3,4,5,5,6,];
const b = 10;
const abc = new Set(a).has(b);
console.log(abc);

//Method 3:

const ab =[3,4,5,6,60,39,];
const bc = 399;
const def = ab.includes(bc);
if(def == true){
    console.log("Value is present in the array");
}else{
    console.log("Value is not present in the array");
}
//console.log(def);

//using function

function findvalueInArray(zz,z){

    const v = zz.includes(z);
    if(v == true){
        console.log("Value is present in the array");
    }else{
        console.log("Value is not present in the array");
    }
}

console.log(findvalueInArray([1,2,34,5],4));*/
