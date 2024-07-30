// const boolean = false;
// console.log(typeof boolean);

// const test01 = null;
//null : 값이 아닌 것. 값으로 인정할 수 없는 것. 앞으로도 값이 될 수 없는 것.

// const test02 = undefined;
//undefined => 값이 정해지지 않은 값(미정값), 언젠가는 값이 될 수 있는 것.

// const name = "현빈";
// const classroom = 201;

// console.log(name + "님" + classroom + "호 강의실로 오세요!");

// console.log(`${name}님 ${classroom}호 강의실로 오세요!`);

// const jsBook = {
//   // 속성 : property
//   // key : value
//   title: "지옥에서 온 깃허브",
//   pages: 330,
// };
// // 객체안에 담긴 값을 찾아올 수 있음.

// // 온점 표기법
// const jsBookTitle = jsBook.title;
// console.log(jsBookTitle);

// // 대괄호 표기법
// const jsBookPages = jsBook["pages"];
// console.log(jsBookPages);

// jsBook.title = "천국에서 온 깃허브";
// console.log(typeof jsBook);

// // json=> javascript object notation

// let test01 = Symbol();
// let test02 = Symbol();
// console.log(test01 === test02);
// let id = Symbol("userId");
// const member = {
//   name: "David",
//   [id]: 12345,
// };
// console.log(member);
// console.log(member[id]);
// const fncTest = function () {
//   consolelog("click");
// }; //function 함수
// const fncTest = function () {
//   consolelog("click");
// }; //화살표함수

// let a = 10;
// let b = a;

// console.log(a, b);

// let obj1 = {
//   c: 10,
//   d: "ddd",
// };

// let obj2 = obj1;

// console.log(obj1, obj2);

// b = 15;
// obj2.c = 20;

// console.log(a, b);
// console.log(obj1, obj2);

// const fruits = ["apple", "banana", "cherry"];
// const favorite = [...fruits];

// favorite[1] = "grape";

// console.log(fruits);

// const one = "20";
// const two = 10;

// const sum = one + two;

// console.log(parseFloat("36.4"));

// const num = null;
// // console.log(num.toString());

// console.log(typeof String(num));

// console.log(Boolean(0));

// prompt("자연수를 입력해주세요!");
