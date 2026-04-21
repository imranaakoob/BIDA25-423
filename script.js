document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll('.card');
  elements.forEach((el, i) => {
    el.style.opacity = 0;
    setTimeout(() => {
      el.style.transition = "0.6s";
      el.style.opacity = 1;
    }, i * 200);
  });
});

function filterProducts() {
  let input = document.getElementById("search").value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let text = card.innerText.toLowerCase();
    card.style.display = text.includes(input) ? "block" : "none";
  });
}
