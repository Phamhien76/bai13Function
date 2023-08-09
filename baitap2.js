
// const tich=(num)=>{
// return num*num
// }
// alert(tich(3));
//********************* */
// let num =3;
// function tichSo(){
//     let tich = num*num
//     return tich;
// }
// alert(tichSo());
//************************** */

function soTich(values){
    console.log(values);
}

function ticSo(num,callback){
    let tich= num*num;
    callback(tich);
}
ticSo(3,soTich);