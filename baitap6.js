//6. Viết function trả ra giá trị lớn nhất trong một mảng số
// nhập độ dài của mảng
let arrLength = +prompt("nhập độ dài của mảng: ");
//khai báo và nhập mảng
let arr = [];
for (let i = 0; i < arrLength; i++) {
    arr.push(+prompt("nhập số thứ " + (i + 1)));
}
console.log("sô nhap vào là", arr);
//khai báo hàm và tìm số lớn nhât
let max = arr[0];
let giaTriMax = () => {
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }        
    }
    return max;
}
console.log("số max là: ", giaTriMax());