const buttons = document.querySelectorAll(".accordion-title");

buttons.forEach((btn) => {
  let target = btn.parentElement.nextElementSibling;

  // init each button with properties
  btn.setAttribute("aria-expanded", "false");

  btn.parentElement.addEventListener("click", (e) => {
    let isExpanded = btn.getAttribute("aria-expanded") === "true" || false;

    btn.setAttribute("aria-expanded", !isExpanded);
    btn.parentElement.classList.toggle("opened");
    btn.previousElementSibling
      .querySelector("span:nth-of-type(2)")
      .classList.toggle("open-icon");
    target.classList.toggle("opened");
    target.hidden = isExpanded;
  });
});
