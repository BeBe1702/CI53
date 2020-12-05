import Student from "./Student.js"
import Lecturer from "./Lecturer.js"
import Class from "./Class.js"

var mathClass = new Class("math");
var Lec1 = new Lecturer("Be", 27, "Physics");
var stu1 = new Student("Be", 20, 3);
var stu2 = new Student("Scott", 20, 3);
var stu3 = new Student("Jenny", 22, 3);
var stu4 = new Student("Ro", 20, 3);
var stu5 = new Student("Messi", 21, 4);
mathClass.createLecturer(Lec1);
// console.log(x);
mathClass.lecturerList();
mathClass.addStudents(stu1);
mathClass.addStudents(stu2);
mathClass.addStudents(stu3);
mathClass.addStudents(stu4);
mathClass.addStudents(stu5);

mathClass.studentsList();

console.log(mathClass); 