class Person {
   constructor(name, age){
    this.name = name;
    this.age = age;
   }
   det(){
      //return `${this.name} ${this.age}`;   
      return this.name+this.age;
    }   
}
const details = new Person("khushbu", 31);

console.log(details.det());



