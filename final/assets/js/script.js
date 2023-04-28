
let sldr = document.getElementById("widthfull");
let show = document.getElementById("demo");

show.innerHTML = sldr.value;

sldr.oninput = function() {
  show.innerHTML = this.value;
}

