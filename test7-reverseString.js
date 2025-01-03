
function reverse(a){
    var c="";
    console.log(a.length);
    for(i=a.length-1;i>=0;i--){
        c+=a[i];
    }
   return c;
}
var d=reverse("Khushbu");
console.log(d);
