var Student1= {
    name: "Khushbu",
    grade:  70
}

var Student2 = {
    name: "Pooja",
    grade:  48
}

var Student3= {
    name: "Ashwin",
    grade:  78
}
var students =[Student1,Student2,Student3];
console.log(students);
/*
function findHighestGrade(...students){
   // console.log(students);
    var grade =0;
    var name = "";
    students.forEach(element => {
        console.log(element.grade, element.name);
        if(grade ==0 || element.grade>=grade){
            grade = element.grade;
            name = element.name;
        }  
    });
        
    return name;
}

console.log(findHighestGrade(Student1,Student2,Student3));*/

//Method2

function findHighestGrade(students){
    // console.log(students);
     var grade =0;
     var name = "";
     students.forEach(element => {
         if(element.grade>=grade){
             grade = element.grade;
             name = element.name;
         }  
     });
         
     return name +" " +grade;
 }
 
 console.log(findHighestGrade(students));
 