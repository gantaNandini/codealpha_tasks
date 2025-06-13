let modal, modalImg, captionText, closeBtn, leftArrow, rightArrow, images, currentIndex;

window.addEventListener("DOMContentLoaded", () => {
  modal = document.getElementById("modal");
  modalImg = document.getElementById("modal-img");
  captionText = document.getElementById("caption");
  closeBtn = document.querySelector(".close");
  leftArrow = document.querySelector(".arrow.left");
  rightArrow = document.querySelector(".arrow.right");
  images = document.querySelectorAll(".gallery img");

  images.forEach((img, index) => {
    img.addEventListener("click", () => {
      currentIndex = index;
      showImage(currentIndex);
    });
  });

  closeBtn.onclick = () => modal.style.display = "none";

  leftArrow.onclick = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  };

  rightArrow.onclick = () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  };
});

function showImage(index) {
  modal.style.display = "flex";
  const img = images[index];
  modalImg.src = img.src;
  captionText.innerText = img.alt;
}
function toggleTheme() {
  const body = document.body;
  const button = document.getElementById("themeToggle");
  
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    button.textContent = "☀️ Light Mode";
  } else {
    button.textContent = "🌙 Dark Mode";
  }
}
