// BT3-12.js
// Switch chọn 1 trong nhiều khối mã sẽ thực thi
// getDay() trả về ngày trong tuần
var text;
switch (new Date().getDay()) {
    case 0:
        text = "Today is Saturday";
        break;
    case 1:
        text = "Today is Sunday";
        break;
    default:
        text = "Looking forward to the Weekend";
  }
console.log(text);
// default : trường hợp này ko phải là trường hợp cuối

// JavaScript For Loop
// JavaScript Loops
var A = ["Ngoc", "Hong", "Nhi", "Nhung"];
var txt = "";
var i;
for (i=0;i<A.length;i++)
{
    txt += A[i] + "\n";
}
console.log(txt);

// JavaScript While Loop
var text = "";
var i = 0;
// While : lặp thông qua 1 khối mã miền, điều kiện nhất định là đúng
while (i < 5) {
  text += "Số thứ: " + i + "\n";
  i++;
}
console.log("while: ");
console.log(text);
// do while : vòng lặp thực thi khối mã 1 lần trước khi check điều kiện, ngay cả khi Đk sai ,sau đó mới lặp lại 1 vòng miễn là Đk đúng 
do{
    text += "Số thứ: "+ i + "\n";
    i++
}
while(i < 5);
console.log("Do/While: ");
console.log(text);

// Break & Continue 
var txt = "";
var i;
for (i=0;i<10;i++)
{
    if (i===3){break;}
    txt += "Số thứ: " + i + "\n";
}
console.log("Break: ");
console.log(txt);
// Continue
for (i=0;i<10;i++)
{
    if (i===3){continue;}
    txt += "Số thứ: " + i + "\n";
}
console.log("Continue: ");
console.log(txt);

// JavaScript Type Conversion
// typeof : toán tử để tìm kiểu dữ liệu của 1 biến
console.log("Typeof: " +"\n"+ typeof "Bao" +"\n" + typeof 5 +"\n");

// constructor trả về hàm xây dựng cho tất cả các biến
console.log("constructor:" +"\n"+ "Bao".constructor +"\n"+ (5).constructor+"\n");

// Chuyển đổi số thành chuỗi String() == toString()
var x = 5;
console.log("Chuyển thành chuỗi: "+"\n" + String(x) +"\n"+ String(5) +"\n"+ String(2+3)+"\n");

// The Unary + Operator : để chuyển 1 biến với 1 số
var a = "5";
var b = + a;
console.log(typeof a +"\n"+ typeof b +"\n");

// Bitwise 
// AND(&)
var x = 5 & 1;
console.log(x);
// OR(|)
var y = 5 | 1;
console.log(y);
// XOR(^)
var z = 5 ^ 1;
console.log(z);
// NOT(~)
var e = ~5;
console.log(e);
// <<
var f = 5 << 1;
console.log(f);
// >>
var g = -5 >> 1;
console.log(g);
// >>>
var h = 5 >>> 1;
console.log(h);
// chuyển thập phân sang nhịn phân
function dec2bin(dec){
    return (dec >>> 0).toString(2);
}
console.log("Thập phân sang nhị phân: "+"\n"+dec2bin(5));

// JavaScript Regular Expressions
// search() tìm kiếm 1 chuỗi cho 1 giá trị nhất định và trả về vị trí
var str = "Kinh Doanh Và Công Nghệ Hà Nội";
var n = str.search("Nghệ");
console.log(n);
// replace() thay thế 1 giá trị với 1 giá trị trong chuỗi
var rep = str.replace("Và", "&");
console.log(rep);
// test() tìm kiếm 1 chuỗi cho 1 mẫu và trả về true or false 
var patt = /c/;
console.log(patt.test("Đại Học HUBT"));

// Errors
// throw cho phép bạn tạo 1 lỗi tuỳ chỉnh
// try cho phép bạn xác định 1 khỗi mã được kiểm tra lỗi trong khi nó đang được thực thi
// catch cho phép bạn xác định 1 khỗi mã sẽ được thực thi nếu lỗi xảy ra trong khỗi thử
var txt = "p01";
var x = 4;
try{
    if (x == "" ) throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if (x<5) throw "too low";
    if (x>10) throw "too high";
}
catch(err){
    console.log("Input is "+ err);
}
// finally cho phép bạn thực thi mã, sau try và catch
var txt = "p01";
var x = 12;
try{
    if (x == "" ) throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if (x<5) throw "too low";
    if (x>10) throw "too high";
}
catch(err){
    console.log("Input is "+ err);
}
finally{
    console.log("");
}
// RangrError bị đẩy ra nếu bạn sử dụng 1 số nằm ngoài phạm vi
var y = 2;
try{
    y.toPrecision(300);
}
catch (err){
    console.log(err);
}

// ReferenceError lỗi tham chiếu lỗi khi chưa khai báo 1 biến.
var  a1;
try{
    a1 = b1 + 1;
}
catch(err){
    console.log(err);
}

// SyntaxError thông báo lỗi khi đánh giá mã bằng lỗi cú pháp
try {
    eval("alert('Hello)");
}
catch(err) {
    console.log(err);
}
// typeError in ra khi sử dụng 1 giá trị năm ngoài phạm vi của các loại sự kiện
var num = 1;
try {
    num.toUpperCase();   // You cannot convert a number to upper case
}
catch(err) {
    console.log(err);
}
// URIError in ra nếu sử dụng các ký tự ko hợp lệ

// Scope
//  Biến cục bộ
// các biến được khai báo trong 1 hàm JS , trở thành LOCAL đối với hàm
function myFunction() {
    var car = "Mazda";
    console.log(typeof car + " " + car);
}
console.log(typeof car);
myFunction();
// JavaScript Variables
var name = "KIA";
function functionVariable() {
    console.log(name);
}
functionVariable();

// JavaScript Hoisting
// liệt kê
var x = 5;
elem = x;
console.log(elem);
// let và const
carName = "Volvo";
console.log(carName);
let carName;

// this
var HS = {
    Ten: "Bao",
    Lop: "TH2337",
    MASV: 18113490,
    thongtin : function()
    {
        return this.Ten + " " + this.Lop + " " + this.MASV;
    }
};
console.log(HS.thongtin());

// let
