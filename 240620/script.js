// scroll event
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");
  const logo = document.querySelector("#logo");
  const gnbDesktop = document.querySelector(".gnbDesktop");
  const gnbMobile = document.querySelector(".gnbMobile");
  const trigger = document.querySelectorAll(".trigger span");

  if (window.scrollY > 60) {
    header.classList.add("active");
    nav.classList.add("active");
    logo.classList.add("active");
    gnbDesktop.classList.add("active");
    gnbMobile.classList.add("active");
    trigger.forEach((bar) => {
      bar.classList.add("active");
    });
  } else {
    header.classList.remove("active");
    nav.classList.remove("active");
    logo.classList.remove("active");
    gnbDesktop.classList.remove("active");
    gnbMobile.classList.remove("active");
    trigger.forEach((bar) => {
      bar.classList.remove("active");
    });
  }
});

// toggle event

const toggleBtn = document.querySelector(".trigger");
toggleBtn.addEventListener("click", function () {
  const gnbMobile = document.querySelector(".gnbMobile");
  gnbMobile.classList.toggle("open");
  this.classList.toggle("active");
});

// searchbar trigger
// 1.사용자가 검색버튼을 클릭한다
// 컴퓨터는 DOM을 활용해서 검색버튼을 인지할 수 있다
// 검색버튼이 클릭되었는지에 대한 여부를 event처리를 통해서 실행

// 2.검색버튼을 1번 클릭하면 오른쪽에서 있던 .search_var가 출력된다.
// 미리 사전에 css를 통해서 정의한 가상클래스를 호출한다.

// 3.검색버튼을 2번 클릭하면 현 위치에 있던 .search_bar가 다시 오른쪽으로 이동한다.
// 호출된 가상클래스를 찾아와서 다시 제거한다.

// 4. 위 3~4번이 계속 반복될 수 있도록 한다.
// toggle()를 활용해서 실행한다.

const searchBar = document.querySelectorAll("ul .fa-magnifying-glass");
const searchResult = document.querySelector(".search_bar");
const closeBtn = document.querySelector(".fa-xmark");

searchBar.forEach((item) => {
  item.addEventListener("click", () => {
    searchResult.classList.add("active");
  });
});

closeBtn.addEventListener("click", () => {
  searchResult.classList.remove("active");
});

// main slide
const slideContainerArrow = document.querySelector(".slide_container_arrow"); //슬라이드 영역
const slideArrows = document.querySelectorAll(".slide_container_btn"); //슬라이드 버튼
const slidePagers = document.querySelectorAll(".slide_pager span"); //슬라이드 페이저
const slideImg = document.querySelector(".slide_img"); //슬라이드 이미지

//배열
const pics = ["slide1.png", "slide2.png", "slide3.png"];
let i = 0;
let slideInterval;
let isTransitioning = false;

slideImg.style.backgroundImage = `url(./img/${pics[i]})`;
slidePagers[0].classList.add("active");

// 실제 이미지 및 페이저 값을 변경시켜주는 실행 함수
const updateSlide = (i) => {
  slidePagers.forEach((item) => {
    item.classList.remove("active");
  });
  slideImg.style.backgroundImage = `url(./img/${pics[i]})`;
  slidePagers[i].classList.add("active");
};

// 자동으로 슬라이드 이미지가 변경되도록 해주는 함수
const startSlideShow = () => {
  slideInterval = setInterval(() => {
    i = (i + 1) % pics.length;
    updateSlide(i);
  }, 4000);
};

// 자동슬라이드 기능을 정지시켜주는 함수
const stopSlideShow = () => {
  clearInterval(slideInterval);
};

// 자동슬라이드 재시작을 실행시켜주는 함수
const resetSlideShow = () => {
  stopSlideShow();
  isTransitioning = false;
  startSlideShow();
};

// 화살표 클릭 및 이미지 변경요청 함수
slideArrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    if (isTransitioning) return;
    isTransitioning = true;

    stopSlideShow();
    if (e.target.id === "leftArrow") {
      i = (i - 1 + pics.length) % pics.length;
    } else if (e.target.id === "rightArrow") {
      i = (i + 1) % pics.length;
    }

    updateSlide(i);

    setTimeout(() => {
      isTransitioning = false;
      startSlideShow();
    }, 500);
  });
});

// 페이저 클릭 시, 슬라이드 이미지 변경 함수
slidePagers.forEach((pager, index) => {
  pager.addEventListener("click", () => {
    stopSlideShow();
    i = index;
    updateSlide(i);
    setTimeout(startSlideShow, 3000);
  });
});

startSlideShow();

slideContainerArrow.addEventListener("mouseover", stopSlideShow);
slideContainerArrow.addEventListener("mouseover", resetSlideShow);
