const trigger = document.querySelector(".trigger");
trigger.addEventListener("click", () => {
  const gnb = document.querySelector(".gnb > ul");
  const sns = document.querySelector(".sns");
  gnb.classList.toggle("on");
  sns.classList.toggle("on");
  trigger.classList.toggle("active");
});
