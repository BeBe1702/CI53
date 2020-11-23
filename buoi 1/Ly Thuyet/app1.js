let $no = document.getElementById('no');
var $answers = document.getElementById('answers'); 
let count = 0 ;
// $no.addEventListener('mouseover', function() {
//     console.log("Cậu vừa hông à");
// }) ;

$no.onmouseover = function() {
    count++ ;
    if(count < 5) {
        $answers.classList.toggle('reverse');
    } else {
        $answers.style.display = 'none' ;
    }
    
}

/*
    2 code trên tương đồng nhau. 
    addEventListener thêm Listener vào
    code bên dưới đè lên những cái trước 
*/ 

//b1 tim hieu ve oop ( khai niem, 4 tinh chat, vi du)
//b2 nhap 1 mảng gồm các số, hãy tìm tất cả số nguyên tố trong mảng đó
//b3 