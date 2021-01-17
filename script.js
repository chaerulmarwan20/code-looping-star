// Code 1
// let str = "";
// for (let i = 0; i < 10; i++) {
//   for (let j = 0; j <= i; j++) {
//     str += "*";
//   }
//   str += "\n";
// }
// console.log(str);

// Code 2
// let str = "";
// for (let i = 10; i > 0; i--) {
//   for (let j = 0; j < i; j++) {
//     str += "*";
//   }
//   str += "\n";
// }
// console.log(str);

// Code 3
// let str = "";
// for (let i = 10; i > 0; i--) {
//   for (j = 10; j > i; j--) {
//     str += " ";
//   }
//   for (let k = 0; k < i; k++) {
//     str += "*";
//   }
//   str += "\n";
// }
// console.log(str);

// Code 4
// let str = "";
// for (let i = 0; i < 10; i++) {
//   for (let j = 0; j <= i; j++) {
//     str += "*";
//   }
//   str += "\n";
// }
// for (let k = 9; k > 0; k--) {
//   for (let l = 0; l < k; l++) {
//     str += "*";
//   }
//   str += "\n";
// }
// console.log(str);

// Code 5
// let str = "";
// for (let i = 0; i < 5; i++) {
//   for (let j = 5; j > i; j--) {
//     str += " ";
//   }
//   for (let k = 0; k <= i; k++) {
//     str += "*";
//   }
//   for (let l = 0; l < i; l++) {
//     str += "*";
//   }
//   str += "\n";
// }
// console.log(str);

// Code 6
// let str = "";
// for (let i = 0; i < 10; i++) {
//   for (let j = 10; j > i; j--) {
//     str += " ";
//   }
//   for (let k = 0; k <= i; k++) {
//     str += "*";
//   }
//   for (let l = 0; l < i; l++) {
//     str += "*";
//   }
//   str += "\n";
// }
// for (let i = 9; i > 0; i--) {
//   for (let j = 10; j >= i; j--) {
//     str += " ";
//   }
//   for (let k = 1; k < i; k++) {
//     str += "*";
//   }
//   for (let l = 0; l < i; l++) {
//     str += "*";
//   }
//   str += "\n";
// }
// console.log(str);

// Code 7
let str = "";
for (let i = 0; i < 10; i++) {
  if (i % 2 != 0) {
    for (let j = 0; j < 1; j++) {
      str += " ";
    }
  }
  for (let k = 0; k < 5; k++) {
    str += "#";
    str += " ";
  }
  str += "\n";
}
console.log(str);
