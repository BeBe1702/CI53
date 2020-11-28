/**
 Bài 2 (7đ): Hãy viết chương trình "Quản lý tủ sách cá nhân" bằng cách cài đặt các class sau với các chức năng:
    # Tạo tủ sách
    # Xem, thêm, bớt, sửa sách có trong tủ
    - Book:
        + id: định danh quyển sách
        + name: tên sách
        + price: giá thành
        + publishedDate: ngày phát hành
        + update(data): sửa thông tin quyển sách ứng với dữ liệu truyền vào
    - ComicBook kế thừa Book:
        + funny: độ hài hước đánh giá trên thang điểm 10
        + pageNumber: số trang
    - TextBook kế thừa Book:
        + subject: tên môn học (VD: toán, văn, anh, ...)
        + grade: khối lớp áp dụng (VD: 1, 2, 3)
    - ScienceBook kế thừa Book:
        + major: lĩnh vực (VD: Công nghệ thông tin, Xây dựng, Y tế, ...)
    - BookShelf
        + name: tên tủ sách
        + owner: người sở hữu
        + dateModified: ngày sửa đổi
        + addBook(book): để thêm 1 quyển sách vào tủ. Tham số book phải là thể hiện của class Book (book là đối tượng khởi tạo từ class Book hoặc class kế thừa class Book)
            Câu hỏi: nếu truyền thể hiện của class ComicBook, TextBook, ScienceBook vào addBook liệu có được không? Vì sao?
        + updateBook(id, data): để sửa 1 quyển sách với id tương ứng có trong tủ sách
        + deleteBook(id): xóa 1 quyển sách có id tương ứng
        + showBooks(): liệt kê tất cả quyển sách có trong tủ
        + findBooks(name): tìm tất cả quyển sách có trong tủ theo name
 */

class Book {
    id ; 
    name ; 
    price ; 
    publishedDate ;
    
    constructor(id, name, price, publishedDate) {
        this.id = id ;
        this.name = name ;
        this.price = price ;
        this.publishedDate = publishedDate ;

    };

    update(data) {

    }
}

class ComicBook extends Book {
    funny ; 
    pageNumber ;

    constructor(id, name, price, publishedDate, funny, pageNumber) {
        super(id, name, price, publishedDate) ;
        this.funny = funny ; 
        this.pageNumber = pageNumber ; 
    }
}

class TextBook extends Book {
    subject ; 
    grade ; 

    constructor(id, name, price, publishedDate, subject, grade) {
        super(id, name, price, publishedDate) ;
        this.subject = subject ; 
        this.grade = grade ; 
    }
}

class ScienceBook extends Book {
    major ; 

    constructor(id, name, price, publishedDate, major) {
        super(id, name, price, publishedDate);
        this.major = major ; 
    }
}

class BookShelf {
    name ; 
    owner ; 
    dateModified ; 

    static addBook(book) {
        if(book instanceof Book) 
        books.push(book);
        // truyền inherit đc vì nó đều chưa các attribute của book 
    }
    
    static updateBook(id, data) {
        for(let i = 0 ; i < books.length; i++){
            if(books[i].id == id) {
                books[i] = data ;
            }
        }
    }
    
    static deleteBook(id) {
        for(let i = 0 ; i < books.length; i++){
            if(books[i].id == id) {
                book.splice(i,1);
            }
        }
    }
    
    static showBooks() {
        for(let i = 0 ; i < books.length;i++){
            console.log(books[i]);
        }
    }

    static findBooks(name) {
        for(let i = 0 ; i < books.length; i++){
            if(books[i].name == name) {
                
                console.log(books[i]) ;
            }
        }
    }
}
let books = [];
var book1 = 6 ;
var book2 = new Book(2,"Harry Potter", "5$", "20/9/1990") ;
var book3 = new ScienceBook(3,"Organic Chemistry", "5$", "20/9/1990", "Chemistry") ;
BookShelf.addBook(book1);
BookShelf.addBook(book2);
BookShelf.addBook(book3);

BookShelf.updateBook(2, new Book(2,"Conan", "3$", "12/3/2000"));

BookShelf.findBooks("Organic Chemistry");

BookShelf.showBooks() ;