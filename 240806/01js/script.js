const overout = document.querySelectorAll(".overout");
let i = 0;

overout.forEach((item, index) => {
  if (index === 0) {
    item.addEventListener("mouseover", () => {
      this.querySelector("p:first-of-type").innerText = "mouseover";
      this.querySelector("p:last-of-type").innterText = ++i;
    });
    item.addEventListener("mouseout", function () {
      this.querySelector("p:first-of-type").innerText = "mouseout";
    });
  }

  if (index === 1) {
    item.addEventListener("mouseover", () => {
      this.querySelector("p:first-of-type").innerText = "mouseover";
      this.querySelector("p:last-of-type").innterText = ++i;
    });
    item.addEventListener("mouseout", function () {
      this.querySelector("p:first-of-type").innerText = "mouseout";
    });
  }
});
