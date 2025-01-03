var a1=[1,2,3,4,5];
var a2=[3,4,5,6,7,8]

function takeIntersection(a1,a2){
   var a3=[];
    a1.forEach(e1 => {
        a2.forEach(e2 => {
            if(e1==e2){
                a3.push(e1);
            }
        });
    });
    return a3;
}

var c= takeIntersection(a1,a2);

console.log(c);

