function r() {
  var val = document.getElementById("rng").value;
    val = (val * 90) / 500;
    document.getElementById("range-bg").style.width = val + "%";
  }
  