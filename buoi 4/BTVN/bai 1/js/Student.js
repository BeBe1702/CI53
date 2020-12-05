export default class Student {
    name;
    age;
    id;
    academicYear;
    constructor(name, age, academicYear){
        this.name = name;
        this.age = age;
        this.academicYear = academicYear;
        this.id = uuid.v4();
    }
}