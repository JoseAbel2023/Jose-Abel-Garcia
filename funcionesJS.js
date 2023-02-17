
// Obtener el modal
var modal = document.getElementById("myModal");

// Obtener el boton que abre el modal
var btn = document.getElementById("myBtn");

// Obtener el elemento span que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Cuando el ususario haga clic en el botn, se abra el modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Cuando el usuario hace clic en <span> (x), cierra el modal
span.onclick = function() {
  modal.style.display = "none";
}

// Cuando el usuario haga clic en cualquier lugar fuera del modal, ciérrelo.
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


