const toggle = document.querySelector(".toggle");
const items = Array.from(document.querySelectorAll(".item"));
toggle.addEventListener("click", () => {
  items.forEach((element, index) => {
    if (element.classList.contains("active")) {
      element.classList.remove("active");
    } else {
      element.classList.add("active");
    }
  });
});
