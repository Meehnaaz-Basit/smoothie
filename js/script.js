// Get elements
const btns = document.querySelector(".btns");
const btnc = document.querySelector(".btnc");
const btnm = document.querySelector(".btnm");
const btnb = document.querySelector(".btnb");
const shapes = document.querySelector(".shapes");
const mainSection = document.querySelector(".main_section");
const circles = document.querySelectorAll(".circle");
const mainSlider = document.querySelector(".main_slider");
const strawberry = document.querySelector(".strawberry");
const mango = document.querySelector(".mango");
const chocolate = document.querySelector(".chocolate");
const blueberry = document.querySelector(".blueberry");
const sliderImage = document.querySelector(".slider_image");
const strBg = document.querySelector(".str-bg");
const manBg = document.querySelector(".man-bg");
const chocoBg = document.querySelector(".choco-bg");
const berryBg = document.querySelector(".berry-bg");
const s_img = document.querySelector(".s-img");
const c_img = document.querySelector(".c-img");
const m_img = document.querySelector(".m-img");
const b_img = document.querySelector(".b-img");

// Add event listeners to the buttons
btns.addEventListener("click", () => {
  circles.forEach((gollu) => {
    gollu.style.backgroundColor = "#f4457a";
  });
  mainSection.style.backgroundColor = "#ff9ebc";
  mainSlider.style.backgroundColor = "#f4457a";
  mainSlider.style.transform = "translate(50%, 50%) rotate(-45deg)";
  // bg
  strBg.classList.add("bg-image-opacity");
  chocoBg.classList.remove("bg-image-opacity");
  manBg.classList.remove("bg-image-opacity");
  berryBg.classList.remove("bg-image-opacity");
  // btn
  s_img.classList.add("slider-effect");
  c_img.classList.remove("slider-effect");
  m_img.classList.remove("slider-effect");
  b_img.classList.remove("slider-effect");
});

btnc.addEventListener("click", () => {
  circles.forEach((gollu) => {
    gollu.style.backgroundColor = "#984200";
  });
  mainSection.style.backgroundColor = "#b86628";
  mainSlider.style.backgroundColor = "#984200";
  mainSlider.style.transform = "translate(50%, 50%) rotate(-135deg)";
  // bg
  strBg.classList.remove("bg-image-opacity");
  chocoBg.classList.add("bg-image-opacity");
  manBg.classList.remove("bg-image-opacity");
  berryBg.classList.remove("bg-image-opacity");
  // btn
  s_img.classList.remove("slider-effect");
  c_img.classList.add("slider-effect");
  m_img.classList.remove("slider-effect");
  b_img.classList.remove("slider-effect");
});

btnm.addEventListener("click", () => {
  circles.forEach((gollu) => {
    gollu.style.backgroundColor = "#ffc200";
  });
  mainSection.style.backgroundColor = "#f8d976";
  mainSlider.style.backgroundColor = "#ffc200";
  mainSlider.style.transform = "translate(50%, 50%) rotate(-225deg)";
  // bg
  strBg.classList.remove("bg-image-opacity");
  chocoBg.classList.remove("bg-image-opacity");
  manBg.classList.add("bg-image-opacity");
  berryBg.classList.remove("bg-image-opacity");
  // btn
  s_img.classList.remove("slider-effect");
  c_img.classList.remove("slider-effect");
  m_img.classList.add("slider-effect");
  b_img.classList.remove("slider-effect");
});

btnb.addEventListener("click", () => {
  circles.forEach((gollu) => {
    gollu.style.backgroundColor = "#4225a1";
  });
  mainSection.style.backgroundColor = "#775bd2";
  mainSlider.style.backgroundColor = "#4225a1";
  mainSlider.style.transform = "translate(50%, 50%) rotate(-315deg)";
  // bg
  strBg.classList.remove("bg-image-opacity");
  chocoBg.classList.remove("bg-image-opacity");
  manBg.classList.remove("bg-image-opacity");
  berryBg.classList.add("bg-image-opacity");
  // btn
  s_img.classList.remove("slider-effect");
  c_img.classList.remove("slider-effect");
  m_img.classList.remove("slider-effect");
  b_img.classList.add("slider-effect");
});
