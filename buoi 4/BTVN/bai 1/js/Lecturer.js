export default class Lecturer {
    id;
    name;
    age;
    diploma;
    constructor(name, age, diploma) {
        this.name = name;
        this.age = age;
        this.diploma = diploma;
        this.id = uuid.v4();
    }
}