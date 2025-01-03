//array
var array1 = [];
array1.push("abc");
array1.push("def");
array1.push("ghi");

console.log(array1);

array1.pop();
console.log(array1);

// Object with Array
var obj ={
    abc : 1,
    def : 2,
    ghi : 3
}
console.log(obj);
for(i=0;i<array1.length;i++)
    {
        console.log(obj[array1[i]]);
    }

//array with functions

function printarray( a, b, c){
    var array1 = [];
array1.push(a);
array1.push(b);
array1.push(c);
return array1;
}

console.log(printarray(22, 454, "hhhh")[0]);
