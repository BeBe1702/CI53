import Boy from "./Boy.js";
import Girl from "./Girl.js";
import Group from "./Group.js";
import Person from "./Person.js";
import Rela from "./Rela.js";

let X = new Boy("Harry", 12, 9) ; 
let X1 = new Girl("Hermione", 12, 9); 
let X2 = new Boy("Be", 18, 8);
let X3 = new Boy("Huy", 18, 7);
let X4 = new Girl("Linh", 10, 4); 
let X5 = new Girl("Sarah", 30, 5); 

let myTeam = new Group("Be");
myTeam.addPeople(X);
myTeam.addPeople(X1);
myTeam.addPeople(X2);
myTeam.addPeople(X3);
myTeam.addPeople(X4);
myTeam.addPeople(X5);

myTeam.addRelationship(X1,X);
myTeam.addRelationship(X,X2);
myTeam.addRelationship(X,X4);
myTeam.addRelationship(X,X5);
myTeam.addRelationship(X2,X1);
myTeam.addRelationship(X4,X3);
myTeam.addRelationship(X5,X2);


var FriendShips = (person) =>  {
    let Friends = [] ;
    for(let relationship of myTeam.relationships ){
        if(relationship.a == person){
            Friends.push(relationship.b);
        }
        if(relationship.b == person){
            Friends.push(relationship.a);
        }
    }
    return Friends ;
}

var maleFriends = (person) => {
    let maleFriends = [] ;
    for(let relationship of myTeam.relationships) {
        if(relationship.a == person){
            if(relationship.b instanceof Boy) {
                maleFriends.push(relationship.b)
            }
        }
        if(relationship.b == person){
            if(relationship.a instanceof Boy) {
                maleFriends.push(relationship.a)
            }
        }
    }
    return maleFriends ;
}

var femaleFriends = (person) => {
    let femaleFriends = [] ;
    let friends = FriendShips(person);
    let malefriends = maleFriends(person);
    for(var friend of friends ){
        for(var malefriend of malefriends){
            if(friend != malefriend) femaleFriends.push(friend);
        }
    }
    return femaleFriends ;
}

var beautifulGirl = (person) => {
    let girls = femaleFriends(person); 
    let beautifulGirls = [] ; 
    for(var girl of girls ) {
        if(girl.beauty > 5) beautifulGirls.push(girl);
    }
    return beautifulGirls ; 
}

console.log(myTeam.relationships[0].a);
console.log(FriendShips(X));
console.log(maleFriends(X));
console.log(femaleFriends(X));
console.log(beautifulGirl(X));



