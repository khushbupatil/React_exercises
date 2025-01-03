var A = [3,4,2,77,0,1,5];

function sortArray(A){
   
   for(var i=0; i<A.length-1; i++){
        for(var j=0; j<A.length-i-1; j++){
            if(A[j] > A[j+1]){
                var temp = A[j];
                A[j]= A[j+1];
                A[j+1]= temp;
            }
        }
   }
   return A;   
}

var sortedA = sortArray(A);
console.log(sortedA);

