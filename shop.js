// //product section
var section = document.querySelector(".product");
var offsetX = 0;
var offsetY = 0;
var drag = false;

// 이미지를 클릭하면 옵션창이 나타남
section.addEventListener("mousedown", function (event) {
  if (event.target.classList.contains("item-img")) {
    const item = event.target.closest(".item");
    item.classList.toggle("clicked");

    const itemImg = event.target;
    if (item.classList.contains("clicked")) {
      itemImg.style.transform = "scale(1)";
    } else {
      itemImg.style.transform = "scale(1.3)";
    }
  } else {
    drag = true;
    offsetX = event.clientX - section.offsetLeft;
    offsetY = event.clientY - section.offsetTop;
  }

  // 클릭 후 드래그 비활성화
  if (event.target.tagName === "IMG") {
    event.preventDefault();
  }
});

// 드래그하면 화면을 자유롭게 이용할 수 있음
section.addEventListener("mousemove", function (event) {
  if (drag) {
    var x = event.clientX - offsetX;
    var y = event.clientY - offsetY;
    section.style.left = x + "px";
    section.style.top = y + "px";
  }
});

section.addEventListener("mouseup", function () {
  drag = false;
});
section.addEventListener("mouseout", function () {
  drag = false;
});

// 중앙에 위치한 이미지 확대
window.addEventListener("mousemove", function (event) {
  if (drag) {
    var x = event.clientX - offsetX;
    var y = event.clientY - offsetY;
    section.style.left = x + "px";
    section.style.top = y + "px";

    const itemImgs = document.querySelectorAll(".item-img");
    itemImgs.forEach(function (itemImg) {
      var rect = itemImg.getBoundingClientRect();
      var centerX = window.innerWidth / 2;
      var centerY = window.innerHeight / 2;

      if (
        rect.left < centerX + 150 &&
        rect.right > centerX - 150 &&
        rect.top < centerY + 150 &&
        rect.bottom > centerY - 150
      ) {
        if (!itemImg.closest(".item").classList.contains("clicked")) {
          itemImg.style.transform = "scale(1.3)";
        }
      } else {
        itemImg.style.transform = "scale(1)";
      }
    });
  }
});

// nav 메뉴 (아이콘 클릭시 메뉴가 펼쳐짐)
const navTag = document.querySelector("nav");
const categoryTag = document.querySelector(".category img");
const alignTag = document.querySelector(".align img");

categoryTag.addEventListener("click", function () {
  navTag.classList.toggle("add");
});

alignTag.addEventListener("click", function () {
  navTag.classList.toggle("add");
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
