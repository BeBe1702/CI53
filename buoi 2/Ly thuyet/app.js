/*
Sự khác nhau giữa tính đóng gói và che giấu dữ liệu
*/

class Person {
    name ;
    age ;
    address ; 

    constructor(_name, _age, _address) {
        // console.log(name, age, address);
        // this là cái đối tượng đang được khởi tạotạo
        
        this.name = _name ;
        this.age = _age;
        this.address = _address ;
        // console.log(this) ;
    }

    speak() {
        console.log("I luv u");
    }
    introduce (){
        console.log(`Chao mọi người, mình tên là ${this.name}. Mình năm nay ${this.age} tuổi`);
    }
}
let name  = 'H' ;
let age = 12  ;
let address = "TB" ; 
let person1 = new Person(name, age, address);
let person2 = new Person('Thao', 20, 'Ha Noi');
let person3 = new Person('Tam', 18, 'Ha Noi');
// person1.name  = name ;
// person1.age = age ;
// person1.address =  address ; 

/*
    hãy tạo class gồm các tính chất sau
    class oldGf : name, age, favorites, hair, weight, height
    Tạo 3 Object từ OldGf 
*/

class OldGirlfriend extends Person {
    
    favorites ; 
    hair ; 
    weight ; 
    height ; 
    
    //riêng constructor ko thừa kế đc 
    constructor(_name, _age, _address, _favorites, _hair, _weight, _height) {
        super(name, age, address) ;  // bắt buộc có 
        this.name = _name ; 
        this.age = _age ; 
        this.address = _address ;
        this.favorites = _favorites ; 
        this.hair = _hair ; 
        this.height = _height ; 
        this.weight = _weight ;
    console.log(this);
        
    }
  
   getMarried() {
        console.log(`${this.name} gửi thiệp`);
   }
} 

let oGF1 = new OldGirlfriend('Hang', "20", "TB" ,"basketball", "long", "54kg", "167cm") ;
// let oGF2 = new OldGirlfriend("Quynh", "20", "dancing", "long", "45kg", "158cm") ;
// let oGF3 = new OldGirlfriend("Tam", "17", "literature", "blonde", "50kg", "155cm") ;

oGF1.speak() ;
oGF1.introduce() ; 

class Boy extends Person  {
    size ; 
    handSome ; 
    rich ; 
    constructor(_name,_age,_address,_size,_handsome,_rich) {
        super(_name,_age,_address) ;
        this.size = _size ;    
        this.handSome = _handsome ;    
        this.rich = _rich ;    
    }
}

class GoodBoy extends Boy {
    tedious  ; 
    constructor(_name,_age,_address,_size,_handsome,_rich,_tedious) {
        super(_name,_age,_address,_size,_handsome,_rich)
        this.tedious = _tedious ; 
        console.log(this); 

    }
}

class BadBoy extends Boy {
    salty  ; 
    constructor(_name,_age,_address,_size,_handsome,_rich,_salty) {
        super(_name,_age,_address,_size,_handsome,_rich)
        this.salty = _salty ; 
        console.log(this); 
        
    }
}

class YellowBoy extends Boy {
    payment  ; 
    constructor(_name,_age,_address,_size,_handsome,_rich,_payment) {
        super(_name,_age,_address,_size,_handsome,_rich)
        this.payment = _payment ; 
        console.log(this); 

    }
}

class Girl extends Person {
    size ; 
    beauty ; 
    good ; 
    constructor(_name,_age,_address,_size,_beauty,_good){
        super(_name,_age,_address) ;
        this.size = _size ;
        this.beauty = _beauty ;
        this.good = _good ;
        console.log(this); 
    }
}


let gb = new GoodBoy("be","20","TB","170cm", 7, 5, 5); 
let bb = new BadBoy("be","20","TB","170cm", 7, 5, 5); 
let yb = new YellowBoy("be","20","TB","170cm", 7, 5, 500000); 
let girl = new Girl("thao", "20", "HN", 90, 10,10) ;

class MyMath {
    static sum(a, b) {
        return a + b ;
    }

    // nếu phương thức có static là của class
    // nếu k có static thì phương thức là của object 
    static subtract(a, b) {
        return a - b ;

    }
    multiply(a, b) {
        return a * b ;

    }
    divide(a,b) {
        if(b!=0)
        return a / b ;
        else return false ;
    }
}

let m1 = new MyMath() ; 
// console.log(m1.sum(1,2));
console.log(MyMath.sum(1,2));
console.log(MyMath.subtract(1,2));

// Tìm hiểu S.O.L.I.D
// 3 nhóm Design Pattern 