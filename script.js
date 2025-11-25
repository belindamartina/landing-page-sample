// Add smooth scroll effect for buttons
document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("onclick").split("'")[1];
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
  });
});
