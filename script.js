const tabs = document.querySelectorAll(".tab");
const chapters = document.querySelectorAll(".chapter");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const targetId = tab.dataset.tab;

    tabs.forEach((item) => item.classList.remove("active"));
    chapters.forEach((chapter) => chapter.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(targetId).classList.add("active");
  });
});
