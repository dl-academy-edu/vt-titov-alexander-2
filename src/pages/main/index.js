var modal = document.querySelector(".modal-background_js");
var buttonOpen = document.querySelector(".button-explore_js");
var modalClose = document.querySelector(".modal-close-button_js");
var input = document.querySelector(".long-input_js");

function r() {
  var val = document.getElementById("rng").value;
  val = (val * 90) / 500;
  document.getElementById("range-bg").style.width = val + "%";
}

buttonOpen.addEventListener("click", function() {
  setTimeout(() => {
    modal.classList.toggle("modal-close");
    input.focus();
  }, 400);
});

modalClose.addEventListener("click", function() {
  setTimeout(() => {
    modal.classList.toggle("modal-close");
    buttonOpen.focus();
  }, 400);
});

window.addEventListener("keydown", function(event) {
  if (!modal.classList.contains("modal-close") && event.code === "Escape") {
    setTimeout(() => {
      modal.classList.toggle("modal-close");
      buttonOpen.focus();
    }, 400);
  }
});
