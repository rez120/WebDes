const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children); // created an array from track's children
const nextButton = document.querySelector(".carousel__button--right");
const prevButton = document.querySelector(".carousel__button--left");
const dotsNav = document.querySelector(".carousel__nav");
const dots = Array.from(dotsNav.children);

const slideSize = slides[0].getBoundingClientRect(); // cool stuff

console.log(slideSize);

const slideWidth = slideSize.width;

// # arrange the slides next to one another

// slides[0].style.left = slideWidth * 0 + "px";
// slides[1].style.left = slideWidth * 1 + "px";
// slides[2].style.left = slideWidth * 2 + "px";

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + " )";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

// # when i click right move slides to right

nextButton.addEventListener("click", (e) => {
  // move the slide

  const currentSlide = track.querySelector(".current-slide");
  console.log(currentSlide);
  console.log(currentSlide.nextElementSibling);
  const nextSlide = currentSlide.nextElementSibling;
  const amountToMove = nextSlide.style.left;
  console.log(amountToMove);
  //   # move to the next slide
  //   track.style.transform = "translateX(-" + amountToMove + " )";
  //   currentSlide.classList.remove("current-slide");
  //   nextSlide.classList.add("current-slide");
  moveToSlide(track, currentSlide, nextSlide);
});
// # when i click left move slides to left
// # when i click the nav indicator, move to that slide

// 34: 24
