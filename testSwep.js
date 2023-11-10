
var x = 10;
var y = 20;

function swapValues(x,y) {
    // ใช้ตัวแปรชั่วคราวเพื่อทำการสลับค่า
    var temp = x;
    x = y;
    y = temp;
}
  // ทดสอบการใช้งาน
  console.log("ก่อนสลับค่า: x =", x, ", y =", y);
  swapValues(x,y);
  console.log("หลังสลับค่า: x =", x, ", y =", y);
// -------------------------------------------------------- //
s1 = "AB";
s2 = "XZ";
function swapValue(s1,s2) {
    // ใช้ตัวแปรชั่วคราวเพื่อทำการสลับค่า
    var temp = s1;
    s1 = s2;
    s2 = temp;
}
console.log("ก่อนสลับค่า: s1 =", s1, ", s2 =", s2);
swapValues(x,y);
console.log("หลังสลับค่า: s1 =", s1, ", s2 =", s2);

//-----------------------------------------------------------//

var myObject = { a: 20, b: 10 };

function swapValues(obj) {
    var temp = obj.a;
    obj.a = obj.b;
    obj.b = temp;
  }
  
  // ทดสอบการใช้งาน
  console.log("ก่อนสลับค่า: a =", myObject.a, ", s2 =", myObject.b);
  swapValues(myObject);
  console.log("หลังสลับค่า: a =", myObject.a, ", s2 =", myObject.b);
  