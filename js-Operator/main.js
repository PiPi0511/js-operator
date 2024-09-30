var a = parseInt(prompt("Nhap a"));
var b = parseInt(prompt("Nhap b"));
var tong = a + b;
var hieu = a - b;
var tich = a * b;
var thuong = a/b;
document.write("tong:"+ tong + "<br>");
document.write("hieu:"+ hieu + "<br>");
document.write("tich:"+ tich + "<br>");
document.write("thuong:"+ thuong + "<br>");

document.write("****************<br>");
var c = a > b;
document.write(a + ">"+b+"="+c+"<br>");
var c = a < b ;
document.write(a + "<"+b+"="+c+"<br>");
c = a == b;
document.write(a + " == " + b + " = " + c + "<br>");

c = a >= b;
document.write(a + " >= " + b + " = " + c + "<br>");

c = a <= b;
document.write(a + " <= " + b + " = " + c + "<br>");
