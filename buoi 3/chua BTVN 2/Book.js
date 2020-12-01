export default class Book {
    id ;
    name ;
    price ;
    publishedDate ; 
    constructor(name, price, publishedDate) {
        this.name = name ; 
        this.price = price ; 
        this.publishedDate = publishedDate ; 
        this.id = uuid.v4() ; 
    }
    // {name : "<3", price : 5, publishedDate : "20/10/2020"}
    update(data) {
       for(let key in data && key != "id"){
           if(this[key] != undefined) {
               this[key] = data[key] ;
           }
           
       } 
    }
}

