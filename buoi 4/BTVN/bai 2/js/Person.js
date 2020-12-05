import Location from "./Location.js"
export default class Person {
    name;
    age;
    location;
    contactNumber;
    constructor(name, age, location, contactNumber) {
        this.name = name;
        this.age = age;
        if(location instanceof Location){
            this.location = location;
        }
        this.contactNumber = contactNumber;
    }
}