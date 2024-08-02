// const main = document.querySelector("main");
// // const profile = main.querySelector("main > #profile");
// const profile = document.getElementById("profile");
// console.log(profile);

// // getElementById => 메모리의 효율성 극대화!!!
// // > DOM > id
// // > querySelector => 전역요소의 모든 node.
// // > 객체 속성을 반드시 document로 지정하고 가야한다.

// // const h1 = main.querySelector("h1");
// const desc = main.querySelector("#desc");
// // const user = document.querySelectorAll(".user");

// const img = document.getElementsByClassName("image");
// const h1 = document.getElementByIdTagName("h1");
// console.log(hi);
// console.log(user[1]);

// user.forEach((item) => {
//   item.addEventListener("click", () => {
//     console.log("click");
//   });
// });

// const desc = document.querySelector("#desc");
// const jihyeon = desc.querySelectorAll(".user")[0];
// console.log(jihyeon);
// console.log(desc.textContent);

const title = document.querySelector("#title");

title.addEventListener("click", function () {
  this.innerText = "나의 프로필";
  this.style.backgroundColor = "#000";
  this.style.color = "#fff";
});

const pfimg = document.querySelector("#profile img");

pfimg.addEventListener("click", function () {
  this.src = "./img/pf2.png";
});

const firstP = document.querySelector("#desc > p:first-child");
firstP.addEventListener("click", function () {
  this.innerHTML = "이름 : <b>전젼</b>";
});

const secondP = document.querySelector("#desc > p:nth-child(2)");
console.log(secondP);

secondP.addEventListener("click", function () {
  // this.classList.add("active");
  // if (!this.classList.contains("active")) {
  //   this.classList.add("active");
  // } else {
  //   this.classList.remove("active");
  // }
  this.classList.toggle("active");
});
