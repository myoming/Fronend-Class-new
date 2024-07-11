'use strict';
// about slide
const slideBtn = document.querySelectorAll('#slide_btn i');
function clearActiv() {
  slideBtn.forEach(e => {
    e.classList.remove('active');
  });
}

function slideFunc(el, index, wrap) {
  const slideWrap = document.querySelector(wrap);
  clearActiv();
  el.classList.add('active');
  if (wrap == '#slide_wrap') {
    if (index === 2) {
      slideWrap.classList.add('toggle');
    } else {
      slideWrap.classList.remove('toggle');
    }
  }
}

// activity
const favSliderInner = document.querySelector('#fav_slider_wrap .inner');
const favSlideWrap = document.querySelector('#fav_slider_wrap');
const favSlideElem = document.querySelectorAll('#fav_slider_wrap .slider');
let countNum = 0;
let moveNum = null;
if (favSlideWrap) {
  moveNum = favSlideWrap.clientWidth;
}
function favSlide(el, dir) {
  if (dir == 'right') {
    if (moveNum < favSlideWrap.clientWidth * (favSlideElem.length - 1)) {
      countNum++;
      moveNum = favSlideWrap.clientWidth * countNum;
      favSliderInner.style.marginLeft = `-${moveNum}px`;
    }
  }
  if (dir == 'left') {
    if (moveNum > 0) {
      countNum--;
      moveNum = favSlideWrap.clientWidth * countNum;
      favSliderInner.style.marginLeft = `-${moveNum}px`;
    }
  }
}

// video
const videoSliderInner = document.querySelector('#video .inner');
const videoSlideWrap = document.querySelector('#video');
const videoSlideElem = document.querySelectorAll('#video .slider');
const boxsWrap = document.querySelector('#popupbox');
const boxs = document.querySelectorAll('#popupbox .box');
let videoCount = 0;
let videoMove = 0;
let slideGap = 28;
let videSlideWidth = null;
if (videoSlideWrap) {
  videoSlideElem.forEach((e, index) => {
    videSlideWidth = e.clientWidth;
    /*box 정보 보이기*/
    e.addEventListener('click', function () {
      boxsWrap.style.display = 'block';
      boxs[index].style.display = 'flex';
    });
  });
}

/*box 정보 닫기*/
const closeBtn = document.querySelector('#closebtn');
if (closeBtn !== null) {
  closeBtn.addEventListener('click', e => {
    boxsWrap.style.display = 'none';
    boxs.forEach(e => {
      e.style.display = 'none';
    });
  });
}
function videoSlide(el, dir) {
  if (dir == 'right') {
    if (videoMove < videSlideWidth * (videoSlideElem.length - 4)) {
      videoCount++;
      videoMove = (videSlideWidth + slideGap) * videoCount;
      videoSliderInner.style.marginLeft = `-${videoMove}px`;
    }
  }
  if (dir == 'left') {
    if (videoMove > 0) {
      videoCount--;
      videoMove = (videSlideWidth + slideGap) * videoCount;
      videoSliderInner.style.marginLeft = `-${videoMove}px`;
    }
  }
}

const navElem = document.querySelector('#header');
const navCloseBtn = document.querySelector('#nav_close_btn');
const navOpenBtn = document.querySelector('#mobile_memu_btn');
navOpenBtn.addEventListener('click', () => {
  navElem.classList.add('on');
});
navCloseBtn.addEventListener('click', () => {
  navElem.classList.remove('on');
});

// cursor event
const cursor = document.querySelector('.cursor');
const liElem = document.querySelectorAll('nav ul li');
document.addEventListener('mousemove', function (e) {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

liElem.forEach(el => {
  el.addEventListener('mouseenter', e => {
    cursor.style.transform = 'scale(5)';
  });
  el.addEventListener('mouseleave', e => {
    cursor.style.transform = 'scale(1)';
  });
});
