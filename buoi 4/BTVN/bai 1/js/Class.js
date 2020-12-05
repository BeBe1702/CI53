import Student from "./Student.js"
import Lecturer from "./Lecturer.js"

export default class Class {
    id;
    subject;
    lecturer;
    students;
    constructor(subject){
        this.subject = subject;
        this.id = uuid.v4();
        this.lecturer = {};
        this.students = [];
    }

    createStudents(student) {
        if(student instanceof Student ) {
            var flag = true;
            for(var stu of this.students){
                if(this.student.id == stu.id){
                    flag = false;
                    break;
                }
            }
        if(flag == true)
            this.students.push(student);
        }
    }

    createLecturer(lecturer) {
        if(lecturer instanceof Lecturer)
            this.lecturer = lecturer;
    }

    addStudents(student) {
        if(student instanceof Student)
        this.students.push(student);
    }
    
    findStudentsById(id) {
        for(var student of this.students){
            if(student.id == id)
            return student ;
        }
    }
    
    findStudentsByName(name) {
        return this.students.filter(student => student.name == name);
    }

    studentsList(){
        console.log(this.students);
    }

    lecturerList() {
        console.log(this.lecturer);
    }


    
}

