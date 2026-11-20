const tabs = document.querySelectorAll(".subject-tab");
const cards = document.querySelectorAll(".material-card");
const searchInput = document.querySelector("#searchInput");
const emptyState = document.querySelector("#emptyState");
let selectedSubject = "all";

function filterMaterials() {
  const search = searchInput.value.trim().toLowerCase();
  let visible = 0;
  cards.forEach((card) => {
    const matchesSubject = selectedSubject === "all" || card.dataset.subject === selectedSubject;
    const matchesSearch = card.dataset.title.toLowerCase().includes(search);
    const show = matchesSubject && matchesSearch;
    card.style.display = show ? "" : "none";
    if (show) visible += 1;
  });
  emptyState.style.display = visible ? "none" : "block";
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    selectedSubject = tab.dataset.subject;
    filterMaterials();
  });
});

searchInput.addEventListener("input", filterMaterials);

document.querySelectorAll(".bookmark").forEach((bookmark) => {
  bookmark.addEventListener("click", () => {
    bookmark.textContent = bookmark.textContent === "♡" ? "♥" : "♡";
    bookmark.style.color = bookmark.textContent === "♥" ? "var(--purple)" : "";
  });
});

document.querySelectorAll(".check-box:not(.done)").forEach((check) => {
  check.addEventListener("click", () => {
    check.classList.add("done");
    check.textContent = "✓";
    check.nextElementSibling.querySelector("strong").classList.add("completed");
  });
});
