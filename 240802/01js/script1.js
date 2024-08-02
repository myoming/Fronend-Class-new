// function greeting() {
//   console.log("안녕하세요!");
// }

// const timer = setInterval(greeting, 2000);

// clearInterval(timer);

// let counter = 0;

// const timer = setInterval(() => {
//   console.log("안녕하세요!");
//   counter++;
//   if (counter === 5) {
//     clearInterval(timer);
//   }
// }, 2000);

// 재귀함수 호출

// let num = 0;

// const testFnc = () => {
//   num++;
//   document.write(num, "<br/>");
//   if (num === 10) return "보이지 않는 무의 반환값";
//   testFnc();
// };

// testFnc();

// return => 문장종결로만 생각하면 다 틀어질 것.
// 함수가 어떤 연산작업을 해서 값을 반

setTimeout(() => {
  console.log("3초가 지났습니다.");
}, 3000);
