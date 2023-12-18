const containerEl = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
  const colorContainerEl = document.createElement("div");
  colorContainerEl.classList.add("color-container"); 
  containerEl.appendChild(colorContainerEl);
}

const colorContainerEls = document.querySelectorAll(".color-container");

generateColors();

function generateColors() {
  colorContainerEls.forEach((colorContainerEl) => {
    // colorCode를 newColorCode에 저장   
    const newColorCode = randomColor();
    // console.log(newColorCode);
    colorContainerEl.style.backgroundColor = "#" + newColorCode;
    colorContainerEl.innerText = "#" + newColorCode;
  });
}

randomColor();

function randomColor() {
  const chars = "0123456789abscdef";
  const colorCodeLength = 6;
  let colorCode = "";
  // colorCodeLength의 길이만큼 반복을 함 (인덱스 0~5)
  for (let index = 0; index < colorCodeLength; index++) {
    //chars의 길이만큼 랜덤으로 숫자를 생성
    const randomNum = Math.floor(Math.random() * chars.length);
    // 램덤생성숫자~ 램덤생성숫자+1 만큼 substring으로 chars의 문자열을 자르고 colorcode에 +
    colorCode += chars.substring(randomNum, randomNum + 1);
  }
  return colorCode;
}

