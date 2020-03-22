var modal = document.querySelector(".modal-background_js");
var buttonOpen = document.querySelector(".button-explore_js");
var modalClose = document.querySelector(".modal-close-button_js");
var input = document.querySelector(".long-input_js");

buttonOpen.addEventListener("click", function() {
  modal.classList.toggle("modal-close");
    input.focus();
  });

modalClose.addEventListener("click", function() {
  modal.classList.toggle("modal-close");
    buttonOpen.focus();
});

window.addEventListener("keydown", function(event) {
  if (!modal.classList.contains("modal-close") && event.code === "Escape") {
    modal.classList.toggle("modal-close");
      buttonOpen.focus();
      }
});

