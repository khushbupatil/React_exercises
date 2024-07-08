/*
for(i=1; i<=10;i++){
    if(i==1){
        console.log("Gold medal")
    }
    else if(i==2){
        console.log("Silver Medal")
        }
    else if(i==3){
        console.log("Bronze medal")
    }
    else{
        console.log(i)
    }
    
} */

for(i=1; i<=10;i++){
    switch(i){
    case 1:
        console.log("Gold medal")
        break;
    case 2:
        console.log("Silver Medal")
        break;
    case 3:
        console.log("Bronze medal")
        break;
    default:
        console.log(i)
        break;
    }
}
