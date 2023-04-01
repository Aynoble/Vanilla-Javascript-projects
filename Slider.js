const right = document.querySelector(".arrowRight");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const left = document.querySelector(".arrowLeft");
const bottom = document.querySelector(".bottom");

let sliderNumber = 0;
const length = images.length;

for (let x = 0; x < length; x++) {
  const div = document.createElement("div");
  div.className = "button";
  bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".button");

buttons[0].style.backgroundColor = "white";

const resetAllButtons = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = "transparent";
  });
};

buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    resetAllButtons();
    if (i === 0) {
      sliderNumber = 0;
      slider.style.transform = "translateX(0px)";
      button.style.backgroundColor = "white";
    } else {
      button.style.backgroundColor = "white";
      sliderNumber = i;
      slider.style.transform = `translateX(-${sliderNumber * 800}px)`;
    }
  });
});

right.addEventListener("click", () => {
  sliderNumber++;
  if (sliderNumber === 0) {
    slider.style.transform = "translateX(0px)";
  } else if (sliderNumber === length) {
    sliderNumber = 0;
    slider.style.transform = "translateX(0px)";
  } else {
    slider.style.transform = `translateX(-${sliderNumber * 800}px)`;
  }
  resetAllButtons();
  buttons.forEach((button, i) => {
    if (sliderNumber === i) {
      button.style.backgroundColor = "white";
    }
  });
});

left.addEventListener("click", () => {
  if (sliderNumber === 0) {
    sliderNumber = length - 1;
    slider.style.transform = `translateX(-${sliderNumber * 800}px)`;
  } else {
    sliderNumber--;
    slider.style.transform = `translateX(-${sliderNumber * 800}px)`;
  }
  resetAllButtons();
  buttons.forEach((button, i) => {
    if (sliderNumber === i) {
      button.style.backgroundColor = "white";
    }
  });
});
