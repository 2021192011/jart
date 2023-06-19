// 포인트를 잡고 화면을 좌우로 움직임
const point = document.querySelector(".point");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
let isDragging = false;
let startPointX, startLWidth, startRWidth;

point.addEventListener("mousedown", (event) => {
  event.preventDefault();
  isDragging = true;
  startPointX = event.clientX;
  startLWidth = left.offsetWidth;
  startRWidth = right.offsetWidth;
  point.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (event) => {
  if (isDragging) {
    const deltaX = event.clientX - startPointX;
    const LWidth = startLWidth + deltaX;
    const RWidth = startRWidth - deltaX;

    left.style.width = LWidth + "px";
    right.style.width = RWidth + "px";
    point.style.left = LWidth + "px";
  }
});

document.addEventListener("mouseup", () => {
  if (isDragging) {
    isDragging = false;
    point.style.cursor = "grab";
  }
});

// //커스텀 (버튼을 클릭하면 preview 이미지와 info의 정보가 변하게 함)
// deck
const previewTagL = document.querySelector(".left .preview");
const previewTagR = document.querySelector(".right .preview");

const a1TagL = document.querySelector(".left .a1");
const a2TagL = document.querySelector(".left .a2");
const a1TagR = document.querySelector(".right .a1");
const a2TagR = document.querySelector(".right .a2");

const infoL = document.querySelector(".left .info h1");
const infoR = document.querySelector(".right .info h1");

const deckL = document.querySelector(".left .info .deck");
const deckR = document.querySelector(".right .info .deck");

a1TagL.addEventListener("click", function () {
  previewTagL.innerHTML =
    '<img class="boardimg" src="https://ifh.cc/g/7pJyWl.png" alt="preview" height="770px">';
  deckL.innerText = "Long Shape 200$ -";
  infoL.innerText = "Long board";
});
a2TagL.addEventListener("click", function () {
  previewTagL.innerHTML =
    '<img class="boardimg" src="https://ifh.cc/g/C0TTGj.png" alt="preview" height="770px">';
  deckL.innerText = "Cruising Long Shape 220$ -";
  infoL.innerText = "Cruising Long board";
});

a1TagR.addEventListener("click", function () {
  previewTagR.innerHTML =
    '<img class="boardimg" src="https://ifh.cc/g/7pJyWl.png" alt="preview" height="770px">';
  deckR.innerText = "Long Shape 200$ -";
  infoR.innerText = "Long board";
});
a2TagR.addEventListener("click", function () {
  previewTagR.innerHTML =
    '<img class="boardimg" src="https://ifh.cc/g/C0TTGj.png" alt="preview" height="770px">';
  deckR.innerText = "Cruising Long Shape 220$ -";
  infoR.innerText = "Cruising Long board";
});

// truck
const b1TagL = document.querySelector(".left .b1");
const b2TagL = document.querySelector(".left .b2");
const b1TagR = document.querySelector(".right .b1");
const b2TagR = document.querySelector(".right .b2");
const truckL = document.querySelector(".left .info .truck");
const truckR = document.querySelector(".right .info .truck");

b1TagL.addEventListener("click", function () {
  previewTagL.innerHTML =
    '<img class="boardimg" src="https://ifh.cc/g/7pJyWl.png" alt="preview" height="770px">';
  truckL.innerText = "Silver Iron Truck 30$ -";
});
b2TagL.addEventListener("click", function () {
  previewTagL.innerHTML =
    '<img class="boardimg" src="https://ifh.cc/g/f15lDz.png" alt="preview" height="770px">';
  truckL.innerText = "Gold Iron Truck 30$ -";
});

b1TagR.addEventListener("click", function () {
  previewTagR.innerHTML =
    '<img class="boardimg" src="https://ifh.cc/g/7pJyWl.png" alt="preview" height="770px">';
  truckR.innerText = "Silver Iron Truck 30$ -";
});
b2TagR.addEventListener("click", function () {
  previewTagR.innerHTML =
    '<img class="boardimg" src="https://ifh.cc/g/f15lDz.png" alt="preview" height="770px">';
  truckR.innerText = "Gold Iron Truck 30$ -";
});

// wheel
const c1TagL = document.querySelector(".left .c1");
const c2TagL = document.querySelector(".left .c2");
const c1TagR = document.querySelector(".right .c1");
const c2TagR = document.querySelector(".right .c2");
const wheelL = document.querySelector(".left .info .wheel");
const wheelR = document.querySelector(".right .info .wheel");

c1TagL.addEventListener("click", function () {
  previewTagL.innerHTML =
    '<img class="boardimg" src="https://ifh.cc/g/7pJyWl.png" alt="preview" height="770px">';
  wheelL.innerText = "White Round Wheel 40$  -";
});
c2TagL.addEventListener("click", function () {
  previewTagL.innerHTML =
    '<img class="boardimg" src="https://ifh.cc/g/bhy6Bt.png" alt="preview" height="770px">';
  wheelL.innerText = "Black Round Wheel 40$  -";
});

c1TagR.addEventListener("click", function () {
  previewTagR.innerHTML =
    '<img class="boardimg" src="https://ifh.cc/g/7pJyWl.png" alt="preview" height="770px">';
  wheelR.innerText = "White Round Wheel 40$  -";
});
c2TagR.addEventListener("click", function () {
  previewTagR.innerHTML =
    '<img class="boardimg" src="https://ifh.cc/g/bhy6Bt.png" alt="preview" height="770px">';
  wheelR.innerText = "Black Round Wheel 40$  -";
});

// patten
const d1TagL = document.querySelector(".left .d1");
const d2TagL = document.querySelector(".left .d2");
const d3TagL = document.querySelector(".left .d3");
const d1TagR = document.querySelector(".right .d1");
const d2TagR = document.querySelector(".right .d2");
const d3TagR = document.querySelector(".right .d3");

const pattenL = document.querySelector(".left .info .patten");
const pattenR = document.querySelector(".right .info .patten");

d1TagL.addEventListener("click", function () {
  previewTagL.innerHTML =
    '<img class="boardimg" src="https://ifh.cc/g/7pJyWl.png" alt="preview" height="770px">';
  pattenL.innerText = "None Patten 100$  -";
});
d2TagL.addEventListener("click", function () {
  previewTagL.innerHTML =
    '<img class="boardimg" src="https://ifh.cc/g/A8r6gj.png" alt="preview" height="770px">';
  pattenL.innerText = "Black&White Patten 150$  -";
});
d3TagL.addEventListener("click", function () {
  previewTagL.innerHTML =
    '<img class="boardimg" src="https://ifh.cc/g/HyhgG4.png" alt="preview" height="770px">';
  pattenL.innerText = "Rainbow Patten 150$  -";
});

d1TagR.addEventListener("click", function () {
  previewTagR.innerHTML =
    '<img class="boardimg" src="https://ifh.cc/g/7pJyWl.png" alt="preview" height="770px">';
  pattenR.innerText = "None Patten 100$  -";
});
d2TagR.addEventListener("click", function () {
  previewTagR.innerHTML =
    '<img class="boardimg" src="https://ifh.cc/g/A8r6gj.png" alt="preview" height="770px">';
  pattenR.innerText = "Black&White Patten 150$  -";
});
d3TagR.addEventListener("click", function () {
  previewTagR.innerHTML =
    '<img class="boardimg" src="https://ifh.cc/g/HyhgG4.png" alt="preview" height="770px">';
  pattenR.innerText = "Rainbow Patten 150$  -";
});

// pose
const pose1TagL = document.querySelector(".left .pose1");
const pose2TagL = document.querySelector(".left .pose2");
const pose3TagL = document.querySelector(".left .pose3");
const pose1TagR = document.querySelector(".right .pose1");
const pose2TagR = document.querySelector(".right .pose2");
const pose3TagR = document.querySelector(".right .pose3");

pose1TagL.addEventListener("click", function () {
  previewTagL.innerHTML =
    '<img class="boardimg" src="https://ifh.cc/g/ndGDOz.png" alt="image" width="500px">';
});
pose2TagL.addEventListener("click", function () {
  previewTagL.innerHTML =
    '<img class="boardimg" src="https://ifh.cc/g/KPadYV.png" alt="image" width="500px">';
});
pose3TagL.addEventListener("click", function () {
  previewTagL.innerHTML =
    '<img class="boardimg" src="https://ifh.cc/g/GV2j05.png" alt="image" width="500px">';
});

pose1TagR.addEventListener("click", function () {
  previewTagR.innerHTML =
    '<img class="boardimg" src="https://ifh.cc/g/ndGDOz.png" alt="image" width="500px">';
});
pose2TagR.addEventListener("click", function () {
  previewTagR.innerHTML =
    '<img class="boardimg" src="https://ifh.cc/g/KPadYV.png" alt="image" width="500px">';
});
pose3TagR.addEventListener("click", function () {
  previewTagR.innerHTML =
    '<img class="boardimg" src="https://ifh.cc/g/GV2j05.png" alt="image" width="500px">';
});

// //customs창 설정 (스텝을 클릭하면 해당 스텝 창이 활성화 됨)
// left
var deckTagL = document.querySelector(".left .decks");
var truckTagL = document.querySelector(".left .trucks");
var wheelTagL = document.querySelector(".left .wheels");
var pattenTagL = document.querySelector(".left .pattens");

document.addEventListener("DOMContentLoaded", function () {
  truckTagL.addEventListener("click", function () {
    truckTagL.classList.add("addB");
    deckTagL.classList.add("add");
  });

  wheelTagL.addEventListener("click", function () {
    wheelTagL.classList.add("addC");
    deckTagL.classList.add("add");
    truckTagL.classList.add("add");
    truckTagL.classList.add("addC");
  });

  pattenTagL.addEventListener("click", function () {
    pattenTagL.classList.add("addD");
    deckTagL.classList.add("add");
    truckTagL.classList.add("add");
    truckTagL.classList.add("addC");
    wheelTagL.classList.add("add");
    wheelTagL.classList.add("addD");
  });

  deckTagL.addEventListener("click", function () {
    deckTagL.classList.remove("add");
    truckTagL.classList.remove("add");
    truckTagL.classList.remove("addB");
    truckTagL.classList.remove("addC");
    wheelTagL.classList.remove("add");
    wheelTagL.classList.remove("addC");
    wheelTagL.classList.remove("addD");
    pattenTagL.classList.remove("addD");
  });
});

// right
var deckTagR = document.querySelector(".right .decks");
var truckTagR = document.querySelector(".right .trucks");
var wheelTagR = document.querySelector(".right .wheels");
var pattenTagR = document.querySelector(".right .pattens");

document.addEventListener("DOMContentLoaded", function () {
  truckTagR.addEventListener("click", function () {
    truckTagR.classList.add("addB");
    deckTagR.classList.add("add");
  });

  wheelTagR.addEventListener("click", function () {
    wheelTagR.classList.add("addC");
    deckTagR.classList.add("add");
    truckTagR.classList.add("add");
    truckTagR.classList.add("addC");
  });

  pattenTagR.addEventListener("click", function () {
    pattenTagR.classList.add("addD");
    deckTagR.classList.add("add");
    truckTagR.classList.add("add");
    truckTagR.classList.add("addC");
    wheelTagR.classList.add("add");
    wheelTagR.classList.add("addD");
  });

  deckTagR.addEventListener("click", function () {
    deckTagR.classList.remove("add");
    truckTagR.classList.remove("add");
    truckTagR.classList.remove("addB");
    truckTagR.classList.remove("addC");
    wheelTagR.classList.remove("add");
    wheelTagR.classList.remove("addC");
    wheelTagR.classList.remove("addD");
    pattenTagR.classList.remove("addD");
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
