// 현재 보고 있는 웹 브라우저 문서 내 버튼을 하나 만들어주세요!!!

// 그리고, 해당 버튼을 클릭할 때마다 색상이 변경되도록 해주세요.

// 변경되어야 하는 색상은 white, yellow, apua, purple색상 이며, 마지막 purple 색상의 다음번 색상은 첫번째 색상인 white색상으로 변경되면 됩니다. (무한 반복으로 색상이 변경되어 표시됩니다.)

// var color = ["white", "yellow", "aqua", "purple"];

// var i = 0;
// function changeColor() {
//   i++;
//   if (i >= color.length) {
//     i = 0;
//   }

//   var bodyTag = document.getElementById("theBody");
//   bodyTag.style.backgroundColor = color[i];
// }

const color = ["white", "yellow", "aqua", "purple"];
const button = document.querySelector("button");

let i = 0;
button.addEventListener("click", () => {
  i++;
  if (i >= color.length) i = 0;

  const bodyTag = document.querySelector("body");
  bodyTag.style.backgroundColor = color[i];
});
