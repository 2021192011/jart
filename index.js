// //con1
// 스크롤에 따라 텍스트가 가로로 움직임
window.addEventListener("scroll", function () {
  var scrollingText1 = document.querySelector(".text1");
  var scrollPercentage1 =
    window.scrollY /
    (document.documentElement.scrollHeight - window.innerHeight);
  scrollingText1.style.transform =
    "translateX(" + -scrollPercentage1 * 600 + "%)";

  var scrollingText2 = document.querySelector(".text2");
  var scrollPercentage2 =
    window.scrollY /
    (document.documentElement.scrollHeight - window.innerHeight);
  scrollingText2.style.left = scrollPercentage2 * 130 - 120 + "%";

  var scrollingText3 = document.querySelector(".text3");
  var scrollPercentage3 =
    window.scrollY /
    (document.documentElement.scrollHeight - window.innerHeight);
  scrollingText3.style.transform =
    "translateX(" + -scrollPercentage3 * 900 + "%)";
});

// //NEWS
// 버튼을 누르면 가로로 한칸씩 이동
let moveDistance = 0;
const itemlist = document.querySelector(".con3 .itemlist");
const items = document.querySelectorAll(".con3 .item");

function moveItemLeft() {
  moveDistance += 396;

  if (moveDistance > (items.length - 1) * 396) {
    moveDistance = 0;
  }

  for (let i = 0; i < items.length; i++) {
    items[i].style.transform = `translateX(-${moveDistance}px)`;
  }
}

function moveItemRight() {
  moveDistance -= 396;

  if (moveDistance < 0) {
    moveDistance = (items.length - 1) * 396;
  }

  for (let i = 0; i < items.length; i++) {
    items[i].style.transform = `translateX(-${moveDistance}px)`;
  }
}

// //nav (mouseover하면 이미지가 바뀌도록 함)
const aboutLink = document.getElementById("aboutLink");
const newsLink = document.getElementById("newsLink");
const customLink = document.getElementById("customLink");
const shopLink = document.getElementById("shopLink");
const myLink = document.getElementById("myLink");
const cartLink = document.getElementById("cartLink");
const bgImage = document.querySelector(".bg");

aboutLink.addEventListener("mouseover", function () {
  bgImage.setAttribute("src", "https://ifh.cc/g/8zWj60.png");
  aboutLink.classList.add("hover");
});
newsLink.addEventListener("mouseover", function () {
  bgImage.setAttribute("src", "https://ifh.cc/g/DQ5kTa.png");
  newsLink.classList.add("hover");
});
customLink.addEventListener("mouseover", function () {
  bgImage.setAttribute("src", "https://ifh.cc/g/Orjaz9.png");
  customLink.classList.add("hover");
});
shopLink.addEventListener("mouseover", function () {
  bgImage.setAttribute("src", "https://ifh.cc/g/O7Kko2.png");
  shopLink.classList.add("hover");
});
myLink.addEventListener("mouseover", function () {
  bgImage.setAttribute("src", "https://ifh.cc/g/M5sG7t.png");
  myLink.classList.add("hover");
});
cartLink.addEventListener("mouseover", function () {
  bgImage.setAttribute("src", "https://ifh.cc/g/Nz3mHD.png");
  cartLink.classList.add("hover");
});

aboutLink.addEventListener("mouseout", function () {
  bgImage.setAttribute("src", "https://ifh.cc/g/Qo5J8k.png");
  aboutLink.classList.remove("hover");
});
newsLink.addEventListener("mouseout", function () {
  bgImage.setAttribute("src", "https://ifh.cc/g/Qo5J8k.png");
  newsLink.classList.remove("hover");
});
customLink.addEventListener("mouseout", function () {
  bgImage.setAttribute("src", "https://ifh.cc/g/Qo5J8k.png");
  customLink.classList.remove("hover");
});
shopLink.addEventListener("mouseout", function () {
  bgImage.setAttribute("src", "https://ifh.cc/g/Qo5J8k.png");
  shopLink.classList.remove("hover");
});
myLink.addEventListener("mouseout", function () {
  bgImage.setAttribute("src", "https://ifh.cc/g/Qo5J8k.png");
  myLink.classList.remove("hover");
});
cartLink.addEventListener("mouseout", function () {
  bgImage.setAttribute("src", "https://ifh.cc/g/Qo5J8k.png");
  cartLink.classList.remove("hover");
});

//아이콘 클릭하면 사이트맵 나타나게, 아이콘 변경
const mapTag = document.querySelector(".map-open");
const sitemapTag = document.querySelector(".sitemap");

mapTag.addEventListener("click", function () {
  sitemapTag.classList.toggle("open");

  if (sitemapTag.classList.contains("open")) {
    mapTag.innerHTML =
      '<img src="https://ifh.cc/g/Lor7Fo.png" width="60vw" height="60vw">';
  } else {
    mapTag.innerHTML =
      '<img src="https://ifh.cc/g/vFzqag.png" width="60vw" height="60vw">';
  }
});
