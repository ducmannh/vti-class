//Bai 1.1: Scope
const fullNameGlobal = "Tran Duc Manh Global";
function Hello(name) {
  console.log(fullNameGlobal);
  const fullNameFunction = "Tran Duc Manh Function";
  console.log(fullNameFunction);
  console.log(Name());
  function Name() {
    const fullNameLexical = "Tran Duc Manh";
    return fullNameLexical + " " + name;
  }
}
// Hello("Lexical")

//Bai 1.2: Reference Function
const myName = function printName() {
  let fullName = "Tran Duc Manh";
  console.log("Hello " + fullName);
};
// myName()

//Bai 1.3: Closure
function getGreeting(firstName, lastName) {
  const nameIntro = "Hello";
  const greeting = function () {
    return nameIntro + " " + firstName + " " + lastName;
  };
  return greeting;
}
// console.log(getGreeting("Tran Duc", "Manh")())

//Bai 1.4: Closure and Loop
// for (let i = 1; i <= 6; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }

//Bai 1.5: Ung dung
function Number(value) {
  return function (num) {
    return value(num);
  };
}
function square(num) {
  return num * num;
}
const squareNumber = Number(square);
// console.log(squareNumber(3))

//Bai 2.1,2,3
// let name = 'manh'
// name = 'duc'
// console.log(name)
function Name() {
  let name = "manh";
  name = "duc";
  console.log(name);
}
// Name();

//Bai 2.4
// const array = [1, 2, 3]
// array.push(4)
// console.log(array)
//const không thể gán lại, khai báo lại giá trị nhưng không cấm thay đổi giá trị của biến
//ví dụ như thêm, xóa phần tử của mảng hoặc thay đổi thuộc tính của đối tượng

//Bai 3.1
const date = [2000, 23, 12];
const year = date[0];
const month = date[1];
const day = date[2];
console.log("year", `${year}`)
console.log("month", `${month}`)
console.log("day", `${day}`)
//Bai 3.2
const person = {
    firstName: "Tran Duc",
    lastName: "Manh",
    age: 23
};
console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)

//Bai 4.1
const fullName4 = "Tran Duc Manh";
const age4 = 23;
// console.log("Toi ten la", `${fullName4}`, "nam nay", `${age4}`, "tuoi")

//Bai 4.2
const a = 5;
const b = 20;
// console.log("Tong cua", `${a}`, "va", `${b}`, "la", `${a+b}`)

//Bai 5
const array1 = [2, 4, 6, 8, 10];
const array2 = [...array1, 5, 7, 9];
const cold = ["autumn", "winter"];
const warm = ["spring", "summer"];
const seasons = [...warm, ...cold];
// console.log(array2)
// console.log(seasons)

//Bai 6
const lesson6_1 = (a) => a + 100;
const lesson6_2 = (a, b) => a + b + 100;
const lesson6_3 = (a, b) => {
  const chuck = 42;
  return a + b + chuck;
};

//Bai 7
const sum = (a, b) => a + b;
const minus = (a, b) => a - b;
const multiply = (a, b) => a * b;
const caculate = (a, b, operation) => {
  const result = operation(a, b);
  // console.log("Ket qua phep tinh ", operation, "la", result)
};
caculate(10, 5, sum);
caculate(10, 5, minus);
caculate(10, 5, multiply);

//Bai 8
const numArray = [10, 20, 30];
const sumArray = numArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
// console.log(sumArray)

//Bai 9
const multiply9 = (a) => {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
};
// console.log(multiply9(4)(5)(6))

//Bai 10
const multiply10_1 = (a, b = 5) => {
  return a * b;
};
// console.log(multiply10_1(6))
const multiply10_2 = (...nums) => {
  return nums.reduce((accumulator, val) => accumulator * val, 1);
};
// console.log(multiply10_2(2,3,4,5,6))
const printInformations = (name, email) => {
    if (email){
        console.log("Toi ten la", name, ".", "Email cua toi la", email )
    }else{
        console.log("Toi ten la", name, ".", "Toi chua co email")
    }
}
// printInformations("Manh", "Manh@gmail.com")
// printInformations("Manh")