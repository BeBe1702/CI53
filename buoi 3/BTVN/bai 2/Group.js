import Person from "./Person.js" ;
import Relationship from "./Rela.js";
export default class Group {
    people ;
    relationships ;
    name ; 
    constructor(name) {
        this.people = [] ;
        this.relationships = [] ;
        this.name = name ;
    }

    addPeople(person) {
        if(person instanceof Person) {
            this.people.push(person);
        }
    }

    addRelationship(person1, person2)  {
        if(person1 instanceof Person && person2 instanceof Person && person1 != person2){
            let foundRela = this.relationships.find(relationship => {
              return  (relationship.a == person1 && relationship.b == person2) || (relationship.b == person1 && relationship.a == person2); 
            });
        
        if(!foundRela){
            let newRela = new Relationship(person1, person2);
            this.relationships.push(newRela);
            }
        }
    }

    
}



