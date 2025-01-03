
var vowels=['a','e','i','o','u'];
var vowelset = new Set(vowels);

function countVowels(name){
    var count =0;
        for(i=0;i<name.length;i++){
            if(vowelset.has(name.charAt(i))){
                count++;
            }
        }
    return count;
}
var count=countVowels("Ashwin");
console.log("No of vowels in the string are: " +count);