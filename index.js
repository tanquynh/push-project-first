// let arr1 = [10, 20, 30, 40, 50]
// let newArr1 = arr1.map((value, index) => value*2)
// console.log(newArr1)

// Chuyển hàm map về for thường
// let arr = [10, 20, 30, 40, 50]
// let newArr = [];
// for(let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i]*2)
// }
// console.log(newArr)
// const numbers = [1,2,3,4,5];
// let odds = [];
// for(let i=0; i < numbers.length; i++) {
//    if(numbers[i] % 2 == 0) {
//       odds.push(numbers[i]);
//    }
// }
// console.log(odds);
// const numbers = [1,2,3,4,5];

// for(let i=0; i < numbers.length; i++) {
//    if(numbers[i] % 2 == 0) {
//       console.log(numbers[i])
//       break
//    }
   
// }

// 4. Destructuring
// let arr = [10, 20, 30, 40]
// let [a, b, c,d] = arr
// console.log(a,c,d)


// let arr1 = [1, 2, 3]
// let arr2 = [4, 5, 6]
// console.log(...arr, ...arr2)


let people = {
    name: "Thịnh",
    age: 20
}
// let peopleAddress = {...people, address: "Hà Nội"} // thêm address
let peopleAddress = {...people, age: 40} // cập nhật lại value key

console.log(peopleAddress);
import {sum} from "./module.js"
console.log(sum(10,20))