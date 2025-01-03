class bird{
    wings(){
        console.log("Flapping!");
    }
}
class crow extends bird{
    wings(){
        super.wings();
        console.log("Double flapping");
    }
}

var a = new crow();
a.wings();

