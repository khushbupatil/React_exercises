function calculate1(arr){
    var sum = 0;
    for(var i=0; i<arr.length; i++){
    sum += arr[i];
    }
return sum;
}
console.log(calculate1([1,2,3,6]));
console.log(calculate1([4,70]))

module.exports = calculate1;