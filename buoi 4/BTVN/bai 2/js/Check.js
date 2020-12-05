import Person from "./Person.js"
import Location from "./Location.js"

var distance = (p1,p2) => {
    if(p1 instanceof Person && p2 instanceof Person)
    return Math.sqrt(Math.pow((p1.location.x - p2.location.x),2) + Math.pow((p1.location.y-p2.location.y),2));
}

var  F1 = (p1,pp) => {
    var F1 = [];
    for(let i = 0; i < pp.length;i++){
        if(distance(p1,pp[i]) < 2){
            F1.push(pp[i]);
            pp.splice(i,1);
        } 
    }
    return F1 ;
}

var F2 = (f1,pp) => {
    let F2 = [] ;
    for(let ps of pp){
        for(let a of f1){
            if(distance(a,ps) < 2){
                F2.push(ps);
            }
        }
    }
    return F2 ;
}

var Location1 = new Location(2,4);
var Location2 = new Location(3,8);
var Location3 = new Location(2,2.1);
var Location4 = new Location(3,7);
var Location5 = new Location(3,2.5);
var Location6 = new Location(1,4);
var Location7 = new Location(2,3);
var Location9 = new Location(1,8);
var Location8 = new Location(6,9);
var person1 = new Person("A", 20, Location1, 123);
var person2 = new Person("B", 20, Location2, 1243);
var person3 = new Person("C", 20, Location3, 1243);
var person4 = new Person("D", 20, Location4, 1243);
var person5 = new Person("E", 20, Location5, 1243);
var person6 = new Person("F", 20, Location6, 1243);
var person7 = new Person("G", 20, Location7, 1243);
var person8 = new Person("H", 20, Location8, 1243);
var person9 = new Person("I", 20, Location9, 1243);
var people = [person2, person3, person4, person5, person6, person7, person8, person9]; 

var f1 = F1(person1,people);
console.log(f1);
var f2 = F2(f1, people);
console.log(f2);
