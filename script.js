// const btn = document.querySelectorAll("#img_1");

// const img_1 = document.querySelectorAll(".cards");

// img_1.forEach((cards) => {
//   cards.addEventListener("click", () => {
//     removeActiveClasses();
//     cards.classList.add("active");
//   });
// });

// function removeActiveClasses() {
//   img_1.forEach((cards) => {
//     cards.classList.remove("active");
//   });
// }

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
