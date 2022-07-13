"use strict";

// Hero section text animation
const text = document.getElementById("text");
const prog = "Front End Developer";
let idx = 1;

setInterval(writeText, 200);

function writeText() {
  text.innerHTML = prog.slice(0, idx);
  idx++;
  if (idx > prog.length) {
    idx = 1;
  }
}

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.getElementById("show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
};
btnOpenModal.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// PRogress bar
function updateProgressBar(progressBar, value) {
  value = Math.round(value);
  progressBar.querySelector(".progress__fill").style.width = `${value}%`;
  progressBar.querySelector(".progress__text").textContent = `${value}%`;
}

const myProgressBar = document.querySelector(".progress");

updateProgressBar(myProgressBar, 68);

// View all button
