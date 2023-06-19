// //con1
// 화면 중앙에 오면 색상 변경, 애니메이션 작동
const con1Tags = document.querySelectorAll(".text");

document.addEventListener("scroll", function () {
  con1Tags.forEach((tag) => {
    let tagTop = tag.getBoundingClientRect().top;
    let tagMid = tagTop + tag.getBoundingClientRect().height / 2;
    let windowMid = window.innerHeight / 2;

    if (Math.abs(windowMid - tagMid) < 500) {
      tag.classList.add("on");
    }
  });
});

// //con2
// 화면 중앙에 오면 색상 변경
const con2Tags = document.querySelectorAll(".con2 h1");

document.addEventListener("scroll", function () {
  con2Tags.forEach((tag) => {
    let tagTop = tag.getBoundingClientRect().top;
    let tagMid = tagTop + tag.getBoundingClientRect().height / 2;
    let windowMid = window.innerHeight / 2;

    if (Math.abs(windowMid - tagMid) < 80) {
      tag.classList.add("middle");
    } else {
      tag.classList.remove("middle");
    }
  });
});

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
