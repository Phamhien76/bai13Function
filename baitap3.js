// 3. Viết function tính thế kỷ của một năm nhập vào từ bàn phím. Biết thế kỷ thứ
// nhất tính từ năm 1 đến 100
//nhập năm 
let namNhap=+prompt("Hãy nhập năm: ");
if(namNhap<=0){
    console.log("Năm không hợp lệ");
}

let tinhTheKy=()=>{
 // tính thế kỷ
 let theKy= Math.ceil(namNhap/100);
 return theKy;
}
console.log("năm " +namNhap+ " thuộc thế kỷ ",tinhTheKy());