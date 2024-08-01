// 함수 선언!!
// 함수 매개변수 반드시 꼭 필수x
// 함수를 호출할 때, 매개변수의 자리에 어떤 값을 전달하고자 한다면, 인수 혹은 인자값 삽입!
// 인자 = 매개변수
//

// function calcSum() {
//   let sum = 0;
//   for (let i = 1; i <= 10; i++) {
//     sum += i;
//   }
//   console.log(`1부터 10까지 더하면 ${sum}`);
// }

// calcSum();

// 익명 함수
// const calcSum = function () {
//   let sum = 0;
//   for (let i = 1; i <= 10; i++) {
//     sum += i;
//   }
//   console.log(`1부터 10까지 더하면 ${sum}`);
// };

// calcSum();

// 화살표 함수 : function이라는 키워드를 대체. =>

// const calcSum = () => {
//   let sum = 0;
//   for (let i = 1; i <= 10; i++) {
//     sum += i;
//   }
//   console.log(`1부터 10까지 더하면 ${sum}`);
// };

// calcSum();

// function sum(a, b) {
//   const result = a + b;
//   alert(`두 수의 합은 ${result}`);
// }

// sum(1, 2);

// const num = Number(prompt("숫자를 입력하세요 ^^"));

// function calcSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// alert(`1부터 ${num}까지 더하면 ${calcSum(num)} 입니다!`);

document.body.innerHTML += `<button id="btn">Click!</button>`;

function display() {
  alert("클릭했습니다!");
}

const button = document.querySelector("#btn");
button.addEventListener("click", display);
