const tabs = Array.from(document.querySelectorAll(".tabs li"));
const contents = Array.from(document.querySelectorAll(".content div"));

const oneContent = document.querySelector(".one");
const twoContent = document.querySelector(".two");
const threeContent = document.querySelector(".three");
tabs.forEach((tab, indexTab) => {
  tab.addEventListener("click", () => {
    removeActive();
    tab.classList.add("active");
    contents.forEach((content, indexCon) => {
      if (indexTab === indexCon) {
        content.classList.add("active");
      }
    });
  });
});
let removeActive = function () {
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
  contents.forEach((content) => {
    content.classList.remove("active");
  });
};
