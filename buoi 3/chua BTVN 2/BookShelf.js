import Book from "./Book.js";
export default class BookShelf {
    name ;
    owner ; 
    dateModified ;
    books ; 

    constructor(name, owner, dateModified) {
        this.name = name ; 
        this.owner = owner ; 
        this.dateModified = dateModified ;
        this.books = [] ;
    }

    addBook(book) {
        if(book instanceof Book) {
            this.books.push(book) ;
        }
    }

    updateBook(id, data) {
    // Cách 1     for(let book of this.books) {
    //         if(book.id == id) {
    //             book.update(data); 
    //             break ; 
    //     }
    // }
    
    // find() của array : Nếu tìm đc 1 phần tử thỏa mãn -> return phần tử đó, else returm null
    
    // Cách 2 

    let book = this.books.find((item) => item.id === id);
    
    if (book != null) book.update(data) ;
    }

    deleteBook(id) {
        // findIndex() của array: nếu tìm dc phần tử thỏa mãn thì trả về index else trả về -1
        let bookIndex = this.books.findIndex(item => item.id === id);
        if(bookIndex >= 0) this.books.splice(bookIndex,1);
    }

    showBoooks() {
        console.log(this.books) ;
    }

    findBooks(name) {
        // filter() của array. Trả về 1 mảng mới gồm những phần tử thỏa mãn điều kiện
        return this.books.filter(item => item.name === name);
    }
}
