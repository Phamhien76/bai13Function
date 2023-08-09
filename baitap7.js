//7. Viết function kiểm tra số chẵn-lẻ, nguyên tố, hoàn hảo
//nhập số nguyên
let num = +prompt("Hãy nhập số nguyên: ");


// let kiemTraChanLe = () => {
//     //kiểm tra số chẳn lẻ
//     if (num % 2 == 0) {
//         console.log("số nhập vào là số chẵn");
//     } else {
//         console.log("số nhập vào là số lẻ");
//     }
//     return num;
// }
// console.log(kiemTraChanLe());

//******************************* */

//kiểm tra số nguyen to

let kiemTraSoNguyenTo = (number) => {


    if (number >= 2) {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return false;

            }

        }

    }else{
        return true;
    }
    return true;
}
console.log(kiemTraSoNguyenTo(num));

//***************************************** */

// let kiemTraSoHoanHao = () => {
//     let sum = 0;
//     for (let i = 1; i < num; i++) {
//         if (num % i === 0) {
//             sum += i;
//         }
//     }
//     return sum == num
// }
// console.log(kiemTraSoHoanHao());

