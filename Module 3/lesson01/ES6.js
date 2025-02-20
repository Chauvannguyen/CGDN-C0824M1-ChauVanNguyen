// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
// }
// sayHello() {
//         return `Hello, I am ${this.name}`;
// }
// }
// class Student extends Person {
//     constructor(grade, name, age) {
//         super(name, age);
//         this.grade = grade;
//     }
// }
//
// const user = new Person("Nguyên", 20);
// console.log(user);
// console.log(user.sayHello());
// const std = new Student(9, "chien", 30);
// console.log(std);

const sayHello = (name) => `Hello, ${name}`;
console.log(sayHello("nguyen"));