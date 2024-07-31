// JS for문을 활용해서 구구단 2단~9단까지 웹브라우저 화면출력

// 챗지피티의 답변
const gugudanDiv = document.getElementById("gugudan");

for (let i = 2; i <= 9; i++) {
  const tableDiv = document.createElement("div");
  tableDiv.innerHTML = `<strong>${i}단</strong>`;
  for (let j = 1; j <= 9; j++) {
    const p = document.createElement("p");
    p.textContent = `${i} x ${j} = ${i * j}`;
    tableDiv.appendChild(p);
  }
  gugudanDiv.appendChild(tableDiv);
}
